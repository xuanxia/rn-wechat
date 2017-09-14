/**
 * Created by kangxiaojian on 2017/8/21.
 */
module.exports = app => {
    class SocketClient extends app.Service {
        constructor(){
            app.clients = {};
        }
        addClient(client){
            if(client.id && !clients[client.id]){
                app.clients[client.id] = client;
            }
        }
        deleteClient(client){
            if(client.id && !clients[client.id]){
               delete app.clients[client.id];
            }
        }
    }
    return SocketClient;
};