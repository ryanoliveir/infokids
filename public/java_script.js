function get_data() {
    var email = $("#one").val()
    var senha = $("#two").val()




    const send = {"email": email, "pass": senha}

    

    $.ajax({
        method: "POST",
        url: "/clients",
        data: send,
    }).done(function(data) {
        console.log(data)
    })

}

