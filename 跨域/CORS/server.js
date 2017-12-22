var http = require('http')
var fs = require('fs')
var path = require('path')
var url = require('url')

http.createServer(function(req, res){
  var pathObj = url.parse(req.url, true)

  switch (pathObj.pathname) {
    case '/getNews':
      var news = [
        "延迟退休政策不搞一刀切 或将“女先男后”",
        "亚冠-痛失好局!鲁能获两点球反遭10人浦项2-2追平",
        "公务员涨薪方案结合养老金并轨 北京部分人员工资已涨",
        "这名经济学家逝世后 六届政治局常委送了花圈",
        "大家都在哀悼余光中 却没注意这位开国将军走了",
        "文在寅首次访华 做了这件“前所未有”的事"
        ]

      res.setHeader('Access-Control-Allow-Origin','http://localhost:8080')
      //res.setHeader('Access-Control-Allow-Origin','*')
      res.end(JSON.stringify(news))
      break;
    default:
      fs.readFile(path.join(__dirname, pathObj.pathname), function(e, data){
        if(e){
          res.writeHead(404, 'not found')
          res.end('<h1>404 Not Found</h1>')
        }else{
          res.end(data)
        }
      }) 
  }
}).listen(8080)