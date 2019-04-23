function afficher(resultat){
    console.log(resultat);
}

var ville1 = ['Nantes','Paris','Saint-nazaire','angers',' Le Mans'];

ville1.forEach(ville1 => {
    afficher(ville1);
});

function lettreADansToutesLesVilles(ville1) {
    return ville1.includes('a');
  }

  

afficher(ville1.every(lettreADansToutesLesVilles));

console.log("___________________________________________________");

function auMoinsUneVilleAvecUnTiret (ville1) {
    return ville1.includes('-');
  }

afficher(ville1.some(auMoinsUneVilleAvecUnTiret));

console.log("___________________________________________________");


function villesSansTiretSansEspace (ville1) {
    return !ville1.includes('-')&&!ville1.includes(' ') ;

    
  }

afficher(ville1.filter(villesSansTiretSansEspace));

console.log("___________________________________________________");

   ville1.filter (t => t.endsWith ('s')).map(t => t.toUpperCase())


afficher(ville1);