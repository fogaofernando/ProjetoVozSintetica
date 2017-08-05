function _narrarTexto(texto,linguagem){
    
    var bool = false;
    

    carregarLinguagem();
    if (speechSynthesis.onvoiceschanged !== undefined){
        speechSynthesis.onvoiceschanged = carregarLinguagem;
    }



    function carregarLinguagem(){
        var voices = speechSynthesis.getVoices();
        
        if (voices.length != 0) {
            var msg2 = new SpeechSynthesisUtterance(texto);
            
            /*if(voices.length == 1 ){
                msg2.voice = voices[0];
                msg2.lang = voices[0].lang
            }else{
                msg2.voice = voices[15];
                msg2.lang = voices[15].lang
            }
        */
            msg2.lang=linguagem;

            if(!bool){
                player(msg2);
            }
        }							 

    }

    function player(texto){
        speechSynthesis.speak(texto);
        bool = true;
    }

}



function _narrandoTexto(){
    return speechSynthesis.pending;
}