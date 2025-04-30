let VarGlobal1= "texto de variable global"

function FCambioColor(){
    let vartemporal= "texto temporal"
    let vtexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent= "texto cambiado por funcion FCambioColor()";
    vTexto1.style.color= "red";
    vTexto1.insertAdjacentHTML("beforeend",
                            " <br> este texto es adicional <br>");
    vTexto1.style.color= "green"

    vTexto1.insertAdjacentHTML("beforeEnd", VarGlobal1);
    //lavariable global se puede utilizar dentro de cualquier funcion

}
vTexto1="Texto fuera funcion"; //VTexto1 no es la variable de la funcion
console.timeLog(vTexto1);
//console.log(varTemporal); // varTemporal no esta definido afuera de funcion

function FCambioClase(){
    let vTexto2=document.getElementsByClassName("claseDOM1")
    vTexto2(1).innerHTML= "Elemento [1] del arreglo de clase classDOM1";
    vTexto2(1).style.color="white";
    console.log("Tamaño del array",vTexto2.length);
    console.log("tipo de variable vTexto2",typeof vTexto2[1]);
// se coloca el indice 1 por ser el 2do elemento de la clase classDOM1 de la pag web     

}

function FCambioTag1() {
    let vTexto3 = document.getElementsByTagName('h2');
    vTexto3[1].innerHTML = "Elemento h2 cambiado por TagDOM1";
    vTexto3[10].innerHTML = "Elemento h2 cambiado por TagDOM1";
    vTexto3[10].style.color="white" = "Elemento h2 cambiado por TagDOM1";
    vTexto3[21].innerHTML = "Elemento h2 cambiado por TagDOM1";
    // se coloca el índice 6 por ser el 7mo elemento h2 de la pag web index.html
}