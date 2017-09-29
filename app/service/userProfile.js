/**
 * Created by kangxiaojian on 2017/9/7.
 */
module.exports = app => {
    class UserProfileService extends app.Service {
        constructor(ctx){
            super(ctx);
            this.model = this.ctx.model;

        }
        async updateUserProfile(userProfile){
            const userProModel = await this.model.UserProfile.findById(userProfile.id);
            if(!userProModel){
                // 不存在
            }
            return await userProModel.update(userProfile);
        }
        async queryUserProfile(userId){
            const userProfileResult =await this.model.UserProfile.findOne({where:{userId}});
            return userProfileResult;
        }

        // 根据条件查询用户 分页
        // { offset = 0, limit = 10, order_by = 'createdAt', order = 'ASC'}
        async queryUserByCondition(queryData){
            const {offset,limit,order_by,order,keyWords} = this.ctx.helper.getPagingSize(queryData.pageSize,queryData.pageNum,{keyWords:queryData.keyWords});
            return await this.model.UserProfile.findAndCountAll({
                offset,
                limit,
                order: [[ order_by, order.toUpperCase() ]],
                where: {
                    $or:[
                        {
                            phone: {
                                $like: '%'+keyWords+'%'
                            },
                        },{
                            nickName: {
                                $like: '%'+keyWords+'%'
                            }
                        }
                    ]
                }
            });
        }
        // 根据userId列表 批量查询
        async queryUserByUserIds(list){
            return await this.model.UserProfile.findAndCountAll({ where: { userId: list } })
        }

    }
    return UserProfileService;
};


