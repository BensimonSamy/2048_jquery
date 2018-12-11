$(document).ready(function(){
  var arr = [];

// Génère 2 chiffre aléatoire au lancement de la partie
  for(var i=1 ; i <= 2 ; i++){
    var numRandom1 = randomNumber();
    putInCase(numRandom1);
  }

// Si clique sur Restart on vide toute les cases
  $(".reset").click(function() {
    Restart();
});

  $(".grid-cell").on('click', function(){
    var numRandom = randomNumber();
    putInCase(numRandom);
    console.log(recupArray(arr));
    console.log(checkIfEmpty(arr));


  });
})

// ----**** Fonctions ****----//

function randomNumber(){

  var random = (Math.random()*10);
    var random_num;

    if(random < 9){
      random_num = 2;
    }
    else{
      random_num = 4;
    }
    return random_num;
}

function putInCase(num){

  var random_case = (Math.floor(Math.random() * 16) + 1);

    $( ".grid-cell:nth-child("+random_case+")" ).html(num);
    $( ".grid-cell:nth-child("+random_case+")" ).addClass('full');
}

function Restart(){

  for (var i = 0 ; i <= 16 ; i++){
    $( ".grid-cell:nth-child("+ i +")" ).html("0");
    var classe_full = $(".grid-cell:nth-child("+ i +")" ).hasClass("full");
      if (classe_full == true){
        $(".grid-cell:nth-child("+ i +")" ).removeClass("full");
    }
  }
  for(var i=1 ; i <= 2 ; i++){
    var numRandom1 = randomNumber();
    putInCase(numRandom1);
  };
}
// Check si la case est remplie ou pas
function isFull(Number){
  var random_case = (Math.floor(Math.random() * 16) + 1);
  var classe_full = $(".grid-cell:nth-child("+ Number +")" ).hasClass("full");

  for(var i = 0 ; i <= 16 ; i++){
    if(classe_full){
      return true;
    }
    else return false;
  }
}

function recupArray(arr){

  for (var i = 0 ; i < 4 ; i++){
    arr[i] = [];
    for (var j = 0 ; j < 4 ; j++){
      arr[i][j] = ($('#' + i + j).text());
    }
  }
  return arr;
}

function checkIfEmpty(arr){

  var result =[]

  for (var i = 0 ; i < 4 ; i++){
    for (var j = 0 ; j < 4 ; j++){
      if(arr[i][j] != ""){
        result.push(i + j);
        console.log("full");
      }
      else
        console.log('empty');    }
  }
  return result;
}



