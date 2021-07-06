var i=1;

function menu(a){
    if(a==1){
        mostrar('menu_abierto','icon-cross');
    }
    else if(a==2){
        ocultar('contenedor_menu','icon-menu');
    }
}

function mostrar(a,b){
    let clase_nav;
    let icono_menu;
    let defaul='contenedor_menu'
    clase_nav=document.getElementById('menu');
    icono_menu=document.getElementById('icono_menu');
    clase_nav.className=a+' '+defaul;
    icono_menu.className=b;
    i=2;
}
function ocultar(a,b){
    let clase_nav;
    let icono_menu;
    clase_nav=document.getElementById('menu');
    icono_menu=document.getElementById('icono_menu');
    clase_nav.className=a;
    icono_menu.className=b;
    i=1;
}