/**
 * Created by kangxiaojian on 2017/8/24.
 */
module.exports = app => {
    class UserController extends app.Controller {
        async login(){
            const { ctx,service} = this;
            const account = await service.user.userLogin(ctx.request.body);
            ctx.body = { data: account };
        }
        async logout(){
            const { ctx,service} = this;
            const result = await service.user.userLogout(ctx.request.user.userId);
            ctx.body = { data: result };
        }
        async register(){
            const { ctx,service} = this;
            const createRule = {
                account:{ type: 'string' },
                password:{ type: 'string' },
            };
            // 校验参数
            ctx.validate(createRule);
            //TODO 唯一性校验
            const account = await service.user.creatUser(ctx.request.body);
            ctx.body = { data: account };
        }

        async getInfo(){
            const { ctx,service} = this;
            const user = await service.user.getUserInSession(ctx.request.body.token);
            ctx.body = { data: user };
        }
        async getUserProfile(){
            const { ctx,service} = this;
            const userProfile = await service.userProfile.queryUserProfile(ctx.request.body.userId);
            ctx.body = { data: userProfile };
        }

        //获取用户资料列表
        async queryUserList(){
            const { ctx,service} = this;
            const userList = await service.userProfile.queryUserByCondition(ctx.request.body || {});
            ctx.body = { data: userList };
        }

       //补全用户信息
        async addUserProfile(){
            const { ctx,service} = this;
            const prams = ctx.request.body;
            const createRule = {
                nickName:{ type: 'string' },
                avatar:{ type: 'string' },
                phone:{ type: 'string' },
            };
            // 校验参数
            ctx.validate(createRule);
            const userProfile = await service.userProfile.updateUserProfile(prams);
            ctx.body = { data: userProfile };
        }

    }
    return UserController;
};
