/**
 * Created by kangxiaojian on 2017/8/21.
 */
const uuidv1 = require('uuid/v1');
const crypto = require('crypto');
module.exports = app => {
    class UserService extends app.Service {
        constructor(ctx){
            super(ctx);
            this.model = this.ctx.model;
        }
        // 注册用户
        async creatUser(userInfo){
                let hash = crypto.createHash('sha1');
                hash.update(userInfo.password);
                const user = await this.model.User.create({
                    id:uuidv1(),
                    account:userInfo.account,
                    password:hash.digest('hex')
                });
                return user;
        }
        //用户登录
        async userlogin(userInfo){
                const user = await this.checkUser(userInfo);
                if(user){
                    // 往redis中写用户信息 默认30天过期
                    await app.redis.set(user.id, JSON.stringify(user), 'EX', 30*24*60*60);
                    return user;
                }else{
                     app.emit('error', '登录失败', this);
                }
        }

        async checkUser(userInfo){
                let hash = crypto.createHash('sha1');
                hash.update(userInfo.password);
                const rePassWord = hash.digest('hex');
                const user = await this.model.User.findByAccount(userInfo.account);
                if(rePassWord == user.dataValues.password){
                    return user.dataValues
                }else{
                    return false;
                }
        }

        async checkUserInSession(token){
                  if(!token){
                        return false;
                    }
                  const userStr =  await app.redis.get(token);
                  if(userStr){
                      return JSON.parse(userStr);
                  }else{
                      return false
                  }
        }
        async getUserInSession(token){
                const userStr =  await app.redis.get(token);
                return JSON.parse(userStr);
        }

    }
    return UserService;
};
