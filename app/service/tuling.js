/**
 * Created by kangxiaojian on 2017/9/25.
 */

module.exports = app => {
    class tulingService extends app.Service {
        constructor(ctx){
            super(ctx);
        }
        async doTuLingPost(info){
            const tulingConfig = app.config.tuling;
            const result = await app.curl(tulingConfig.api, {
                // 必须指定 method
                method: 'POST',
                // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
                contentType: 'json',
                data: {
                    key:tulingConfig.key,
                    info,
                    userid:'123456',
                },
                // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
                dataType: 'json',
            });
            return result.data;
        }
    }
    return tulingService;
};




/*
 http://www.tuling123.com/help/h_cent_webapi.jhtml?nav=doc

40001	参数key错误
40002	请求内容info为空
40004	当天请求次数已使用完
40007	数据格式异常


 Code	说明
 100000	文本类
 200000	链接类
 302000	新闻类
 308000	菜谱类
 313000（儿童版）	儿歌类
 314000（儿童版）	诗词类


 {
 "code":100000,
 "text":"你也好 嘻嘻"
 }

{
 "code": 200000,
 "text": "亲，已帮你找到图片",
 "url": "http://m.image.so.com/i?q=%E5%B0%8F%E7%8B%97"
 }

{
 "code": 302000,
 "text": "亲，已帮您找到相关新闻",
 "list": [
     {
         "article": "工信部:今年将大幅提网速降手机流量费",
         "source": "网易新闻",
         "icon": "",
         "detailurl": "http://news.163.com/15/0416/03/AN9SORGH0001124J.html"
     },
    ]
 }

 {
 "code": 200000,
 "text": "亲，已帮你找到列车信息",
 "url": "http://touch.qunar.com/h5/train/trainList?startStation=%E5%8C%97%E4%BA%AC&endStation=%E6%8B%89%E8%90%A8&searchType=stasta&date=2015-12-25&sort=3&filterTrainType=1&filterTrainType=2&filterTrainType=3&filterTrainType= 4&filterTrainType=5&filterTrainType=6&filterTrainType=7&filterDeptTimeRa"
 }

{
 "code": 308000,


 "text": "亲，已帮您找到菜谱信息",


 "list": [{


 "name": "鱼香肉丝",


 "icon": "http://i4.xiachufang.com/image/280/cb1cb7c49ee011e38844b8ca3aeed2d7.jpg",


 "info": "猪肉、鱼香肉丝调料 | 香菇、木耳、红萝卜、黄酒、玉米淀粉、盐",


 "detailurl": "http://m.xiachufang.com/recipe/264781/"


 }]


 {


 "code": 313000,


 "text": "开始播放音乐。",


 "function": {


 "song": "刘德华",


 "singer": "忘情水"


 }


 }

 }


 "code": 314000,


 "text": "开始朗读诗词。",


 "function": {


 "author": "李白",


 "name": "望庐山瀑布"


 }


 }


 */