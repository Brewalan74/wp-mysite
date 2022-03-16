console.log('%c' + "header-picture.js loaded", 'color: #0bf; font-size: 1rem; background-color:#fff');

// au chargement de la page
document.addEventListener("DOMContentLoaded", function() {

  // utilisation de la bibliothèque javascript worpdress dédiée au customizer (fournie par wordpress)
  wp.customize(
    // sur quelle variable le javascript doit gérer le live preview
    'whyme-picture',

    // déclaration de la fonction qui "gère" la variable customisée
    function(value) {
      value.bind(function(newValue) {

        //=====CODE CUSTOM=========
        // cette fonction se déclenche lorsque la "variable customisée" change de valeur
        // nous ciblons la bannière
        console.log(newValue);

        let whymePicture = document.querySelector('.split .area-1');
        // nous changeons l'image
        whymePicture.setAttribute('src', newValue);

        //==========================

      });
    }
  );
});