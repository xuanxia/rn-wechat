/**
 * Created by kangxiaojian on 2017/8/21.
 */
module.exports = app => {

    return function* (next,b) {
      //  yield this.service.socketClient.addClient(this.socket);
        //console.log(app.io.sockets);

        yield* next;
        // execute when disconnect.
        console.log('disconnection!');
       // yield this.service.socketClient.deleteClient(this.socket);
    };
};