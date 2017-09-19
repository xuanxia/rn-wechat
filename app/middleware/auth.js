/**
 * Created by kangxiaojian on 2017/8/24.
 */
const LoginPreixKey = 'LOGIN';
module.exports = app => {
    return function* (next) {
        const {request,response,logger,service} = this;
        let prams = request.body;
        logger.info('请求json: %j', request.body);
       //TODO 这里对参数进行校验 做个拦截器
        const userInfo = yield service.user.checkUserInSession(LoginPreixKey+prams.token);
        if(prams.token && userInfo){
            //往request对象中挂载一个user对象 当前请求用户的信息
            request.user = userInfo;
            yield* next;
            logger.info('返回json: %j', response.ctx.body);
        }else{
            response.ctx.body = {
                code:"NO_LOGIN_ERROR",
                message:'没有登录',
            };
            logger.info('返回json: %j', response.ctx.body);
        }
    };
};