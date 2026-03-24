// début partie Meriem
let livres = []; //tableau vide



const form = document.getElementById("formulaireLivre");
const livresAjouter = document.getElementById("livresAjouter");
const recherche = document.getElementById("rechercheLivre");

if (localStorage.getItem('livres')){
    livres = JSON.parse(localStorage.getItem('livres'));
    afficherLivres(livres);
}
form.addEventListener("submit", function (e) {
    e.preventDefault(); //empêche le rechargement de la page 

    const titre = document.getElementById("titreLivre").value;
    const auteur = document.getElementById("auteurLivre").value;
    const annee = document.getElementById("anneeLivre").value;
    const genre = document.getElementById("genreLivre").value;

    const livre = { titre, auteur, annee, genre };
    livres.push(livre);
    localStorage.setItem('livres', JSON.stringify(livres));
    afficherLivres(livres);
    form.reset(); 
});

function afficherLivres(tableau) {
    livresAjouter.innerHTML = "";

    tableau.forEach((livre, index) => {
        const div = document.createElement("div");
        div.className = "livre";

        div.innerHTML = `
            <h2>Livre ${index + 3}</h2>
            <p><strong>Titre :</strong> ${livre.titre}</p>
            <p><strong>Auteur :</strong> ${livre.auteur}</p>
            <p><strong>Année :</strong> ${livre.annee}</p>
            <p><strong>Genre :</strong> ${livre.genre}</p>
        `;
        livresAjouter.appendChild(div);
    });
}

recherche.addEventListener("input", function () {
    const texte = recherche.value.toLowerCase(); //minuscule

    const livresFixes = document.querySelectorAll("#livre1, #livre2");
    livresFixes.forEach(livre => {
        livre.style.display = livre.innerText.toLowerCase().includes(texte) ? "block" : "none"; //on affiche ou on cache
    });

    const resultat = livres.filter(livre => livre.titre.toLowerCase().includes(texte) || livre.auteur.toLowerCase().includes(texte));
    afficherLivres(resultat);
});
//fin partie Meriem
//Partie Nosayba
//Tri par année (du plus ancien au plus récent)
const btnTriAnne = document.getElementById("trierAnnee");
const btnTriAuteur = document.getElementById("trierAuteur");

btnTriAnne.addEventListener("click" , function() {
    livres.sort((a, b) =>parseInt(a.annee) - parseInt(b.annee)); 
    localStorage.setItem('livres', JSON.stringify(livres));
    afficherLivres(livres);
});
// Tri par auteur (ordre alphabétique)
btnTriAuteur.addEventListener("click" , function(){
    livres.sort(function(a, b) {
        return a.auteur.localeCompare(b.auteur);//Compare les noms alphabétiquement 
    });
    localStorage.setItem('livres', JSON.stringify(livres));
    afficherLivres(livres);
});
//fin partie de Nosayba