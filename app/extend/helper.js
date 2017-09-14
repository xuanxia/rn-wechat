/**
 * Created by kangxiaojian on 2017/9/12.
 */
module.exports = {
   // foo(param) {
        // this 是 helper 对象，在其中可以调用其他 helper 方法
        // this.ctx => context 对象
        // this.app => application 对象
   // },
    getPagingSize(pageSize,pageNum=1,option){
        let order_by = 'createdAt';
        let order = 'ASC';
        let keyWords = '';
        if(option && option.order_by){
            order_by = option.order_by;
        }
        if(option && option.order){
            order = option.order;
        }
        if(option && option.keyWords){
            keyWords = option.keyWords;
        }
        return {
            offset:(pageNum-1) * pageSize,
            limit:pageSize,
            order_by,
            order,
            keyWords
        }
    }
};
