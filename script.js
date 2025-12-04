/* >>>>>>>>>>>>>>>>>>MENU<<<<<<<<<<<<<<<<<<<<<<< */

((d) => {
    const $btnMenu = d.querySelector(".menu-btn");
    const $menu = d.querySelector(".menu");
    $btnMenu.addEventListener("click", e => {
        $btnMenu.firstElementChild.classList.toggle("none");
        $btnMenu.lastElementChild.classList.toggle("none");
        $menu.classList.toggle("is-active");
    });

    d.addEventListener("click", e => {
        if (!e.target.matches(".menu a")) return false;

        $btnMenu.firstElementChild.classList.remove("none");
        $btnMenu.lastElementChild.classList.add("none");
        $menu.classList.remove("is-active");

    })

})(document);

/* >>>>>>>>>>>>>>>=>>>CONTACT FORM<<<<<<<<<<<<<<<<<<<<<<< */
/*
El envío del formulario ahora se maneja directamente a través del atributo 'action' en el HTML.
El código AJAX anterior ha sido eliminado para evitar conflictos de CORS.
*/



/* >>>>>>>>>>>>>>>=>>>Pixel<<<<<<<<<<<<<<<<<<<<<<< */

/* Enlaces menu*/

document.getElementById('Inicio').addEventListener('click', function () {
    fbq('track', 'Lead');
});

document.getElementById('Sobre mi').addEventListener('click', function () {
    fbq('track', 'Lead');
});

document.getElementById('Habilidades').addEventListener('click', function () {
    fbq('track', 'Lead');
});

document.getElementById('proyectos').addEventListener('click', function () {
    fbq('track', 'Lead');
});


/* Enlaces menu*/
