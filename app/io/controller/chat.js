/**
 * Created by kangxiaojian on 2017/8/21.
 */
const LoginPrefixKey = 'LOGIN'
module.exports = () => {
    return async function () {
        /* {
         id:'',
         type:'1' // 1： 自己发的 2：接收别人的
         data:{
         type:1, // 1 字符数据 2 图片 3小视屏
         news:'B 你好'
         },
         user：{
         // 当是接收消息时
         // 会返回用户信息
         }
         }*/
        const message = JSON.parse(this.args[0]);
        const toSocketId = await  this.app.redis.get(message.sendTo);
        const userStr = await this.app.redis.get(LoginPrefixKey+message.token);
        if(userStr){
           const user = JSON.parse(userStr);
            const sendMessage = {
                type:2,
                data:message.data,
                user,
            };
            this.app.io.to(toSocketId).emit('chat', JSON.stringify(sendMessage));
        }else{
            this.app.io.emit('res', 'sorry,对方不在线');
        }
    };
};



