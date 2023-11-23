/***********************************************************************************/
/*                        Hoja de estilo de Halloween.html                         */
/*                        Author: Rafael Moncayo                                   */
/*                        version: 1.0                                             */
/*                        fecha: noviembre 2023                                    */
/*                        Comments: ejercicio para porfolio (2)                    */
/***********************************************************************************/

function show(element){
    document.getElementById(element).style.visibility="visible";
    /** Extrae (get) un elemento (bats) y cambia algo en su estilo (visibilidad) **/
}

function hide(element){
    document.getElementById(element).style.visibility="hidden";
    /** Extrae (get) un elemento (bats) y cambia algo en su estilo (visibilidad) **/
}

function sound(element){
    document.getElementById(element).play();
}

function pause(element){
    document.getElementById(element).pause();
}
