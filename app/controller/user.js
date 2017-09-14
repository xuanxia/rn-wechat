/**
 * Created by kangxiaojian on 2017/8/24.
 */
module.exports = app => {
    class UserController extends app.Controller {
        async login(){
            const { ctx,service} = this;
            const account = await service.user.userlogin(ctx.request.body);
            ctx.body = { data: account };
        }
        async register(){
            const { ctx,service} = this;
            const createRule = {
                account:{ type: 'string' },
                password:{ type: 'string' },
            };
            // 校验参数
            ctx.validate(createRule);
            const account = await service.user.creatUser(ctx.request.body);
            ctx.body = { data: account };
        }

        async getInfo(){
            const { ctx,service} = this;
            const user = await service.user.getUserInSession(ctx.request.body.token);
            ctx.body = { data: user };
        }


        async queryUserList(){
            const { ctx,service} = this;
            const userList = await service.userProfile.queryUserByCondition(ctx.request.body || {});
            ctx.body = { data: userList };
        }

    }
    return UserController;
};
