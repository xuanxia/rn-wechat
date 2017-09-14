/**
 * Created by kangxiaojian on 2017/8/21.
 */
module.exports = () => {
    return async function () {
        const message = this.args[0];
       // const say = await this.service.user.say();
        this.socket.emit('res', message);
    };
};



