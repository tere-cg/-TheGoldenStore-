var listaproductos = [];

function addSelena(){
  var cant = document.getElementById('cantSelena').value;
  producto = 249 * cant;
  listaproductos.push(producto);
}

function addEstela(){
  var cant = document.getElementById('cantEstela').value;
  producto = 229 * cant;
  listaproductos.push(producto);
}

function addPaulina(){
  var cant = document.getElementById('cantPaulina').value;
  producto = 239 * cant;
  listaproductos.push(producto);
}

function addLucero(){
  var cant = document.getElementById('cantLucero').value;
  producto = 299 * cant;
  listaproductos.push(producto);
}

function addHortensia(){
  var cant = document.getElementById('cantHortensia').value;
  producto = 269 * cant;
  listaproductos.push(producto);
}

function addMariana(){
  var cant = document.getElementById('cantMariana').value;
  producto = 279 * cant;
  listaproductos.push(producto);
}

function addMia(){
  var cant = document.getElementById('cantMia').value;
  producto = 289 * cant;
  listaproductos.push(producto);
}

function addCeleste(){
  var cant = document.getElementById('cantCeleste').value;
  producto = 289 * cant;
  listaproductos.push(producto);
}

function mostrarTotal(){
    var total = 0;
    productos = [];
    length = listaproductos.length;
    for (var i = 0; i < length; i++)
    productos.push(parseInt(listaproductos[i]));
    for(let x of productos){
    total+=x;
    }
    document.getElementById('resultado2').innerHTML = "El total de la compra es: $" + total + ".00";
}