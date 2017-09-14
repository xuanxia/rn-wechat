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
          const reg = ['/api/user.login','/api/user.register'];
          return  (reg.indexOf(ctx.originalUrl) != -1);
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
            password: 'XXXXXXX',
            db: 0,
        },

    };
    config.sequelize = {
        dialect: 'mysql', // support: mysql, mariadb, postgres, mssql
        database: 'rn-wechat',
        host: '120.27.125.78',
        port: '3306',
        username: 'XXXXX',
        password: 'XXXXX',
        define: {
            // 字段以下划线（_）来分割（默认是驼峰命名风格）
            underscored: false,
            charset:'utf8',
            timestamps: true
        }

    };
    return config;
};