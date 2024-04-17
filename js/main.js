/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

//Récupération du formulaire
const formulaire = document.querySelector('form');
console.log(formulaire);

//Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    alert('Coucoucoucoucoucoucoucou');
})

