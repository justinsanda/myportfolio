
// Écouteur pour le bouton de retour d'impression utilisateur
document.addEventListener('DOMContentLoaded', function() {
    const feedbackButton = document.getElementById('feedback-button');
    const feedbackDisplay = document.getElementById('user-feedback');

    feedbackButton.addEventListener('click', function() {
        const feedback = prompt("Quelles sont vos impressions par rapport à cette page ?");
        
        if (feedback) {
            feedbackDisplay.textContent = `Merci pour votre avis : "${feedback}"`;
            feedbackDisplay.style.display = "block";  // Affiche le retour de l'utilisateur
        } else {
            feedbackDisplay.textContent = "Vous n'avez pas donné de retour.";
            feedbackDisplay.style.display = "block";  // Affiche un message si aucun retour n'est donné
        }
    });
});
