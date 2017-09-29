/**
 * Created by kangxiaojian on 2017/9/9.
 */
module.exports = app => {
    class RelationController extends app.Controller {
        async addFriend(){
            const { ctx,service} = this;
            const relation = {
                initiativeUser:ctx.request.user.userId,
                acceptUser:ctx.request.body.acceptUser
            };
            const result = await service.relation.createRelation(relation);
            ctx.body = { data: result };
        }
        async acceptFriend(){
            const { ctx,service} = this;
            const id = ctx.request.body.id;
            const result = await service.relation.updateRelation(id,{type:1});
            ctx.body = { data: result };
        }
        async delFriend(){
            const { ctx,service} = this;
            const id = ctx.request.body.id;
            const result = await service.relation.updateRelation(id,{type:3});
            ctx.body = { data: result };
        }

    }
    return RelationController;
};
