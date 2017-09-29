
/**
 * Created by kangxiaojian on 2017/9/4.
 */
module.exports = app => {
    class RelationService extends app.Service {
        constructor(ctx){
            super(ctx);
            this.model = this.ctx.model;
        }
        async createRelation(relation){
            const relationResult = await this.model.Relation.create({
                initiativeUser:relation.initiativeUser,
                acceptUser:relation.acceptUser,
            });
            return relationResult;
        }
        async updateRelation(id,relation){
            const relationModel = await this.ctx.model.Relation.findById(id);
            if (!relationModel) {
                // this.ctx.throw(404, 'user not found');
            }
            return await relationModel.update(relation);
        }
       /* 入参结构
       *  {
            pageSize:10,
            pageNum:1,
            initiativeUser:'1111112222',
            type:1
           }
       * */
        async queryList(queryData){
            console.log(queryData);
            const {offset,limit,order_by,order} = this.ctx.helper.getPagingSize(queryData.pageSize,queryData.pageNum,{keyWords:queryData.keyWords});
            const initiativeUser = queryData.initiativeUser;
            let queryWhere = {
                initiativeUser: initiativeUser,
            };
            if(queryData.type || queryData.type ==0 ){
                queryWhere['type'] = queryData.type
            }
            return await this.model.Relation.findAndCountAll({
                //attributes:['acceptUser'],
                offset,
                limit,
                order: [[ order_by, order.toUpperCase() ]],
                where: queryWhere
            });
        }
    }
    return RelationService;
};
