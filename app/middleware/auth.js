/**
 * Created by kangxiaojian on 2017/8/24.
 */
module.exports = app => {
    return function* (next) {
        let prams = this.request.body;
       /* { account: 'account111',
            nickName: 'nick_name111',
            password: 'nick_name111',
            avatar: 'http://www.baidu.com' }*/
       //TODO 这里对参数进行校验 做个拦截器
        const userInfo = yield this.service.user.checkUserInSession(prams.token);
        if(prams.token && userInfo){
            //往request对象中挂载一个user对象 当前请求用户的信息
            this.request.user = userInfo;
            yield* next;
        }else{
            this.response.ctx.body = {
                code:"NO_LOGIN_ERROR",
                message:'没有登录',
            };
        }
    };
};