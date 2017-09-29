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
                const userId = uuidv1();
                await this.model.User.create({
                    id:userId,
                    account:userInfo.account,
                    password:hash.digest('hex')
                });
                await this.model.UserProfile.create({userId});
                return await this.userLogin(userInfo);
        }
        //用户登录
        async userLogin(userInfo){
                const user = await this.checkUser(userInfo);
                console.log(user);
                if(user){
                    // 往redis中写用户信息 默认30天过期
                    const token = uuidv1();
                    await app.redis.set(token, JSON.stringify(user), 'EX', 30*24*60*60);
                    user['token'] = token;
                    return user;
                }else{
                     app.emit('error', '登录失败', this);
                }
        }
        async userLogout(token){
           const result = await app.redis.del(token);
           return result;
        }
        async checkUser(userInfo){
                let hash = crypto.createHash('sha1');
                hash.update(userInfo.password);
                const rePassWord = hash.digest('hex');

                const user = await this.model.User.findOne({where:{account:userInfo.account}});

                if(user && rePassWord == user.dataValues.password){
                    const userId = user.dataValues.id;
                    const userProfile = await this.model.UserProfile.findOne({where:{userId}});
                    return userProfile.dataValues
                }else{
                    return false;
                }
        }

        async checkUserInSession(token){
                  if(!token){
                        return false;
                    }
                  const userStr =  await app.redis.get(token);
            try {
                if(userStr){
                    return JSON.parse(userStr);
                }else{
                    return false
                }
            }catch (e){
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
