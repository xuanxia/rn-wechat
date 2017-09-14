/**
 * Created by kangxiaojian on 2017/9/3.
 */
module.exports = app =>{
    const {STRING} = app.Sequelize;
    const  TimeLine = app.model.define('tb_time_line',{
        createUser:{
            type:STRING(100),
        },
        content:{
            type:STRING(1000),
        },
        picture:{
            type:STRING(1000),
        },
        praiseUser:{
            type:STRING(5000),
        },
        comment:{
            type:STRING(5000),
        },
    },{
        indexes:[
            {fields:['createUser']}
        ],
    });
    return TimeLine;
};
