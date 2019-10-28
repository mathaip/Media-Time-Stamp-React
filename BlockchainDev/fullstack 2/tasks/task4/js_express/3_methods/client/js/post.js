try {
    $(document).ready(function() {
        var user, pass;
        $("#submit").click(function() {
            user = $("#email").val();
            pass = $("#password").val();
            $.post("http://localhost:3000/", {
                email: user,
                password: pass
            }, function(data) {
                if (data === 'done') {
                    alert("signup success");
                }
            });
        });
    });

} catch (error) {
    console.log(error)
};