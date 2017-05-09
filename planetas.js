function saberPeso()
{
  var usuario = prompt("Cual es tu peso?");
  var planeta = parseInt(prompt("Elije tu planeta.\n1 es Marte, 2 es Jupiter."));
  var peso = parseInt(usuario);
  var g_tierra = 9.8;
  var g_marte = 3.7;
  var g_jupiter = 24.8;
  var peso_final;
  var nombre;
    if (planeta == 1)
    {
        peso_final = peso * g_marte / g_tierra;
        nombre = "Marte";
    }
    else if(planeta == 2)
    {
      peso_final = peso * g_jupiter/g_tierra;
      nombre = "Jupiter"
    }
    else
    {
      peso_final = 1000000;
      nombre = "Pluton"
    }
    peso_final = parseInt(peso_final);
    todo.innerHTML = "Tu peso en " + nombre +  " es <strong>" + peso_final + " kilos</strong>";
}
var todo = document.getElementById("todo");
var b = document.getElementById("boton");
b.addEventListener("click", saberPeso);
