console.log("01 - Fonctions");

var nombre1 = 10;
var nombre2 = 20;

function afficher(resultat){
    console.log(resultat);
}

function additionner(a , b , fn){
    var result = a + b;
    fn(result)

}
console.log("Résultat :");
additionner(nombre1 , nombre2, afficher)


var somme = additionner;
console.log("Résultat 2:");
var resultat2 = somme(nombre1, nombre2, afficher);

function multiplication(a ,b , fn){
    var result2 = a * b;
    fn(result2)
}

var resultat3 = multiplication(nombre1, nombre2, afficher);

function addOperation(add){
    if (add){
        return function (a, b){
            return a + b;
        }
    }   else {
        return function (a, b) {

            return a - b;
    }
    
    }

    }

var somme2 = addOperation(true);
console.log("Résultat 3 si addition est positif:");
afficher(addOperation(true)(10, 20));
console.log("Résultat 4 si autre:");
afficher(addOperation(false)(10, 20));

console.log("___________________________________________________");

function afficherOperation (nomOp , op, nb1, nb2){
    this.nomOp = nomOp;
    this.op = op;
    this.nb1 = nb1;
    this.nb2 = nb2;
    this.full = function () {
        return this.nomOp + '(<'+this.nb1+'>'+' '+'+'+' '+'<'+this.nb2+'>)'+' = '+ this.op;
    
      }
      
}
var nb1 = 10;
var nb2 = 20;
var op1 = new afficherOperation('Somme', nb1+nb2, 10, 20);

afficher(op1.full());
console.log("___________________________________________________");

function afficherOperation2 (nomOp , op, nb1, nb2){
    this.nomOp = nomOp;
    this.op = op;
    this.nb1 = nb1;
    this.nb2 = nb2;
    this.full = function () {
        return this.nomOp + '(<'+this.nb1+'>'+' '+'*'+' '+'<'+this.nb2+'>)'+' = '+ this.op;
    
      }
      
}
var nb1 = 10;
var nb2 = 20;
var op1 = new afficherOperation2('Multiplication', nb1*nb2, 10, 20);

afficher(op1.full());

console.log("___________________________________________________");
function afficherOperation3 (nomOp , op, nb1, nb2){
    this.nomOp = nomOp;
    this.op = op;
    this.nb1 = nb1;
    this.nb2 = nb2;
    this.full = function () {
        return this.nomOp + '(<'+this.nb1+'>'+' '+'-'+' '+'<'+this.nb2+'>)'+' = '+ this.op;
    
      }
      
}
var nb1 = 10;
var nb2 = 20;
var op1 = new afficherOperation3('Soustraction', nb1-nb2, 15, 5);

afficher(op1.full());

