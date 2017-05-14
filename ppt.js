function jugar()
{
  var usuario = prompt("Piedra Papel o Tijera");
  var computador = Math.random();

  if(computador < 0.33 && usuario == "piedra")
  {
    t.innerHTML = "Tijera, me ganaste :(";
  }
  else if (computador < 0.66 && usuario == "piedra")
  {
    t.innerHTML = "Piedra, es un empate";
  }
  else if(computador > 0.66 && usuario == "piedra")
  {
    t.innerHTML = "Papel, te gane jeje";
  }
  else if(computador < 0.33 && usuario == "tijera")
  {
    t.innerHTML = "Tijera, es un empate";
  }
  else if (computador < 0.66 && usuario == "tijera")
  {
    t.innerHTML = "Piedra, te gane jeje";
  }
  else if (computador > 0.66 && usuario == "tijera")
  {
    t.innerHTML = "Papel, me ganaste :(";
  }
  if(computador < 0.33 && usuario == "papel")
  {
    t.innerHTML = "Tijera, te gane jeje";
  }
  else if (computador < 0.66 && usuario == "papel")
  {
    t.innerHTML = "Piedra, me ganaste :(";
  }
  else if (computador > 0.66 && usuario == "papel")
  {
    t.innerHTML = "Papel, es un empate";
  }
}

var t = document.getElementById("t");
var j = document.getElementById("botoncete");
j.addEventListener("click", jugar);
