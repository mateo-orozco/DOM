// let elemento1=document.getElementById("parrafo1")
// let elemento2=document.getElementsByClassName("parrafos")
// let elemento3=document.getElementsByTagName("p")
// let elemento4=document.querySelector(".parrafos")
// let elemento5=document.querySelectorAll(".parrafos")
// let elemento6=document.querySelector("#parrafo1")
// let elemento7=[...elemento5]
// let papa=document.querySelector(".papa")
// elemento1.style.color="red";
// elemento2[1].style.backgroundColor="green";
// elemento3[2].style.fontSize="20rem";

// // let parrafo4= document.createElement("p")
// // // parrafo4.innerText ="parrafo4"
// // let textoparrafo4=document.createTextNode("parrafo4")
// // parrafo4.append(textoparrafo4)
// // parrafo4.className="parrafos"
// // parrafo4.id="parrafo4"
// // document.body.appendChild(parrafo4)

// papa.innerHTML='<p class="parrafos" id="parrafo4">PARRAFO4 </p>'

// papa.innerHTML+='<button id="eliminar">DELETE</button>'
// let parrafo4=document.getElementById("parrafo4")
// document.getElementById("eliminar").addEventListener("click",(e)=>{

// })

// let papa=document.getElementById("papa")
// let elemento1=document.getElementById("parrafo1")
// let elemento2=document.getElementById("parrafo2")
// let parrafo0=document.createElement("p")
// parrafo0.innerHTML="parrafo0";
// papa.insertBefore(parrafo0,elemento1)
// papa.insertAdjacentElement("afterbegin",parrafo0)

let boton = document.getElementById("add")
let container = document.getElementById("container")
const re = / */m;
// boton.addEventListener("click",()=>{
//     console.log(container.textContent)
// })
if (re.test(container.textContent)) {
    console.log("aja")
}

boton.addEventListener("click", () => {
    container.innerHTML += `<div class="tarjeta" id="tarjeta">
                    <h2> Modelo</h2 >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, sint!</p>
                    <button id="delete" onclick="eliminar(this)">DELETE</button>
                </div >`



})
function eliminar(elemento){
    elemento.parentElement.remove()
}

// if(re.test(container.textContent)){

//     let borrar = document.getElementById("delete")
//     borrar.addEventListener("click", (e) => {
//         container.removeChild(e)
//     })
// }
    


