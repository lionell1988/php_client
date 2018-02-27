$(() => {
    $('#login_form').submit(function (event) {
        console.log("Handler for .submit() called.");
        event.preventDefault();
        console.log($('#login_form').serialize());
        $.post('http://localhost:8080/login',$('#login_form').serialize())
                .done((data)=>{
                //console.log(data);
        });
    });
});