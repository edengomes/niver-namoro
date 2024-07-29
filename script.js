$(document).ready(function() {
    var envelope = $('#envelope');
    var btn_open = $("#open");
    var btn_reset = $("#reset");
    var balloon = $('.balloon');

    envelope.click(function() {
        open();
    });
    btn_open.click(function() {
        open();
    });
    btn_reset.click(function() {
        close();
    });

    function open() {
        envelope.addClass("open").removeClass("close");
        setTimeout(showBalloon, 4000); // Atraso para mostrar o balão após os corações
    }

    function close() {
        envelope.addClass("close").removeClass("open");
        balloon.removeClass('show'); // Esconder balão ao fechar o envelope
    }

    function showBalloon() {
        balloon.addClass('show');
    }
});
