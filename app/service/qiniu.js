/**
 * Created by kangxiaojian on 2017/9/21.
 */
const qiniu = require('qiniu');
module.exports = app => {

    const qiniuConfig = app.config.qiniu;
    const accessKey = qiniuConfig.AccessKey;
    const secretKey = qiniuConfig.SecretKey;
    const options = qiniuConfig.options;

    class qiniuService extends app.Service {
        constructor(ctx){
            super(ctx);
        }
        createToken(saveKey,suffix){
            const uuid = this.ctx.helper.getuuid(16);
            options['saveKey'] = getDirectory(saveKey,uuid,suffix);
            const mac = new qiniu.auth.digest.Mac(accessKey, secretKey);
            const putPolicy = new qiniu.rs.PutPolicy(options);
            return putPolicy.uploadToken(mac)
        }
    }
    return qiniuService;
};

function getDirectory(saveKey,uuid,suffix){
    saveKeyMap = {
        'TIME_LINE':'timeLine',
        'AVATAR':'avatar',
        'CHAT':'chat'
    };
    const date = new Date();
    const dateDirectory = date.getFullYear() + '-'+date.getMonth()+ '-' +date.getDate();
    if(saveKeyMap[saveKey]){
        return saveKeyMap[saveKey] + '/' + dateDirectory + '/' + uuid+ '.'+ suffix;
    }else{
        return 'temp' + '/' + dateDirectory + '/' + uuid+ '.'+ suffix;
    }


}