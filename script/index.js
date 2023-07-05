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
      event.preventDefault(); // Empêcher la redirection par défaut

      // Récupérer l'identifiant de la partie cible
      var targetId = link.getAttribute("href").substring(1);

      // Trouver l'élément cible dans le document
      var targetElement = document.getElementById(targetId);

      // Faire défiler la page jusqu'à l'élément cible
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }

      // Fermer le menu après le clic sur un lien
      sidenav.classList.remove("active");
    });
  });


/*//Chevron
const chevron = document.querySelector('.chevron ');

chevron.addEventListener('click', () => {
  const activites = document.querySelector('#activites');
  activites.scrollIntoView({ behavior: 'smooth' });
});*/

// Texte QSE

  const qseImage = document.getElementById("qse-image");
  const qseTexte = document.querySelector(".qse-texte");
  const qseTexteClose = document.querySelector(".qse-texte-close");

  qseImage.addEventListener("click", () => {
    qseTexte.style.display = "block";
  });

  qseTexteClose.addEventListener("click", () => {
    qseTexte.style.display = "none";
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
//Formulaire de contact

function sendMail() {
  var params ={
   nom : document.getElementById("nom").value,
   prenom : document.getElementById("prenom").value,
   objet : document.getElementById("objet").value,
   email : document.getElementById("email").value,
   message : document.getElementById("message").value,
   };

  const serviceId="service_vkwaujy";
  const templateId="template_hkukxq6"; 

  emailjs.send(serviceId, templateId, params)
  .then((res) => {
    document.getElementById("nom").value = "";
    document.getElementById("prenom").value = "";
    document.getElementById("objet").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
    console.log(res);
    alert("Votre message a été envoyé avec succés");
  })
  .catch((err)=>console.log(err));
}

document.addEventListener('DOMContentLoaded', function() {
  // Ciblez le formulaire
  var form = document.getElementById('myForm');

  // Ajoutez un écouteur d'événement pour l'événement "submit"
  form.addEventListener('submit', function(event) {
    // Empêchez le comportement par défaut du formulaire
    event.preventDefault();

    // Appelez la fonction sendMail()
    sendMail();
  });
});





