'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
    config.keys = appInfo.name + '_1503107768760_5623';
    // add your config here
    config.middleware = ['auth','errorHandler'];
    config.auth ={
      enable: true,
      ignore: function (ctx) {
          //配置不需要登录的接口
          return ctx.originalUrl.substr(0,12) == '/api/ignore/';
      }
  };
    config.errorHandler =  {
      // 非 `/api/` 路径不在这里做x错误处理，留给默认的 onerror 插件统一处理
      match: '/api',
  };
    config.security = {
        csrf: {
            ignore:'/api', // /api/下的接口不做csrf校验
            useSession: true,          // if useSession set to true, the secret will keep in session instead of cookie
            ignoreJSON: false,          // skip check JSON requests if ignoreJSON set to true
            cookieName: 'csrfToken',    // csrf token's cookie name
            sessionName: 'csrfToken',   // csrf token's session name
            headerName: 'x-csrf-token', // request csrf token's name in header
            bodyName: '_csrf',          // request csrf token's name in body
            queryName: '_csrf',         // request csrf token's name in query
        },
   };
   /*config.logger = {
      dir:'',
  };*/
    config.io = {
        init: { }, // passed to engine.io
        namespace: {
            '/': {
                connectionMiddleware: ['auth'],
                packetMiddleware: ['filter'],
            },
            '/chat': {
                connectionMiddleware: [ 'auth' ],
                packetMiddleware: ['filter'],
            },
        },
    };
    config.redis={
        client: {
            host: '120.27.125.78',
            port: 6379,
            password: 'xuanxia2015',
            db: 0,
        },

    };
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'rn-wechat',
        host: '120.27.125.78',
        port: '3306',
        username: 'admin',
        password: 'admin',
        define: {
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            underscored: false,
            charset:'utf8',
            timestamps: true
        }

    };

    /*
    * https://developer.qiniu.com/kodo/manual/1206/put-policy
    * */
    config.qiniu={
        AccessKey:'Z82Yc5gqbxS_9iE-oseo_aTF0F_6eWsAAdLbKU4I',
        SecretKey:'kBmBcxld_zPDGUqOU9_-UQJwudVSr08ryyMhhcL7',
        options:{
            scope:'rn-wechat', //bucket
            expires: 7200, //自定义凭证有效期
            //returnBody:'{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
            //上传成功后七牛对自己的服务器进行的回调设置
            //callbackUrl: 'http://api.example.com/qiniu/upload/callback',
           // callbackBody: '{"key":"$(key)","hash":"$(etag)","fsize":$(fsize),"bucket":"$(bucket)","name":"$(x:name)"}',
           // callbackBodyType: 'application/json',
        }
    };
    /*
    * 对接图灵机器人
     * api: http://www.tuling123.com/openapi/api key:612a0ee0755b4adc9081d44403339dfe
    * */
    config.tuling = {
        api:'http://www.tuling123.com/openapi/api',
        key:'612a0ee0755b4adc9081d44403339dfe'
    };
    return config;
};