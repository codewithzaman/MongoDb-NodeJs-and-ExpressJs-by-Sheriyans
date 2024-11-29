// protool means rules jo internet banaanay walon nay banay hn, un rules ko follow krna zarori hy
// or yeh rules follown hon to yeh rules operating system k software mn pre installed atay hn 
// http b yahi protocol hy iss k bina na hum internet pr na request kr sktay hn na response

const http = require('http');
const server = http.createServer(function (req,res) {
    res.end('hello world')
})
server.listen(3000);