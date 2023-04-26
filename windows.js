var finestra1;
var finestra2;
var windowM;

function obrirFinestra1() {
    finestra1 = window.open("", "", "width=500,height=200");
    // finestra1.resizeTo(500, 200);
    finestra1.document.write("<p>Finestra 1</p>");
    finestra1.document.write("<p>Width: " + finestra1.outerWidth + ", Height: " + finestra1.outerHeight + ".</p>");
    finestra1.document.write("<p>ScreenX: " + finestra1.screenX + ", ScreenX: " + finestra1.screenY + ".</p>");
    finestra1.document.close();
}

function obrirFinestra2() {
    finestra2 = window.open("", "", "width=500,height=200");
    // finestra2.resizeTo(500, 200);
    finestra2.document.write("<p>Finestra 2</p>");
    finestra2.document.write("Width: " + finestra2.outerWidth + ", Height: " + finestra2.outerHeight + ".");
    finestra2.document.write("<p>ScreenX: " + finestra2.screenX + ", ScreenX: " + finestra2.screenY + ".</p>");
    finestra2.document.close();
}


function focusFinestra1(){
    finestra1.focus();
    windowM = finestra1;
}

function focusFinestra2(){
    finestra2.focus();
    windowM = finestra2;
}

function moure(ps1,ps2){
    windowM.moveBy(ps1, ps2);
    windowM.focus();
}
function granFinestra(){
    windowM.resizeBy(+100, +100);
    windowM.focus();
}

function menysFinestra(){
    windowM.resizeBy(-100, -100);
    windowM.focus();
}

function tancarFinestra1() {
    finestra1.close();
}

function tancarFinestra2() {
    finestra2.close();
}

function actualizar(){

    if(finestra1!=null){
        finestra1.document.write("<p>Finestra 1</p>");
        finestra1.document.write("<p>Width: " + finestra1.outerWidth + ", Height: " + finestra1.outerHeight + ".</p>");
        finestra1.document.write("<p>ScreenX: " + finestra1.screenX + ", ScreenX: " + finestra1.screenY + ".</p>");
        finestra1.document.close();
    }

    if(finestra2!=null){
        finestra2.document.write("<p>Finestra 2</p>");
        finestra2.document.write("Width: " + finestra2.outerWidth + ", Height: " + finestra2.outerHeight + ".");
        finestra2.document.write("<p>ScreenX: " + finestra2.screenX + ", ScreenX: " + finestra2.screenY + ".</p>");
        finestra2.document.close();
    }
   setInterval(actualizar,1500);
}