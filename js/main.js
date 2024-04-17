/**
 * @author Alexandre Pitarch
 * @since 2024.03.27
 */

'use strict';

//Récupération du formulaire
const formulaire = document.querySelector('form');
const txtMDP = document.querySelector('#mdp');
const txtMDPCConfirm  = document.getElementById('mdpConfirm');
const listBackground = document.querySelector('#background');
const body = document.querySelector('body');

console.log(formulaire, txtMDP, txtMDPCConfirm, listBackground, body );

//Ecouter l'envoi du formulaire
formulaire.addEventListener('submit', (event) =>  {
    // Stoppe l'envoie du formulaire
    event.preventDefault();
    let erreurs = [];
    // Récupérer la valeur du mot de passe
    let mdp = txtMDP.value;
    let mdpConfirm  = txtMDPCConfirm.value;

    // Tester si mdp > 3
    if (txtMDP.value.length < 3) {
        erreurs.push('Le mot de passe doit contenir au moins 3 caractères !');
    }

    // Tester si les mdp sont identiques
    if(mdpConfirm !== mdp) {
        erreurs.push('Les mots de passes sont différents !!!');
    }

    // S'il y a des erreurs
    if (erreurs.length > 0) {
        let msg = '';
        // Pour chaque erreur dans le tableau
        for (let err of erreurs) {
            msg += ' \n - ' + err;
        }
        alert(msg);
        // Stoppe la fonction
        return;
    }


    alert('Compte créé avec succès !');
    // Permet d'envoyer le formulaire
    formulaire.submit();

});


// Ecouter le changement de valeur dans la liste déroulante
listBackground.addEventListener('change', () =>  {
    // Remplace img de fond du body
    body.style.backgroundImage = 'url(./img/backgrounds/' + listBackground.value + ')';
});
