/**
 * Created by kangxiaojian on 2017/9/14.
 */
module.exports = () => {

    return async function () {
        const message = JSON.parse(this.args[0]);
        //以用户token 为key 连接标志socketId为值保存
        await  this.app.redis.set(message.token,this.socket.id,'EX', 24*60*60);
        await  this.app.redis.set(this.socket.id,message.token,'EX', 24*60*60);
        const resultMessage = {
            flag:'success',
            data:{

            }
        };
        this.socket.emit('res', JSON.stringify(resultMessage));
    };
};

