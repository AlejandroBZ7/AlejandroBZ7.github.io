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
    //la variable global se puede utilizar dentro de cualquier funcion

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
    vTexto3[10].style.color="white" ; //"Elemento h2 cambiado por TagDOM1";
    vTexto3[21].innerHTML = "Elemento h2 cambiado por TagDOM1";
    // se coloca el índice 6 por ser el 7mo elemento h2 de la pag web index.html
} 

function FUsoFor1()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  var vTextoTotal="";
  // como length=4 --> ira desde 0 hasta 3
  for(let i=0 ; i< vTextoClass.length ; i++ )
  {
    vTextoClass[i].style.border ="2px solid red" ;
    vTextoTotal=vTextoTotal + vTextoClass[i].innerText+'-';

  } // fin de for
  var nuevoH1 =document.createElement("h1");
  var texto = document.createTextNode(vTextoTotal);
  nuevoH1.appendChild(texto);
  vTextoClass[3].appendChild(nuevoH1);
  
}  // fin de function

function FEliminarConcat()
{
  const vTextoClass = document.getElementsByClassName("classFOR1");
  let rpta =prompt("Estas seguro de eliminar el texto concatenado?(S/N)",'');
  if (rpta=="S" || rpta=="s")  //  doble || significa o
    { vTextoClass[3].remove();  // eliminar la class de posicion [3]
      alert("CONCATENCION ELMINADA");
    }  
  else
    { if(rpta=="N" || rpta=="n")
      { alert("NO SE elimnará");
      }
      else
      { alert("OPCION INCORRECTA-INgresa nuevamente");
      }
    }
  //removeChild funciona cuando un nodo(class, id, etx) esta dentro de otro
}

function FCapturarNombre(){

    const vTexto1 = document.getElementById("nombre");
    const vTexto2 = document.querySelectorAll("input.datosPersonales");
    const vTexto3 = document.getElementById("clave");

   // usar input para clases relacioandas a cajas de texto, etc
    vTexto1.style.color="red";
    
    var valor1 =vTexto1.value; // value obtiene el contenido de la caja de texto nombre
    var valor2 =""; //tipo string 
    vTexto3.value=valor1; //asigna el nombre a la clave
  
    //foreach recorre todo el contenido del array de la clase datosPersonales
    vTexto2.forEach(input => {
        valor2 =valor2 +  `${input.name}: ${input.value} : ${input.id}    \n`;  // alt+96 
        input.style.border="2px solid orange"      
        //para comillas tipotexto permiten colocar variables del form y convertirlas a texto mediante $
      });
 
      vTexto2[1].style.border="2px solid green"
    document.getElementById('observacion').value = valor2;
    console.log('El valor del nombre es:', valor1);
}

function FValidarCiclo()
{
  //var vaciclo =document.getElementById("Segundo");
  const varciclo =document.getElementsByName("ciclo");

  for(let i = 0; 1 < varciclo.length; i++) {
    if (varciclo[1].checked=true) {
      //alert(*Seleccionaste: " + varciclo[1].value);
      document.getElementById('observacion').value = varciclo[1].value;
      return; //Detener el bucle una vez que se encuentre el seleccionado  
    }
  }
}

function FCrearDatosCiclo()
{
const radios = document.querySelectorAll('input[name"ciclo"]');

radios.forEach(function(radio) {
  radio.addEventListener('change', function(eventt) {
   document.addEventListener("DOMContentLoaded", () => { 
   console.leg("Ciclo seleccionado"; event.target.value);
   const cantidad = event.target.value;
  //event es el evento, target es el elemento radio, value es su valor del radio
   // radio es elemnto radio
   //
   document.getElementById('observacion').value = cantidad;
  })}
  )}
 ) 
}

document.addEventListener("DOMContentLoaded", () => {
  const numCole = document.getElementById("numColegios");
  document.getElementById("numColegios").addEventListener("input",(event)=> {
    let content ="";
    const cantR=event.target.value;
    const vTexto1 = document.getElementById("ejmDOM1");
    vTexto1.innerText= cantR;   
    document.getElementById('observacion').value = cantR;
    for(let i=0; i<cantR ;i++)
    {
      content=content + `<div> <label> Colegio ${i+1} </label>
                          <input type="text" id="cole[${i}" > </div>`;
    }
  document.getElementById("DetalleColegios").innerHTML=content;
  
  });
  });