$(() => {
    var token;
    console.log('starting client...');
    $('#messages').append('Hello...');
    const SERVER = 'http://localhost:8080';
    //var socket = io('http://localhost:8080');
    // var io = io();
    //var socket = io.connect('127.0.0.1:8080',{query:'token'});
    var socket = io.connect(SERVER, {query: "token=sample"});
    socket.on('connect', () => {
        console.log('connected');
        $('#messages').append('server alive');
    });
    socket.on('error', (err) => {
        console.log('Connection Error');
    });
    console.log('emitting first msg...');
    var user = new Object();
    user.name = 'Leonardo';
    user.pwd = '111213';
    
    socket.emit('auth', user);
    socket.on('server_auth', (msg) => {
        console.log(msg);
    });
//    socket.on('auth',(u)=>{
//       console.log('Error. Showing users data!!'); 
//    });

    socket.on('auth_msg', (msg) => {
        if (token !== null | token !== 'undefined') {
            console.log('token:' + msg.token);
            socket.io.opts.query = {
                token: token
            };
            //socket.emit('chat_msg', 'salve');
        }
    });

    socket.on('server_msg', (msg) => {
        console.log(msg);
    });
});

