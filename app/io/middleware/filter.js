/**
 * Created by kangxiaojian on 2017/8/21.
 */
module.exports = app =>{
    return function* (next) {
      //  this.socket.emit('res', 'packet received!');
        //TODO 过滤一些敏感信息
        yield* next;
    };
};