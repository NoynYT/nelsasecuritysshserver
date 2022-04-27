const http = require("http")

var server = http.createServer()

server.on("request", function(req, res){
    if (req.url == "/"){
        res.write("test")
        res.end()
    }
})

server.listen(8080)
