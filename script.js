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

})
    (document);

/* >>>>>>>>>>>>>>>=>>>CONTACT FORM<<<<<<<<<<<<<<<<<<<<<<< */
((d) => {
    const $contactForm = d.querySelector(".contact-form");
    const $contactLouder = d.querySelector(".contact-form-loader");
    const $contacResponse = d.querySelector(".contact-form-response");

    $contactForm.addEventListener("submit", (e) => {
        $contactLouder.classList.remove("none");

        // Permitir que el formulario se envíe normalmente después de mostrar el loader
        setTimeout(() => {
            $contactForm.submit();
        }, 500);
    })
})(document);



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
