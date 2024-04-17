/**
 * @author Steve Fallet
 * @since 2022.09.06
 */

'use strict';

//Récupération du formulaire
const formulaire = document.querySelector('form');
const txtMDP = document.querySelector('#mdp');
const txtMDPCConfirm  = document.getElementById('mdpConfirm');
console.log(formulaire, txtMDP, txtMDPCConfirm );

//Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', (e) => {
    // Récupérer la valeur du mot de passe
    let mdp = txtMDP.value;
    let mdpConfirm  = txtMDPCConfirm.value;

    alert(mdp + ' : ' + mdpConfirm);
})

