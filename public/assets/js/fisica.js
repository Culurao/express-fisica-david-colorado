$(document).ready(function () {
    $("#peso").keyup(function () {
        var texto_escrito = $(this).val();
        const reg = /[0-9\S]/
        if (reg.test(peso.value)){
            $("#tierra").val(texto_escrito*9.807);
            $("#luna").val(texto_escrito*1.62);
            $("#marte").val(texto_escrito*3.721);
        } else if (peso.value == " " || peso.value == "  " || peso.value == ""){
            $("#tierra").val("Introduzca un número");
            $("#luna").val("Introduzca un número");
            $("#marte").val("Introduzca un número");
        }
        const reg2 = /[a-zA-Z]/
        
        if (reg2.test(peso.value)){
            alert("Ingrese solamente valores numéricos.")
        }      
    })
})