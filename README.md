# LunarLander
Ramón Moreno

##Versión 1.1

Esta versión contiene la implementación de mi contenido a los archivos proporcionado por el profesor (HTML, CSS y JS), así como la ampliación de éstos para mejorar las funcionalidades del Lunar Lander.
En esta versión se incluyen los siguientes elementos:

### Aportaciones al HTML:

1. *Head*
 * **Descripción:** Descripción incluida en el meta.
 * **Google fonts:** Incorporación de Fuentes para poderlos utilizar en el CSS.
2. *Body*
 * **Imagen tierra:** Imagen de un planeta para decorar el fondo.
 * **Divs de navegación:** Cuando el usuario utilice el menú superior aparecen una serie de divs (Pausa, Instrucciones, Opciones y About).
 * **Divs Especiales:** Creados exclusivamente para mostrarse cuando el jugador inicia el juego por primera vez, y cuando el jugador gana o pierde la partida.


### Aportaciones al CSS:
* **Incorporacion de todas mis imagenes:** He añadido mis imagenes donde no las había (nave, fondos, etc.) 
* **Discriminación entre PC y móvil:** Grcias a unas clases definidas en el HTML y display:none, podemos elegir que elementos se muestran en cada dispositivo.
* **Estilo PC:**
1. *Menu superior:* Colocar el menú superior correctamente y de forma horizontal.
2. *Divs de navegación:* Centrados, todos manteniendo el mismo  estilo.
* **Estilo Movil** 
1. *Menu oculto:* Ocupa toda la pantalla.
2. *Divs de navegación:* También ocupan toda la pantalla.

### Aportaciones al JS:
## Eventos:
* **Cambios al cargar la página:** Antes: empezaba a jugar directamente. Ahora: muestra mensaje de bienvenida.
* **Eliminación de "clic" para mover nave:** Antes al hacer clic en el ratón se activaba la nave. Ahora ya no.
* **Sistema de juego:**
1. *Móvil:* La nave se mueve al poner el dedo en la pantalla (ontouch).
2. *PC:* La nave se mueve SOLO al pulsar la barra espaciadora (no funciona con ninguna otra tecla). Además al pulsar la tecla P nos lleva al menú de pausa.
* **Mostrar/Ocultar los divs de los elementos del menú (instrucciones, opciones, about...):**
1. *Móvil:* Al estar en el menú principal y clicar sobre los botones nos lleva a los divs correspondientes. Cada div contiene un botón "Volver" que nos permite volver al menú principal.
2. *PC:* Cada vez que se da clic en un elemento del menú superior, se cierran los otros y se abre el nuevo que queremos ver. Si volvemos a hacer clic sobre el botón de un menú que tenemos abierto, el div se cierra y el juego continúa.
----
* **Estilo Movil** 
1. *Menu oculto:* Ocupa toda la pantalla.
2. *Divs de navegación:* También ocupan toda la pantalla.


4. *Menús*
 * **Menú principal (Oculto):**
    *  *Reanudar (no implementado):* Nos devolvería al juego.
    *  *Opciones (no implementado):* Conducirá al "Menú instrucciones" (ver más abajo)
    *  *Reinciar:* Nos devuelve a index.html
    *  *About (Link externo):* Nos lleva a about.html
 * **Menú instrucciones (Oculto):** Incluye instrucciones de juego y elección de idioma.
5. *About*
 * Página externa con la información de las personas que han trabajado en el proyecto. Al hacer click en "Volver" nos devuelve a index.html

### Cambios realizados respecto al material original

* **Luna:** La imagen se redujo de tamaño (de 400x133 a 306x133 en la versión horizontal y de 200x67 a 153x67 en la versión vertical), para que al repetirse la imagen se viese la superficie lunar de manera continua, sin que se notase el límite entre imágenes.
* **Nave:** Para poder trabajar correctamente con la nave, tuvimos que hacer nuevas versiones de la nave a partir del material recibido. Las nuevas versiones de las imágenes (148x188 para la versión horizontal y 100x127 para la versión vertical), en las que se incluían dos versiones de la imagen (una de la nave normal, y otra con la propulsión).
* **Panel de control:** Para facilitar que el código fuese responsive, se decidió no utilizar la imagen de fondo del panel propuesta y crearla nosotros con CSS. Se mantuvio la paleta de colores original.
* **Menu principal:** Se nos entregó una imagen para el menú, pero se recreó el menú a partir de CSS (manteniendo colores y fuentes de texto originales) para facilitar su adaptación a los diferentes dispositivos. 
* **Menu horizontal/vertical (ELIMINADO):** En la versión original del proyecto había un menu auxiliar que permitía cambiar el formato vertical/horizontal. Como el código es responsive y se adapata al dispositivo no se consideró necesasrio incluirlo.
* **Menu instrucciones:** No se especificaron que instrucciones se debían incluir, por lo que se crearon basándonos en el material recibido. En este mismo menú se eliminaron las "Banderas" para la selección de idiomas y se utilizó texto, al no disponer de las imágenes adecuadas para implementarlo.
* **About:** No estaba incluido en el material original.

### Otra información

* El código es responsive para adaptarse a los diferentes tamaños de pantallas.
