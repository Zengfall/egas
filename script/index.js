let sidenav;
let openBtn;
let closeBtn;
//Bouton basculement menu
document.addEventListener('DOMContentLoaded', function() {
  sidenav = document.getElementById("mySidenav");
  openBtn = document.getElementById("openBtn");
  closeBtn = document.getElementById("closeBtn");

  openBtn.onclick = openNav;
  closeBtn.onclick = closeNav;

  /* Set the width of the side navigation to 250px */
  function openNav() {
    sidenav.classList.add("active");
  }

  /* Set the width of the side navigation to 0 */
  function closeNav() {
    sidenav.classList.remove("active")
  }
});
// Ajouter un gestionnaire d'événements sur les liens du menu pour faire défiler la page
  var menuLinks = document.querySelectorAll(".sidenav a");
  menuLinks.forEach(function(link) {
  link.addEventListener("click", function(event) {
    var href = link.getAttribute("href");

    // Extraire uniquement l'ancre (#apropos, #contact, etc.)
    var hash = href.includes("#") ? href.substring(href.indexOf("#") + 1) : null;
    var targetElement = hash ? document.getElementById(hash) : null;

    // Scroll uniquement si l'élément existe sur cette page
    if (targetElement) {
      event.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
      sidenav.classList.remove("active");
    }
    // Sinon, laisser le navigateur suivre le lien normalement
  });
});


/*//Chevron
const chevron = document.querySelector('.chevron ');

chevron.addEventListener('click', () => {
  const activites = document.querySelector('#activites');
  activites.scrollIntoView({ behavior: 'smooth' });
});*/

// Texte QSE

  // Texte QSE
document.addEventListener('DOMContentLoaded', function() {
    const qseImage = document.getElementById("qse-image");
    const qseTexte = document.querySelector(".qse-texte");
    const qseTexteClose = document.querySelector(".qse-texte-close");

    qseImage.addEventListener("click", () => {
        qseTexte.style.display = "block";
    });

    qseTexteClose.addEventListener("click", () => {
        qseTexte.style.display = "none";
    });

    // Fermeture aussi en cliquant sur le fond noir
    qseTexte.addEventListener("click", (e) => {
        if (e.target === qseTexte) {
            qseTexte.style.display = "none";
        }
    });
});

 //Bouton back-to-top
var backToTopButton = document.querySelector(".back-to-top");

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 300) {
    if(!backToTopButton.classList.contains("show-back-to-top")) {
      backToTopButton.classList.add("show-back-to-top")
    }
  } else {
    if(backToTopButton.classList.contains("show-back-to-top")) {
      backToTopButton.classList.remove("show-back-to-top")
    }
  }
}

backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}

//Pour que Le bouton reste au-dessus du footer
backToTopButton.addEventListener("click", backToTop);

function backToTop() {
  window.scrollTo(0, 0);
}
const footer = document.querySelector("footer");

window.addEventListener("scroll", function () {

  const footerPosition = footer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (footerPosition < screenHeight) {
    backToTopButton.style.bottom = "65px";
  } else {
    backToTopButton.style.bottom = "20px";
  }

});
// Formulaire de contact
function sendMail() {
  var nom = document.getElementById("nom").value.trim();
  var prenom = document.getElementById("prenom").value.trim();
  var objet = document.getElementById("objet").value.trim();
  var email = document.getElementById("email").value.trim();
  var message = document.getElementById("message").value.trim();

  // Validation des champs vides
  if (!nom || !prenom || !objet || !email || !message) {
    alert("Veuillez remplir tous les champs obligatoires.");
    return;
  }

  // Validation du format email
  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }

  // Désactiver le bouton pendant l'envoi
  var submitBtn = document.querySelector('#myForm button[type="submit"]');
  if (submitBtn) {
    submitBtn.disabled = true;
    submitBtn.textContent = "Envoi en cours...";
  }

  var params = { nom, prenom, objet, email, message };
  const serviceId = "service_vkwaujy";
  const templateId = "template_hkukxq6";
  const templateConfirmation = "template_mgxru3q";

  emailjs.send(serviceId, templateId, params)
    .then(() => {
      return emailjs.send(serviceId, templateConfirmation, params);
    })
    .then((res) => {
      document.getElementById("nom").value = "";
      document.getElementById("prenom").value = "";
      document.getElementById("objet").value = "";
      document.getElementById("email").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Votre message a été envoyé avec succès !");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Envoyer";
      }
    })
    .catch((err) => {
      console.log(err);
      alert("Une erreur est survenue, veuillez réessayer.");
      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.textContent = "Envoyer";
      }
    });
}



