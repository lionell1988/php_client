const RECONN_ATTEMPS = 2;
const CONN_ERR_MSG = 'Failed to connect to the chat server.';
$(function () {

    $('#messages').append('<li>Connecting to the chat server...</li>');
    var socket = io('http://localhost:8080');
    socket.on('error', (data) => {
        console.log(data);
    });
    socket.on('connect_error', (data) => {
        console.log('errore connessione');
        //socket.close();//da qui, non ci saranno ulteriori tentativi di connessione
    });
    socket.on('reconnecting', (number) => {
        console.log('reconnecting...' + number + ' times');
        if (number > RECONN_ATTEMPS) {
            socket.close();
            console.log('Socket closed');
            $('#messages').append('<li class="error">' + CONN_ERR_MSG + ' <a href ="chat.php">RELOAD</a></li>');
        }
    });
    socket.on('disconnect', () => {
        console.log('disconnected');
        $('#messages').append('<li class="error">Disconnected.</li>');
    });
    socket.on('connect', () => {
        console.log('connected...');
        $('#messages').append('<li>Connected to the chat server...');
    });
    
    //try auth
    var auth = new Object();
    auth.name = 'Leonardo';
    auth.pwd = '111213';
    socket.emit('auth',auth);
    
    $('form').submit(function () {
        var msgTxt = $('#m').val();
        var msg = new Object();
        msg.text = msgTxt;
        msg.date = new Date();
        msg.sender = $('#u').val();
        console.log(msg);
        socket.emit('chat message', msg);//send message to the server (socket). 
        $('#m').val('');
        $("#messages_container").scrollTop($("#messages_container")[0].scrollHeight);
        return false;
    });
    socket.on('chat message', function (msg) {
        var line = msg.date + ' - <b>' + msg.sender + '</b> > ' + msg.text;
        $('#messages').append('<li>' + line + '</li>');
    });
    return false;
});

