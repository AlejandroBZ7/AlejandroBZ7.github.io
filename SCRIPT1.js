let VarGlobal1= "texto de variable global"

function FCambioColor() {
    let vartemporal = "texto temporal";
    let vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent = "texto cambiado por funcion FCambioColor()";
    vTexto1.style.color = "red";
    vTexto1.insertAdjacentHTML("beforeend", ' <br><span style="color:green;">este texto es adicional</span><br>');
    vTexto1.insertAdjacentHTML("beforeend", `<span style="color:green;">${VarGlobal1}</span>`);
    //la variable global se puede utilizar dentro de cualquier funcion
}

vTexto1="Texto fuera funcion"; //VTexto1 no es la variable de la funcion
console.log(vTexto1);
//console.log(varTemporal); // varTemporal no esta definido afuera de funcion

function FCambioClase() {
    let vTexto2 = document.getElementsByClassName("claseDOM1");
    if (vTexto2.length > 1) {
        vTexto2[1].innerHTML = "Elemento [1] del arreglo de clase classDOM1";
        vTexto2[1].style.color = "white";
        console.log("Tamaño del array", vTexto2.length);
        console.log("tipo de variable vTexto2", typeof vTexto2[1]);
    }
}

function FCambioTag1() {
    let vTexto3 = document.getElementsByTagName('h2');
    if (vTexto3.length > 1) {
        vTexto3[1].innerHTML = "Elemento h2 cambiado por TagDOM1";
        vTexto3[1].style.color = "white";
    }
} 

function FUsoFor1() {
    const vTextoClass = document.getElementsByClassName("classFOR1");
    var vTextoTotal = "";
    for (let i = 0; i < vTextoClass.length; i++) {
        vTextoClass[i].style.border = "2px solid red";
        vTextoTotal = vTextoTotal + vTextoClass[i].innerText + '-';
    }
    var nuevoH1 = document.createElement("h1");
    var texto = document.createTextNode(vTextoTotal);
    nuevoH1.appendChild(texto);
    if (vTextoClass.length > 3) {
        vTextoClass[3].appendChild(nuevoH1);
    }
}  // fin de function

function FEliminarConcat() {
    const vTextoClass = document.getElementsByClassName("classFOR1");
    let rpta = prompt("Estas seguro de eliminar el texto concatenado?(S/N)", '');
    if (rpta == "S" || rpta == "s") {
        if (vTextoClass.length > 3) {
            vTextoClass[3].remove();
        }
        alert("CONCATENCION ELMINADA");
    } else if (rpta == "N" || rpta == "n") {
        alert("NO SE elimnará");
    } else {
        alert("OPCION INCORRECTA-INgresa nuevamente");
    }
}

function FCapturarNombre() {
    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
    const vTexto3 = document.getElementById("clave");
    vTexto1.style.color = "red";
    var valor1 = vTexto1.value;
    var valor2 = "";
    vTexto3.value = valor1;
    vTexto2.forEach(input => {
        valor2 = valor2 + `${input.name}: ${input.value} : ${input.id}    \n`;
        input.style.border = "2px solid orange";
    });
    if (vTexto2.length > 1) {
        vTexto2[1].style.border = "2px solid green";
    }
    document.getElementById('observacion').value = valor2;
    console.log('El valor del nombre es:', valor1);
}

function FValidarCiclo() {
    const varciclo = document.getElementsByName("ciclo");
    for (let i = 0; i < varciclo.length; i++) {
        if (varciclo[i].checked === true) {
            document.getElementById('observacion').value = varciclo[i].value;
            return;
        }
    }
}

function FCrearDatosCiclo() {
    const radios = document.querySelectorAll('input[name="ciclo"]');
    radios.forEach(function (radio) {
        radio.addEventListener('change', function (event) {
            const cantidad = event.target.value;
            console.log("Ciclo seleccionado", cantidad);
            document.getElementById('observacion').value = cantidad;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const numCole = document.getElementById("numColegios");
    if (numCole) {
        numCole.addEventListener("input", (event) => {
            let content = "";
            const cantR = event.target.value;
            const vTexto1 = document.getElementById("ejmDOM1");
            if (vTexto1) vTexto1.innerText = cantR;
            document.getElementById('observacion').value = cantR;
            for (let i = 0; i < cantR; i++) {
                content = content + `<div> <label> Colegio ${i + 1} </label>
                          <input type="text" id="cole[${i}]" > </div>`;
            }
            document.getElementById("DetalleColegios").innerHTML = content;
        });
    }
    FCrearDatosCiclo(); // Para que los radios funcionen desde el inicio
});