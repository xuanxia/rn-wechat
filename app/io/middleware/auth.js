/**
 * Created by kangxiaojian on 2017/8/21.
 */
module.exports = app => {

    return function* (next) {
      //TODO 对socket连接进行合法校验
        yield* next;
        // execute when disconnect
        // 将下线的用户从缓存中剔除
        const token = yield  this.app.redis.get(this.req.socket.id);
        yield this.app.redis.del(token);
        yield this.app.redis.del(this.req.socket.id);
        // TODO 根据用户token 查询用户信息打印log
        console.log(token+'下线了');
    };
};