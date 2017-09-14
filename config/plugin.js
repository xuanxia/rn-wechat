'use strict';

// had enabled by egg
// exports.static = true;
exports.io ={
    enable:true,
    package:'egg-socket.io',
};
exports.redis = {
    enable: true,
    package: 'egg-redis',
};
exports.validate = {
    enable: true,
    package: 'egg-validate',
};

exports.sequelize = {
    enable: true,
    package: 'egg-sequelize',
};

