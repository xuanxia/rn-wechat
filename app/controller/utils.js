/**
 * Created by kangxiaojian on 2017/9/21.
 */
module.exports = app => {
    class UtilsController extends app.Controller {
         getQiniuToken(){
            const { ctx,service} = this;
            const saveKey = ctx.request.query.saveKey;
            const suffix = ctx.request.query.suffix;
            const result =  service.qiniu.createToken(saveKey,suffix);
            ctx.body = { data: result };
        }
    }
    return UtilsController;
};
