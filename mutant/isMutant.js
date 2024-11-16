export function isMutant() {
  var dna = document.getElementById("isMutantInput").value;
  if (dna == ""){
    alert("no ingresaste ninguna cadena de adn");
    return
  }
  var arrDna = createArrayDna(dna);
  var cantRepeatHorAux = 0;
  var cantRepeatHorizontally = 0;
  var isMutant = false;
  var letter1 = "";
  var letter2 = "";
  var pos1 = 0;
  var pos2 = 0;
  var cantRepeatVertically = verifyVertically(arrDna);
  arrDna.forEach(function(str){// verifico horizontalmente
    for (var i = 0; i < str.length; i++){
      pos1 = i;
      pos2 = i + 1;
      letter1 = str[pos1];
      letter2 = str[pos2];
      if (letter1 === letter2){
        cantRepeatHorAux++;
        if (cantRepeatHorAux == 3){
          cantRepeatHorizontally++;
        }
      } else {
        cantRepeatHorAux = 0;
      }
    }
  })
  alert(cantRepeatVertically + cantRepeatHorizontally > 1)
  return isMutant;
  
}

function createArrayDna(dna){
  var splitDna = dna.split(",");
  var arrDnaAux = [];
  splitDna.forEach(function(str){
    arrDnaAux.push(str.trim())
  })
  return arrDnaAux;
}

function verifyDiagonally(dna){
 
}

function verifyVertically(arrDna){
  var posCol = 0;
  var posRow1 = 0;
  var posRow2 = 0;
  var letter1 = "";
  var letter2 = "";
  var cantRepeatVerAux = 0;
  var cantRepeatVertically = 0;
  for(var j = 0; j < arrDna[j].length - 1; j++){//por cada posicion de la columna recorro esa posicion en cada cadena de caracteres
    for (var i = 0; i < arrDna.length - 1; i++){
      posCol = j;
      posRow1 = i;
      posRow2 = i + 1;
      letter1 = arrDna[posRow1][posCol];
      letter2 = arrDna[posRow2][posCol];
      if (letter1 === letter2){
        cantRepeatVerAux++;
        if (cantRepeatVerAux == 3){
          cantRepeatVertically++;
        }
      } else {
        cantRepeatVerAux = 0;
      }
    }
  }
  return cantRepeatVertically;
}
