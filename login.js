$(() => {
    $('#chat').hide();
    $('#login_form').submit(function (event) {
        console.log("Handler for .submit() called.");
        event.preventDefault();
        //console.log($('#login_form').serialize());
        $.post('http://192.168.69.44:8080/login', $('#login_form').serialize())
                .done((data) => {
                    console.log(data);
                    let msgCode = data.msg.code;
                    if (msgCode === 200) {
                        if (data.token) {
                            const token = data.token;
                            $('#login').hide();
                            $('#chat').show();
                            createClient(token);
                            
                        }
                    }
                    if (data.msg.code === 403) {
                        console.log(data.msg.code);
                        alert('Username or Password wrong');
                    }
                });
    });
});

const SERVER = '192.168.69.44:8080';
//const SERVER = 'http://localhost:8080';

function createClient(token) {
    let msg = new Object();
    //const SERVER = 'http://localhost:8080';
    //var socket = io.connect(SERVER, {query: "token="+token});
    console.log('Connecting to the server...');
    var socket = io.connect(SERVER, {query: "token=" + token});
    $('#chat_form').submit((e)=>{
        msg.text = $('#msg').val();
        socket.emit('chat_msg',msg);
        $('#msg').val('');
        console.log(msg);
        e.preventDefault();
    });
    socket.on('connect_error',(data)=>{
        console.log(data);
    });
    socket.on('chat_msg',(msg)=>{
        const msgTxt = msg.text;
        const username = msg.username;
        $('#messages').append('<li>'+username+'=> '+msgTxt+'</li>');
    });
}



