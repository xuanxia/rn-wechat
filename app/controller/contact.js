/**
 * Created by kangxiaojian on 2017/9/12.
 */

module.exports = app => {
    class ContactController extends app.Controller {
        // 获取联系人列表 type 1 已是好友 0待确认好友
        async getList(){
            const { ctx,service} = this;
            //TODO 后期可优化点
            const queryPrams = {
                pageSize:200,
                pageNum:1,
                initiativeUser:ctx.request.user.userId,
                type:ctx.request.body.type
            };
            const userList = await service.relation.queryList(queryPrams);
            let list = [];
            userList.rows.forEach((item,index)=>{
                list.push(item.acceptUser);
            });
            const contactList = await service.userProfile.queryUserByUserIds(list);
            ctx.body = { data: contactList };
        }

    }
    return ContactController;
};
