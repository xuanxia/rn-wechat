'use strict';

module.exports = app => {
  app.get('/', 'home.index');

  /*用户信息相关*/
  app.post('/api/user.login',app.controller.user.login);
  app.post('/api/user.logout',app.controller.user.logout);
  app.post('/api/user.register',app.controller.user.register);
  app.post('/api/user.query_list',app.controller.user.queryUserList);
  app.post('/api/user.get.info',app.controller.user.getInfo);
  app.post('/api/user.add.user.profile',app.controller.user.addUserProfile);
  app.post('/api/user.get.user.profile',app.controller.user.getUserProfile);

    /*联系人相关*/
  app.post('/api/contact.list',app.controller.contact.getList);

  /*好友关系相关*/
  app.post('/api/relation.add_friend',app.controller.relation.addFriend);
  app.post('/api/relation.accept_friend',app.controller.relation.acceptFriend);
  app.post('/api/relation.del_friend',app.controller.relation.delFriend);


  /*聊天socket相关*/
   app.io.route('login', app.io.controllers.login);
   app.io.route('chat', app.io.controllers.chat);
   app.io.route('groupChat', app.io.controllers.groupChat);

 // app.io.of('/chat').route('chat', app.io.controllers.chat);
};
