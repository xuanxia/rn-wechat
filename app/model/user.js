/**
 * Created by kangxiaojian on 2017/8/24.
 */
module.exports = app =>{
    const {STRING} = app.Sequelize;
    const  User = app.model.define('tb_user',{
        id: {
            type:STRING(40),
            allowNull:false,
            primaryKey: true
        },
        account:{
            type:STRING(32),
            allowNull:false,
        },
        password:{
            type:STRING(32),
        }
    },{
        indexes:[
            {fields:['id']},
            {fields:['account']}
        ],
    });
    User.findByAccount = async (account) =>{
        return await User.findOne({ account: account });
    };
    return User;
};
