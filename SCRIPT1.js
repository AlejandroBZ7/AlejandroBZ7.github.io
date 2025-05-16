let VarGlobal1 = "texto de variable global"

function FCambioColor() {
    let vartemporal = "texto temporal";
    let vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.textContent = "texto cambiado por funcion FCambioColor()";
    vTexto1.style.color = "red";
    vTexto1.insertAdjacentHTML("beforeend", ' <br><span style="color:green;">este texto es adicional</span><br>');
    vTexto1.insertAdjacentHTML("beforeend", `<span style="color:green;">${VarGlobal1}</span>`);
    //la variable global se puede utilizar dentro de cualquier funcion
}

vTexto1 = "Texto fuera funcion"; //VTexto1 no es la variable de la funcion
console.log(vTexto1);
//console.log(varTemporal); // varTemporal no esta definido afuera de funcion

function FCambioClase1() {
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
        console.log("Tamaño del array=", vTexto3.length);
        vTexto3[13].insertAdjacentHTML("beforeEnd", "<br>tamaño de h2 =" + vTexto3.length);
        let totalh2 = vTexto3.length;
        console.log("Valor de totalh2=", totalh2);
        console.log("tipo de variable totalh2=", typeof totalh2);
    }
}

window.vTexto1 = "";

function FAgregarTextoPermanente() {
    let textoAdicional = "\nTexto adicional para concatenar";
    vTexto1 = vTexto1 + textoAdicional;
    console.log("tipo de variable de vTexto1 =", typeof vTexto1);
    console.log(vTexto1);
}

function FcrearH1() {
    var elemento = document.getElementById("idCrearH1");
    var nuevoH1 = document.createElement("H1");
    var texto = document.createTextNode("Texto colocado en linea");
    nuevoH1.appendChild(texto);
    elemento.appendChild(nuevoH1);

}

function FCapturarNombre() {
    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
    const vTexto3 = document.getElementById("clave");
    // usar input para clases relacioandas a cajas de texto, etc
    vTexto1.style.color = "red";

    var valor1 = vTexto1.value; // value obtiene el contenido de la caja de texto nombre
    var valor2 = ""; //tipo string 
    vTexto3.value = valor1; // asigna el nombre a la clave


    //foreach recorre todo el contenido del array de la clase datosPersonales
    vTexto2.forEach(input => {
        valor2 = valor2 + `${input.name}: ${input.value} : ${input.id}  \n`;  // alt+96 
        input.style.border = "2px solid orange";
        // para comillas tipotexto permiten colocar variables del form y convertirlas a texto mediante $
    });

    vTexto2[1].style.backgroundColor = "green";
    document.getElementById('observacion').value = valor2;
    console.log('El valor del nombre es:', valor1);
}

function FUsoFor1() {
    const vTextoClass = document.getElementsByClassName("classFOR1");
    var vTextoTotal = "";
    // como length=4 --> ira desde 0 hasta 3
    for (let i = 0; i < vTextoClass.length; i++) {
        vTextoClass[i].style.border = "2px solid red";
        vTextoTotal = vTextoTotal + vTextoClass[i].innerText + '-';
    } // fin de for
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
    if (rpta == "S" || rpta == "s") { //  doble || significa o
        if (vTextoClass.length > 3) {
            vTextoClass[3].remove(); // eliminar la class de posicion [rpta2]
        }
        alert("CONCATENCION ELMINADA");
    } else if (rpta == "N" || rpta == "n") {
        alert("NO SE elimnará");
    } else {
        alert("OPCION INCORRECTA-INgresa nuevamente");
    }
    //removeChild funciona cuando un nodo(class, id, etx) esta dentro de otro
}



function FValidarCiclo() {

    //var varciclo =document.getElementById("Segundo");
    const varciclo = document.getElementsByName("ciclo");
    for (let i = 0; i < varciclo.length; i++) {
        if (varciclo[i].checked === true) {
            //alert("Seleccionaste: " + varciclo[i].value);
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
            //event es el evento, target es el elemento radio, value es su valor del radio
            // radio es el elemento radio
            //
            console.log("Ciclo seleccionado", cantidad);
            document.getElementById('observacion').value = cantidad;
        });
    });
}

document.addEventListener("DOMContentLoaded", () => {  
  const radios = document.querySelectorAll('input[name="ciclo"]');

radios.forEach(function(radio) {
   radio.addEventListener('change', function(event) {
    console.log("Ciclo seleccionado:", event.target.value);
    const cantidad = event.target.value;
  //event es el evento, target es el elemento radio, value es su valor del radio
   // radio es el elemento radio
   //
    document.getElementById('observacion').value = cantidad;
  });
}
);
  });

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

function FVerificacion() {

    let nombre1 =prompt("Ingresa tu primer nombre",'');
    let nombre2 =prompt("Ingresa tu segundo nombre",'');
    let apellido1 =prompt("Ingresa tu primer apellido",'');
    let apellido2 =prompt("Ingresa tu segundo apellido",'');

    let longitud1 = nombre1.length;
    let longitud2 = nombre2.length;
    let longitudapellido1 = apellido1.length;
    let longitudapellido2 = apellido2.length;

    let textoconcat="";

        if( longitud1<longitud2 )
 {

  alert("El primer nombre:" +nombre1 + "es menor al segundo nombre:"+ nombre2)

   textoconcat = nombre2 + nombre1; // concatenado y asignado a txtoconcat

 }
 else
 { if(longitud1 > longitud2)
     {
      alert("El primer nombre:" +nombre1 + "es mayor al segundo nombre:"+ nombre2 )
      textoconcat = nombre1 + nombre2; // concatenado y asignado a txtoconcat

     }
     else // caso por defecto igual
     {
       alert("El primer nombre:" +nombre1 + "es IGUAL en longitud al segundo nombre:"+ nombre2)
       textoconcat = nombre1 + nombre2; // da lo mismo el orden del concatenado
     }

 }


 ////conicionales para apellido
 if( longitudapellido1 < longitudapellido2 )
    {
   
     alert("El primer apellido:" +apellido1 + "es menor al segundo apellido:"+ apellido2)
   
      textoconcat = apellido2 + apellido1; // concatenado y asignado a txtoconcat
   
    }
    else
    { if(longitudapellido1 > longitudapellido2)
        {
         alert("El primer apellido:" +apellido1 + "es mayor al segundo apellido:"+ apellido2 )
         textoconcat = apellido1 + apellido2; // concatenado y asignado a txtoconcat
   
        }
        else // caso por defecto igual
        {
          alert("El primer apellido:" +apellido1 + "es IGUAL en longitud al segundo apellido:"+ apellido2)
          textoconcat = apellido1 + apellido2; // da lo mismo el orden del concatenado
        }
   
    }

  alert("apellido concatenado :"+textoconcat);

}

document.addEventListener("DOMContentLoaded", () => {    
    const palabraInput = document.getElementById('palabra');
    if (palabraInput) {
        palabraInput.addEventListener('input', function(e) {
            const contenedor = document.getElementById('cajas');
            contenedor.innerHTML = '';
            for (let i = 0; i < e.target.value.length; i++) {
                const inputNum = document.createElement('input');
                inputNum.type = 'number';
                contenedor.appendChild(inputNum);
            }
        });
    }
});