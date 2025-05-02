/*========================================================================
                                BANNER
========================================================================*/


$(".fade-slider").jdSlider({
    isSliding: false,
    isAuto: true,
    isLoop: true,
    isDrag: false,
    interval: 5000,
    isCursor: false,
    speed: 3000
});

var alturaBanner = $(".fade-slider").height();

$(".bannerEstatico").css({ "height": alturaBanner + "px" });

/*========================================================================
                                EFECTO
========================================================================*/

$(".grid section").click(function() {

    var vinculo = $(this).attr("vinculo");

    window.location = vinculo;

});




/*========================================================================
                                menu
========================================================================*/
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


/*========================================================================
                                EFECTO
========================================================================*/

var controller = $.superscrollorama();

controller.addTween("", TweenMax.from(

    $(""), 0.5, { css: { opacity: 0 } }

));


/*========================================================================
                                PRELOAD
========================================================================*/

$("body").css({ overflow: 'hidden' });

var cargarImg = $("img");
var cargarScript = $("script");
var cargarCSS = $("link");
var cargarVideos = $("video");
var cargarAudios = $("audio");
var totalObjetos = [];
var numItem = 0;
var valorPorcentaje = 0;
var incremento = 0;
var numCarga = 0;


totalObjetos.push(cargarImg, cargarScript, cargarCSS, cargarVideos, cargarAudios);

totalObjetos.forEach(funcionForEach);

function funcionForEach(item, index) {

    for (var i = 0; i < item.length; i++) {

        numItem++;

        valorPorcentaje = 100 / numItem;

    }

    for (var j = 0; j < item.length; j++) {

        preload(j, item);

    }

}

function preload(i, item) {

    setTimeout(function() {

        $(item[i]).ready(function() {

            numCarga++;

            incremento = Math.floor(numCarga * valorPorcentaje);

            $("#porcentajeCarga").html(incremento + "%");

            $("#rellenoCarga").css({ "width": incremento + "%" });

            if (incremento >= 100) {

                $("#preload").delay(350).fadeOut("slow");
                $("body").delay(350).css({ "overflow-y": "scroll" });

            }

        });
    }, i * 100);

}

/*========================================================================
                                PAGINATION
========================================================================*/

$(".pagination").twbsPagination({
    totalPages: 10,
    visiblePages: 4,
    first: "Primero",
    last: "Último",
    prev: '<i class="fas fa-angle-left"></i>',
    next: '<i class="fas fa-angle-right"></i>'
});

/*========================================================================
                                 LOGUI
========================================================================*/

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("Por favor ingrese su nombre de usuario y contraseña");
    } else if (username != "usuario" || password != "contraseña") {
        alert("Nombre de usuario o contraseña incorrecta");
    } else {
        alert("Inicio de sesión exitoso");
        // Aquí puedes redirigir a otra página o hacer otras acciones después del inicio de sesión
    }
}