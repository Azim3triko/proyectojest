
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

function fromEuroToDollar(valueInEuro){
    return valueInEuro*1.2
}

function fromDollarToYen(valueInDollar){
    return valueInDollar/1.2*127.9
}

function YenToPound(valueInYen){
    return valueInYen/127.9*0.8
}

module.exports = { sum, fromDollarToYen, fromEuroToDollar, YenToPound };

   

