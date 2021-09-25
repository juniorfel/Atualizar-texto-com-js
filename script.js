<script>
$(document).ready(function(){
    var textos = ["TEXTO 1", "TEXTO 2", "TEXTO 3"]; //Textos
    var atual = 0;
    $('#info').text(textos[atual++]);
    setInterval(function() {
        $('#info').fadeOut(function() {
            if (atual >= textos.length) atual = 0;
            $('#info').text(textos[atual++]).fadeIn(); //Efeito
        });
    }, 3500); //Tempo
});
    </script>
