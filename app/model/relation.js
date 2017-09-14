/**
 * Created by kangxiaojian on 2017/9/3.
 */
module.exports = app =>{
    const {STRING,INTEGER} = app.Sequelize;
    const  Relation = app.model.define('tb_relation',{
        initiativeUser:{
            type:STRING(50),
        },
        acceptUser:{
            type:STRING(50),
        },
        type:{
            type:INTEGER,/*0-待建立好友关系  1-建立好友关系 2-解除好友关系*/
        },
    },{
        indexes:[
            {fields:['initiativeUser']},
            {fields:['acceptUser']}
        ],
    });
    return Relation;
};

