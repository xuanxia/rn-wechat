/**
 * Created by kangxiaojian on 2017/9/3.
 */
module.exports = app =>{
    const {STRING} = app.Sequelize;
    const  Group = app.model.define('tb_group',{
        groupName:{
            type:STRING(100),
        },
        createUser:{
            type:STRING(50),
        },
        groupUser:{
            type:STRING(5000),
        },
        groupPicture:{
            type:STRING(100),
        },
    },{
        indexes:[
            {fields:['createUser']}
        ],
    });
    return Group;
};


