/**
 * Created by kangxiaojian on 2017/9/14.
 */
module.exports = () => {
    let clientMap = {};
    return async function () {
        const message = JSON.parse(this.args[0]);
        console.log(message);
        clientMap[this.packet[1]] = this.socket.id;
        console.log(JSON.stringify(clientMap));
        //this.socket.emit('res', 'connected!');
        //console.log(this.packet[1]);
        if(this.packet[1] == 'BBBBBB'){
            this.app.io.to(clientMap['BBBBBB']).emit('res', 'Asend2B');
        }else{
            this.app.io.to(clientMap['AAAAAA']).emit('res', 'Bsend2A');
        }

        //console.log('packet:', this.packet);

        // const message = this.args[0];
        //
        // this.socket.emit('res', message);
    };
};
