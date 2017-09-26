'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
     async index() {
        const { ctx} = this;
       // yield app.redis.set('foo', 'bar');
        // get
       // ctx.body = yield app.redis.get('foo');
        /*=====service测试开始====*/

        // ctx.service.user.creatUser({
        //     nickName:'中文测试',
        //     avatar:'http:baidu.com',
        //     account:'10086',
        //     password:'1008610086',
        // });
       /*const token = yield ctx.service.user.userlogin({
            account:'10086',
            password:'1008610086',
        });
       console.log(token);*/
        /*=====service测试结束====*/
        /* this.ctx.body = await ctx.service.userProfile.createUserProfile({
            userId:'1'+Date.now(),
            nickName:'昵称'+Date.now(),
            sex: Math.random() > 0.5?1:2,
            phone:'15180135001',
        });*/
       /* ctx.service.group.createGroup({
            groupName:'data.groupName',
            createUser:'data.createUser',
            groupUser:'data.groupUser',
            groupPicture:'data.groupPicture',
        });*/
      /* ctx.service.timeLine.createTimeLine({
           createUser:'data.createUser',
           content:'data.content',
           praiseUser:'data.praiseUser',
           picture:'data.picture',
           comment:'data.comment',
       });*/
        //ctx.service.queryUserByCondition();

     // this.ctx.body = await ctx.service.user.queryUserByCondition({});
    }
  }
  return HomeController;
};
