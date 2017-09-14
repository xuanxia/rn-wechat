/**
 * Created by kangxiaojian on 2017/8/21.
 */
module.exports = app =>{
    let clientMap = {};
    return function* (next) {
      //  this.socket.emit('res', 'packet received!');

        clientMap[this.packet[1]] = this.socket.id;
        console.log(JSON.stringify(clientMap));
        //this.socket.emit('res', 'connected!');
        console.log(this.packet[1]);
        if(this.packet[1] == 'BBBBBB'){
            app.io.to(clientMap['BBBBBB']).emit('res', 'Asend2B');
        }else{
            app.io.to(clientMap['AAAAAA']).emit('res', 'Bsend2A');
        }

        console.log('packet:', this.packet);
        yield* next;
    };
};