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
    },
    getuuid(len, radix){
        var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
        var uuid = [], i;
        radix = radix || chars.length;

        if (len) {
            // Compact form
            for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random()*radix];
        } else {
            // rfc4122, version 4 form
            var r;

            // rfc4122 requires these characters
            uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
            uuid[14] = '4';

            // Fill in random data.  At i==19 set the high bits of clock sequence as
            // per rfc4122, sec. 4.1.5
            for (i = 0; i < 36; i++) {
                if (!uuid[i]) {
                    r = 0 | Math.random()*16;
                    uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
                }
            }
        }

        return uuid.join('');
    }

};
