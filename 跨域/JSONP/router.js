app.get('/getNews', function(req, res){

	var news = [
        "延迟退休政策不搞一刀切 或将“女先男后”",
        "亚冠-痛失好局!鲁能获两点球反遭10人浦项2-2追平",
        "公务员涨薪方案结合养老金并轨 北京部分人员工资已涨",
        "这名经济学家逝世后 六届政治局常委送了花圈",
        "大家都在哀悼余光中 却没注意这位开国将军走了",
        "文在寅首次访华 做了这件“前所未有”的事"
        ]
	var data = [];
	for(var i=0; i<3; i++){
		var index = parseInt(Math.random()*news.length);
		data.push(news[index]);
		news.splice(index, 1);
	}


	var cb = req.query.callback;
	if(cb){
		res.send(cb + '('+ JSON.stringify(data) + ')');
	}else{
		res.send(data);
	}

	
})