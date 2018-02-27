<!DOCTYPE html>
<html lang="en">
    <head>
        <title>Chat Module</title>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
        <link rel="stylesheet" href="css/chat.css?n=0">
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
        <script src="modules/socket.io/node_modules/socket.io-client/dist/socket.io.js"></script>
        <script src="authent.js?n=0"></script>
    </head>
    <body>

        <div class="container-fluid">
            <h1>Large Grid</h1>
            <p>The following example will result in a 25%/75% split on small devices, a 50%/50% split on medium devices, and a 33%/66% split on large devices. On extra small devices, it will automatically stack (100%).</p>
            <p>Resize the browser window to see the effect.</p>
            <div class="row" id="chat">
                <div class="col-sm-10 col-md-6 col-lg-9 messages_container" style="border:solid 1px;">
                    <ul id="messages"></ul>
                </div>
                <div class="col-sm-2 col-md-6 col-lg-3 messages_container" style="border:solid 1px;">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
            </div>
            <div class="row">
                <div class="col-sm-10 col-md-6 col-lg-9" style="border:solid 1px;">
                    <form class="form-inline">    
                        <div class="col-sm-10">
                            <input id="m" autocomplete="off" type="text" class="form-control input-sm chat_input" placeholder="Write your message here..."> 
                        </div>
                        <button class="btn btn-primary btn-sm" id="btn-chat">Send</button>

                    </form>

                </div>

            </div>
        </div>

    </body>
</html>
