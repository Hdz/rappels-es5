function afficher(resultat){
    console.log(resultat);
}

function Personne (nom , prenom, pseudo){
    this.nom = nom;
    this.prenom = prenom;
    this.pseudo = pseudo;
 
    
    this.full = function () {
        return this.nom + '('+this.nom+''+' '+this.prenom+' '+''+this.pseudo+')'
    
      }
    }
    Jules = new Personne('Jules', 'LEMAIRE', 'jules77');
    afficher(Jules.full());

    Paul = new Personne('Paul', 'LEMAIRE', 'paul44');
    afficher(Paul.full());
   
   Jules2 = new Personne('Jules', 'Jules', 'Jules');
    afficher(Jules2.full());

    Jules["pseudo"] = 'jules44';
    afficher(Jules.full());

    Personne.prototype.age = 'Pas d\'age';
    afficher(Jules.age);
    Jules["age"] = '18';
    afficher(Jules.age);

    Personne.prototype.getInitiales = function() {

    return this.nom.charAt(0)+this.prenom.charAt(0);

    }
    afficher(Jules.getInitiales());

    Robert = new Personne('Robert', 'LEPREFET', 'robert77');

    Personne.prototype.getNomcomplet = function() {
        return this.nom + '('+this.nom+''+' '+this.prenom+' '+this.pseudo+' '+this.getInitiales()+')'

    }
    afficher(Robert.getNomcomplet());

    function Client (numeroclient, nom , prenom, pseudo){
        this.numeroclient= numeroclient;
        Personne.call(this,nom,prenom,pseudo);

     
        
        this.getInfo = function () {
            return this.numeroclient+' '+this.nom + '('+this.nom+''+' '+this.prenom+' '+''+this.pseudo+')'
        
          }
        }
  

var steve= new Client('Steve','LUCAS','steve44','A01');

afficher(steve.getInfo());