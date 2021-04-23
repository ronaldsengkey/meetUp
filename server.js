const express = require('express');
var app = express();
const got = require('got');

const port = 8080;
let defHeaders = {'Content-Type': 'application/json',"Accept": "*/*","Cache-Control": "no-cache"};
let gotReq = got.extend({
	// prefixUrl: 'http://meetup.zapto.org:8092/',
    prefixUrl: 'http://192.168.0.100:8092/',
	responseType: 'json',
    resolveBodyOnly: true,
});

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static('dist');

// 1st call for unredirected requests 
app.use(staticFileMiddleware);

app.get("/", (_req, res) => {
    try {
      res.sendFile('/dist/index.html');
    } catch (error) {
      res.json({ success: false, message: "Something went wrong" });
    }
});

// 2nd call for redirected requests
app.use(staticFileMiddleware);

app.listen(port, function () {
  console.log('app listening on port '+port+'!');
});

async function gotCall({url,data = {},method = 'get',headerExtra = {}}){
    let callback;
    return new Promise(async function(resolve,reject){
        if(headerExtra != {}) gotReq = gotReq.extend({headers: Object.assign(defHeaders,headerExtra)})
        else gotReq = gotReq.extend({headers: defHeaders})

        switch(method){
            case 'get':
                callback = await gotReq.get(url)
                break;
            case 'post':
                callback = await gotReq.post(url,data)
                break;
            case 'put':
                callback = await gotReq.put(url,data)
                break;
            case 'delete':
                callback = await gotReq.delete(url,data)
                break;
            default:
                break;
        }
        resolve(callback)
    })
}

app.get("/companyList", async (req, res) => {
    let callData = await gotCall({method:'get',url:'account/master/company',headerExtra:{param:JSON.stringify({day:req.headers.day})}})
    res.send(callData);
});