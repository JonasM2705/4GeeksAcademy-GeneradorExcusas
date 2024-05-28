let who = ['El perro ', 'Mi abuela ', 'El cartero ', 'Mi pajaro '];

let action = ['orino ', 'aplasto ', 'rompió ','perdió '];

let what = ['mi tarea ', 'mi telefono ', 'el auto ','la entrega '];

let when = ['antes de clase ', 'cuando estaba durmiendo ', 'mientras hacía ejercicio ', 'durante mi almuerzo ', 'mientras estaba jugando'];


function Excuse(id) {
    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    document.getElementById(id).textContent = ` ${who[whoIndex]}  ${action[actionIndex]} ${what[whatIndex]} ${when[whenIndex]}`;
}

function agregarExcusas()
{
    let cantidad = document.getElementById("cantidad").value;
    if(cantidad > 0)
    {
        agregarExcusa(cantidad)
    }
}



function agregarExcusa(cantidad) {
    const elementoOriginal = document.getElementById('excuse');
    
  
    if (!elementoOriginal) {
        console.error("No se encontró un elemento con la id 'excuse'.");
        return;
    } else{
        elementoOriginal.id = `excuse ${-1}`;
    }
    const contenedor = elementoOriginal.parentNode;
    for (let i = 0; i < cantidad; i++) {
        const clon = elementoOriginal.cloneNode(true);
        clon.id = `excuse ${i}`;
        contenedor.appendChild(clon);
        
        Excuse(clon.id)
    }
}
