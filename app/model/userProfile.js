/**
 * Created by kangxiaojian on 2017/9/7.
 */
module.exports = app =>{
    const {STRING,INTEGER} = app.Sequelize;
    const  UserProfile = app.model.define('tb_user_profile',{
        userId:{
            type:STRING(50),
        },
        nickName:{
            type:STRING(32),
        },
        avatar:{
            type:STRING(100),
        },
        sex:{
            type:INTEGER,
        },
        phone:{
            type:STRING(32),
        },
        timeLineTopPic:{
            type:STRING(100),
        }

    },{
        indexes:[
            {fields:['id']},
            {fields:['userId']}
        ],
    });
    return UserProfile;
};

