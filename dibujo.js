var texto = document.getElementById("texto_lineas");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", dibujoPorClick);

var d = document.getElementById("dibujito");             //toma el elemento id=dibujito
var lienzo = d.getContext("2d");                        //se va a realizar el dibujo en 2d
var ancho = d.width;

function dibujarLinea(color,xin,yin,xfin,yfin)
{
  lienzo.beginPath();          //arranca a dibujar
  lienzo.strokeStyle = color;       //en color tanto
  lienzo.moveTo(xin, yin);            //se posiciona ahi
  lienzo.lineTo(xfin, yfin);              //dibuja una linea hasta ahi
  lienzo.stroke();                      //cerramos la linea
  lienzo.closePath();                   //termina el dibujo
}
dibujarLinea(colorcito, 1,1,1,299);
dibujarLinea(colorcito, 1,299,299,299);

function dibujoPorClick()
{
  var lineas = parseInt(texto.value);
  var l = 0;
  var yi, xf;
  var colorcito = "#02effc"
  var xi;
  var espacio = ancho / lineas;

  for(l=0; l<lineas; l++)
  {
    yi = espacio * l;
    xf = espacio * (l + 1);
    xi = ancho - (l * espacio);
    dibujarLinea(colorcito, 0, yi, xf, 300);
  }
}
