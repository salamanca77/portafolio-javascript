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
        e.preventDefault();
        $contactLouder.classList.remove("none");

        const formData = new FormData(e.target);
        const data = {
            access_key: "d2c92fb7-b0a8-4ba7-8b7a-e5d8f3c9a2b1",
            name: formData.get("name"),
            email: formData.get("email"),
            comments: formData.get("comments")
        };

        fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then((res) => (res.ok ? res.json() : Promise.reject(res)))
            .then(json => {
                console.log(json);
                location.hash = "#gracias";
                $contactForm.reset();
            })
            .catch(error => {
                console.log("Error:", error);
                let message = "Ocurrió un error, vuelva a intentarlo";
                $contacResponse.querySelector("h3").innerHTML = `Error: ${message}`;
            })
            .finally(() => {
                $contactLouder.classList.add("none");
                setTimeout(() => {
                    location.hash = "#close";
                }, 2000);
            });
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
