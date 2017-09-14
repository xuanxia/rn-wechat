/**
 * Created by kangxiaojian on 2017/8/21.
 */
module.exports = () => {
    return async function () {
        const message = JSON.parse(this.args[0]);
        const toSocketId = await  this.app.redis.get(message.sendTo);
        this.app.io.to(toSocketId).emit('res', JSON.stringify(message.data));
    };
};



