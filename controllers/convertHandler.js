/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  const NUMERIC_REGEXP = /[-]{0,1}[\d]*[\.]{0,1}[\d\/]+/g;
  const ALPHA_REGEX = /[A-Za-z]+/g;
  const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals);
  }

  this.getNum = function(input) {
    var num = input.match(NUMERIC_REGEXP).toString()
    console.log(`num is: `, num)
    console.log(typeof num)
    if ((/\//g).test(num)) {
      var result = round(eval(num), 5)
      console.log(`You've got a fraction the quotient is: ${result}`)
    } else {
      var result = input.match(NUMERIC_REGEXP)
    }
    console.log(`getNum result is: `, result)
    return result;
  };
  
  this.getUnit = function(input) {
    var firstCharIndex = input.indexOf(input.match(ALPHA_REGEX));
    console.log(`A letter first appears in this index: `, firstCharIndex)
    var result = input.slice(firstCharIndex)
    console.log(`getUnit result is: `, result)
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    let unit = initUnit.toLowerCase()
    let result
    switch (unit) {
      case 'gal':
        result = 'L'
        break
      case 'l':
        result = 'gal'
        break
      case 'lbs':
        result = 'Kg'
        break
      case 'kg':
        result = 'lbs'
        break
      case 'mi':
        result = 'km'
        break
      case 'km':
        result = 'mi'
      default:
        result = 'invalid unit'
        break
    }
    return result
  };

  this.spellOutUnit = function(unit) {
    let result
    switch (unit) {
      case 'gal':
        result = 'gallons'
        break
      case 'l':
        result = 'liters'
        break
      case 'lbs':
        result = 'pounds'
        break
      case 'kg':
        result = 'kilograms'
        break
      case 'mi':
        result = 'miles'
        break
      case 'km':
        result = 'kilometers'
      default:
        result = 'invalid unit'
        break
    }

    
    return result
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    
    return result;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result;
    
    return result;
  };
  
}

module.exports = ConvertHandler;
