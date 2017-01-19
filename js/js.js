var fuelInicial=100;var fuel=fuelInicial;var velocidadImpacto=5;var alturaInicio=17;var y=alturaInicio;var recorrido=60;var puntoAterrizaje=alturaInicio+recorrido;var v=0;var g=1.622;var a=g;var dt=0.016683;var timer=null;var timerFuel=null;var hayFuel=!0;var pausaVisible=!1;var instruccionesVisibles=!1;var opcionesVisibles=!1;var aboutVisible=!1;var finJuego=!1;var hayPausa=!0;var naveImg="nave";window.onload=function(){mensajeBienvenida();document.getElementById("showm").onclick=function(){document.getElementsByClassName("c")[0].style.display="block";stop()}
document.getElementById("hidem").onclick=function(){document.getElementsByClassName("c")[0].style.display="none";start()}
document.ontouchstart=function(){motorOn()}
document.ontouchend=function(){motorOff()}
document.onkeydown=function keyCode(event){var x=event.keyCode;if(x==32){motorOn()}}
document.onkeyup=function keyCode(event){var x=event.keyCode;if(x==32){motorOff()}}
document.getElementById("bienvenidaJugar").onclick=function(){ocultar()}
document.getElementById("play").onclick=function(){if(pausaVisible==!1){mostrarPausa()}else{ocultar()}}
document.onkeypress=function keyCode(event){var x=event.keyCode;if((x==112||x==80)&&pausaVisible==!1){mostrarPausa()}else if((x==112||x==80)&&pausaVisible==!0){ocultar()}}
document.getElementById("instruction").onclick=function(){if(instruccionesVisibles==!1){mostrarInstrucciones()}else{ocultar()}}
document.getElementById("option").onclick=function(){if(opcionesVisibles==!1){mostrarOpciones()}else{ocultar()}}
document.getElementById("about").onclick=function(){if(aboutVisible==!1){mostrarAbout()}else{ocultar()}}
var element=document.getElementsByClassName("volverMovil");var i;for(i=0;i<element.length;i++){element[i].onclick=function(){ocultarTodo()}}
document.getElementById("restartMovil").onclick=function(){document.getElementsByClassName("c")[0].style.display="none";restart();start();motorOff()}
document.getElementById("reiniciarPausa").onclick=function(){restart();ocultar()}
document.getElementById("continuarPausa").onclick=function(){ocultar()}
document.getElementById("facilNivel").onclick=function(){seleccionarFacil()}
document.getElementById("medioNivel").onclick=function(){seleccionarMedio()}
document.getElementById("dificilNivel").onclick=function(){seleccionarDificil()}
document.getElementById("naveOpcion").onclick=function(){seleccionarNave()}
document.getElementById("ovniOpcion").onclick=function(){seleccionarOvni()}
document.getElementById("lunaOpcion").onclick=function(){seleccionarLuna()}
document.getElementById("marteOpcion").onclick=function(){seleccionarMarte()}
document.getElementById("rejugar").onclick=function(){restart();start();motorOff()}}
function start(){hayPausa=!1;timer=setInterval(function(){moverNave()},dt*1000);document.getElementById("play").innerHTML="PAUSAR"}
function stop(){hayPausa=!0;clearInterval(timer);motorOff();if(finJuego==!0){document.getElementById("play").innerHTML="JUGAR"}else{document.getElementById("play").innerHTML="CONTINUAR"}}
function moverNave(){v+=a*dt;document.getElementById("velocidad").innerHTML=v.toFixed(2);if(v<velocidadImpacto){document.getElementById("velocidad").style.color="lime"}else if(v<(velocidadImpacto*1.5)){document.getElementById("velocidad").style.color="orangered"}else{document.getElementById("velocidad").style.color="red"}
y+=v*dt;document.getElementById("altura").innerHTML=(puntoAterrizaje-y).toFixed(2);y+=v*dt;document.getElementById("altura").innerHTML=(puntoAterrizaje-y).toFixed(2);if(y<(alturaInicio-30)){finJuego=!0;hayPausa=!0;mensajeSobreAltura();motorOff();stop()}else if(y<puntoAterrizaje){document.getElementById("nave").style.top=y+"%"}else{document.getElementById("altura").innerHTML=0;hayPausa=!0;comprobarAterrizaje();motorOff();stop()}}
function motorOn(){if(fuel>0&&hayPausa==!1&&finJuego==!1){a=-g;if(timerFuel==null)
timerFuel=setInterval(function(){actualizarFuel()},10);document.getElementById("naveimg").src="img/"+naveImg+"p.png"}}
function motorOff(){if(finJuego==!1){a=g;clearInterval(timerFuel);timerFuel=null;document.getElementById("naveimg").src="img/"+naveImg+".png"}}
function actualizarFuel(){if(hayFuel==!0&&finJuego==!1){fuel-=0.1;if(fuel<=0){hayFuel=!1;fuel=0;motorOff()}
if(fuel<=fuelInicial/5){document.getElementById("fuel").style.color="red"}else if(fuel<=fuelInicial/2){document.getElementById("fuel").style.color="orangered"}
document.getElementById("fuel").innerHTML=fuel.toFixed(2)}}
function restart(){reiniciarConfiguracion();hayPausa=!1;document.getElementById("divFinJuego").style.display="none"}
function reiniciarConfiguracion(){y=alturaInicio;fuel=fuelInicial;v=0;hayFuel=!0;finJuego=!1;clearInterval(timer);timer=null;clearInterval(timerFuel);timerFuel=null;document.getElementById("fuel").style.color="lime";document.getElementById("fuel").innerHTML=fuel.toFixed();document.getElementById("naveimg").src="img/"+naveImg+".png"}
function comprobarAterrizaje(){finJuego=!0;if(v>velocidadImpacto){document.getElementById("naveimg").src="img/explosion.png";mensajeFail()}else{document.getElementById("naveimg").src="img/"+naveImg+".png";mensajeWin()}}
function mensajeBienvenida(){document.getElementById("divBienvenida").style.display="block"}
function mensajeWin(){document.getElementById("divFinJuego").style.display="block";document.getElementById("cabezeraFin").innerHTML="VICTORIA";document.getElementById("parrafoFin").innerHTML="¡¡Enhorabuena!! Eres un atronauta genial."}
function mensajeFail(){document.getElementById("divFinJuego").style.display="block";document.getElementById("cabezeraFin").innerHTML="HAS FALLADO";document.getElementById("parrafoFin").innerHTML="Otra vez será..."}
function mensajeSobreAltura(){document.getElementById("divFinJuego").style.display="block";document.getElementById("cabezeraFin").innerHTML="HAS FALLADO";document.getElementById("parrafoFin").innerHTML="Recuerda que queremos ATERRIZAR... ¬¬"}
function mostrarPausa(){stop();ocultarTodo();document.getElementById("divpausa").style.display="block";pausaVisible=!0}
function mostrarInstrucciones(){stop();ocultarTodo();document.getElementById("divinstrucciones").style.display="block";instruccionesVisibles=!0}
function mostrarOpciones(){stop();ocultarTodo();document.getElementById("divopciones").style.display="block";opcionesVisibles=!0}
function mostrarAbout(){stop();ocultarTodo();document.getElementById("divabout").style.display="block";aboutVisible=!0}
function ocultarTodo(){var emergentes=document.getElementsByClassName("divEmergente");var i;for(i=0;i<emergentes.length;i++){emergentes[i].style.display="none"}
pausaVisible=!1;instruccionesVisibles=!1;opcionesVisibles=!1;aboutVisible=!1}
function ocultar(){ocultarTodo();start();motorOff()}
function seleccionarFacil(){fuelInicial=100;velocidadImpacto=5;document.getElementById("facilNivel").style.textDecoration="underline";document.getElementById("medioNivel").style.textDecoration="none";document.getElementById("dificilNivel").style.textDecoration="none";document.getElementById("parrafoNivel").innerHTML="FÁCIL: Tienes 100 litros de combustible y debes aterrizar a menos de 5 m/s.";reiniciarConfiguracion()}
function seleccionarMedio(){fuelInicial=75;velocidadImpacto=2.5;document.getElementById("facilNivel").style.textDecoration="none";document.getElementById("medioNivel").style.textDecoration="underline";document.getElementById("dificilNivel").style.textDecoration="none";document.getElementById("parrafoNivel").innerHTML="MEDIO: Tienes 75 litros de combustible y debes aterrizar a menos de 2.5 m/s.";reiniciarConfiguracion()}
function seleccionarDificil(){fuelInicial=50;velocidadImpacto=1;document.getElementById("facilNivel").style.textDecoration="none";document.getElementById("medioNivel").style.textDecoration="none";document.getElementById("dificilNivel").style.textDecoration="underline";document.getElementById("parrafoNivel").innerHTML="DIFÍCIL: Tienes 50 litros de combustible y debes aterrizar a menos de 1 m/s.";reiniciarConfiguracion()}
function seleccionarNave(){naveImg="nave";document.getElementById("naveOpcion").style.textDecoration="underline";document.getElementById("ovniOpcion").style.textDecoration="none"}
function seleccionarOvni(){naveImg="ovni";document.getElementById("ovniOpcion").style.textDecoration="underline";document.getElementById("naveOpcion").style.textDecoration="none"}
function seleccionarLuna(){document.getElementsByClassName("d")[0].style.backgroundImage="url('img/LUN001.png')";document.getElementsByClassName("d")[0].style.backgroundColor="#787878";document.getElementById("lunaOpcion").style.textDecoration="underline";document.getElementById("marteOpcion").style.textDecoration="none"}
function seleccionarMarte(){document.getElementsByClassName("d")[0].style.backgroundImage="url('img/MARS001.png')";document.getElementsByClassName("d")[0].style.backgroundColor="#DB1616";document.getElementById("marteOpcion").style.textDecoration="underline";document.getElementById("lunaOpcion").style.textDecoration="none"}
