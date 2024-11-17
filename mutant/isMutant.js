export function isMutant() {
  var dna = document.getElementById("isMutantInput").value;
  if (dna == ""){
    alert("no ingresaste ninguna cadena de adn");
    return
  }
  var arrDna = createArrayDna(dna);
  var cantRepeatVertically = verifyVertically(arrDna);
  var cantRepeatDiagonally = verifyDiagonally(arrDna);
  var cantRepeatHorizontally = verifyHorizontally(arrDna);
  alert(cantRepeatVertically + cantRepeatHorizontally + cantRepeatDiagonally > 1)
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

function verifyDiagonally(arrDna){
  var posCol = 0;
  var posRow = 0;
  var letter1 = "";
  var letter2 = "";
  var cantRepeatDiagAux = 0;
  var cantRepeatDiagonally = 0;
  var posColInit = 0;
  posCol = arrDna.length - 1;
  posColInit = arrDna.length - 1;
  posRow = 0;
  var cantRepeatDiagonallyLeftToRight = findDiagonallyLeftToRight(arrDna);
  //mientras no llegue al final de las columnas y filas
  //tomo la primer letra - la selteo
  //paso a la columna anterior // me guardo la columna incial
  //tomo la segunda letra y la guardo
  //sumo una fila y una columna - guardo la letra
  //comparo
  //sumo letras iguales
  //vuelvo a la fila en 0
  //resto uno a la columna inicial
  //tomo la primer letra
  //mientras no llegue al final de las columnas y filas
  //sumo una columna y una fila
  //tomo la segunda letra
  while(posCol <= arrDna.length - 1 && posRow <= arrDna.length - 1){
    if (posCol == arrDna[posRow].length - 1){//si ya estoy al final de la matriz
      posColInit = posColInit - 1;
      posCol = posCol - 1//resto una columna - es decir - salteo la ultima letra
    } else {
      letter1 = arrDna[posRow][posCol]// tomo la primera letra de la segunda columna
      posRow = posRow + 1;
      posCol = posCol + 1;
      if (posCol > arrDna.length - 1  || posRow > arrDna.length - 1 ){
        return cantRepeatDiagonallyLeftToRight + cantRepeatDiagonally;
      }
      letter2 = arrDna[posRow][posCol];// tomo la la ultima letra de la segunda fila
      if (letter1 === letter2){
        cantRepeatDiagAux++;
        if (cantRepeatDiagAux == 3){
          cantRepeatDiagonally++;
          cantRepeatDiagAux = 0;
        }
      } else {
        cantRepeatDiagAux = 0;
      }
      if (posCol == arrDna[posRow].length - 1){
        posColInit = posColInit - 1;
        posCol = posColInit;
        posRow = 0;
      }
    }
  }
}

function findDiagonallyLeftToRight(arrDna) {
  var posCol = 0;
  var posRow = 0;
  var letter1 = "";
  var letter2 = "";
  var cantRepeatDiagAux = 0;
  var cantRepeatDiagonallyLeftToRight = 0;
  var posColInit = 0;
  posCol = 0;
  posColInit = 0;
  posRow = 0;
  while(posCol <= arrDna.length - 1 && posRow <= arrDna.length - 1){
    if (posCol == 0){//si ya estoy al principio de la matriz
      posColInit = posColInit + 1;
      posCol = posCol + 1//sumo una columna - es decir - salteo la ultima letra
    } else {
      letter1 = arrDna[posRow][posCol]// tomo la primera letra de la segunda columna
      posRow = posRow + 1;
      posCol = posCol - 1;
      letter2 = arrDna[posRow][posCol];// tomo la la ultima letra de la segunda fila
      if (letter1 === letter2){
        cantRepeatDiagAux++;
        if (cantRepeatDiagAux == 3){
          cantRepeatDiagonallyLeftToRight++;
          cantRepeatDiagAux = 0;
        }
      } else {
        cantRepeatDiagAux = 0;
      }
      if (posCol == 0){
        posColInit = posColInit + 1;
        posCol = posColInit;
        posRow = 0;
        if (posCol > arrDna.length - 1){
          return cantRepeatDiagonallyLeftToRight;
        }
      }
    }
  }
}

function verifyVertically(arrDna){
  var posCol = 0;
  var posRow1 = 0;
  var posRow2 = 0;
  var letter1 = "";
  var letter2 = "";
  var cantRepeatVerAux = 0;
  var cantRepeatVertically = 0;
  for(var j = 0; j <= arrDna[0].length - 1; j++){//por cada posicion de la columna recorro esa posicion en cada cadena de caracteres
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
          cantRepeatVerAux = 0;
        }
      } else {
        cantRepeatVerAux = 0;
      }
    }
  }
  return cantRepeatVertically;
}

function verifyHorizontally(arrDna) {
  var cantRepeatHorAux = 0;
  var cantRepeatHorizontally = 0;
  var letter1 = "";
  var letter2 = "";
  var pos1 = 0;
  var pos2 = 0;
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
          cantRepeatHorAux = 0;
        }
      } else {
        cantRepeatHorAux = 0;
      }
    }
  })
  return cantRepeatHorizontally;
}
