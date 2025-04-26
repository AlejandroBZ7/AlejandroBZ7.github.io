function FCambioColor(){

    let vtexto1 = document.getElementById("ejmDOM1");
    vtexto1.textContent= "texto cambiado por funcion FCambioColor()";
    vtexto1.style.color= "red";
    vtexto1.insertAdjacentHTML("beforeend",
                            " <br> este texto es adicional <br>");
    vtexto1.style.color= "green"

}