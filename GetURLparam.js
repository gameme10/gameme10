    function getParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
    results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

  function pagosDontHack()
{
    // Cogemos los valores pasados por get
    //recogemos los valores que nos envia la URL en variables para trabajar con ellas
    var skuURL = getParameterByName('skuURL');
    var ver = getParameterByName('ver');
    if(skuURL && ver == "aRS9rD*rg%V5%BF4@@isyJiJif@T51AABgBLl0J0dNsmo7lJ6"){document.getElementById("pagar").value = skuURL}else{
        // no se ha recibido ningun parametro por GET
        document.getElementById("pagar").innerHTML = '';
    }
}
