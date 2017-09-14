/**
 * Created by kangxiaojian on 2017/9/4.
 */
module.exports = app => {
    class GroupService extends app.Service {
        constructor(ctx){
            super(ctx);
            this.model = this.ctx.model;

        }
        async createGroup(group){
            const groupResult = await this.model.Group.create({
                groupName:group.groupName,
                createUser:group.createUser,
                groupUser:group.groupUser,
                groupPicture:group.groupPicture,
            });
            return groupResult;
        }


    }
    return GroupService;
};

