/**
 * Created by kangxiaojian on 2017/8/21.
 */
module.exports = () => {
    return async function () {
        /* {
         id:'',
         type:'1' // 1： 自己发的 2：接收别人的
         data:{
            //参考图灵返回数据
         },
         user：{
         // 当是接收消息时
         // 会返回用户信息
         }
         }*/
        const message = JSON.parse(this.args[0]);
        if(message.sendTo == '654321'){
            //与机器人对话
            const result = await this.service.tuling.doTuLingPost(message.data.news);
            const sendMessage = {
                type:2,
                data:result,
                user:{
                }
            };
            this.app.io.emit('chat', JSON.stringify(sendMessage));
        }else{
            const toSocketId = await  this.app.redis.get(message.sendTo);
            const userStr = await this.app.redis.get(message.token);
            if(toSocketId){
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
        }

    };
};



