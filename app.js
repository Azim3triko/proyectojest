
const fromEuroToDollar = function(valueInEuro){
    // convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.2;
    //return the dollar value
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar){
   
    let valueInYen = valueInDollar * 106.5;

    return valueInYen;
}

const fromYenToPound = function(valueInYen){
  
    let valueInDPound = valueInYen * 159.8;
 
    return valueInPound;
}


const sum = (a,b) => {
     return a + b
 }

console.log(sum(7,3))

module.exports = { sum, fromEuroToDollar }

let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}

let oneDollarIs = {
  
    "JPY": 106.5, // us dollar

}

let onePoundIs = {
  
    "JPY": 159.8, // us dollar

}



   

