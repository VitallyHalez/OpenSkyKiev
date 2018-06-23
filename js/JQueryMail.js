$("#submit").click(function() {
    var name = $('input[name=fio]').val();
    var tel = $('input[name=tel]').val();
    var otpravka = true;
    if (name == "") {
        otpravka = false;
    }
    if (tel == "") {
        otpravka = false;
    }
    if (otpravka) {
        dannie = {
            'polz_name': name,
            'polz_tel': tel
        };
        $.post('php/index.php', dannie, function(otvet) {
            rezultat = '<div style="color:#D80018;">' + otvet.text + '<\/div>';
            $("#form_result").hide().html(rezultat).slideDown();
        }, 'json');
    }
});