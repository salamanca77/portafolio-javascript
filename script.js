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
((d) => {
  const $contactForm = d.querySelector(".contact-form");
  const $contactLoader = d.querySelector(".contact-form-loader");
  const $contactResponse = d.querySelector(".contact-form-response");

  $contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    $contactLoader.classList.remove("none");

    fetch("https://formspree.io/f/mgvgzldl", {
      method: "POST",
      body: new FormData(e.target),
      headers: {
        'Accept': 'application/json'
      }
    })
    .then(res => {
      if (res.ok) {
        return res.json();
      } else {
        // For Formspree, even with errors, the response can be JSON
        return res.json().then(data => Promise.reject({ status: res.status, statusText: res.statusText, body: data }));
      }
    })
    .then(json => {
      console.log(json);
      location.hash = "#gracias";
      $contactForm.reset();
    })
    .catch(err => {
      console.error(err);
      let message = "Ocurrió un error al enviar, intenta nuevamente.";
      // If Formspree provides an error message in the response body, use it
      if (err.body && err.body.error) {
        message = err.body.error;
      }
      $contactResponse.querySelector("h3").innerHTML = `Error: ${message}`;
      // Optionally, show the response modal for errors too
      location.hash = "#gracias"; 
    })
    .finally(() => {
      $contactLoader.classList.add("none");
      setTimeout(() => {
        // Only close if it's the success message
        if ($contactResponse.querySelector("h3").innerHTML.includes("Gracias")) {
          location.hash = "#close";
        }
      }, 3000);
    });
  });
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
