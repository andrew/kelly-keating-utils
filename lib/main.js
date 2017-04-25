var assert = require('./utils/assert')
var data = require('./data/data')
var expectedArrayOfArrays = require('./data/array-of-arrays')
var filter = require('./utils/filter.js')
var index = require('./utils/index')

var meaningOfLife = '42'

assert(2 + 2, 4, 'test are working!')

/*
 * getType
 */

// Uncomment when ready to test
//assertGetType()

function getType (thing) {
   return typeof thing
}

function assertGetType () {
  assert(getType('42'), 'string', '"42" is a string data type')
  assert(getType(data), 'object', 'data is an object')
}


/*
 * isNumber
 */

// Uncomment when ready to test
// assertIsNumber()

function isNumber (thing) {
  if(typeof thing == 'number'){
    return true
  } else {
    return false
  }
}

function assertIsNumber () {
  assert(isNumber('42'), false, '"42" is not a number datatype')
  assert(isNumber(13), true, '13 is a number datatype')
}


/*
 * isStringNumber
 */

// Uncomment when ready to test
// assertIsStringNumber()

function isStringNumber (str) {
  if(typeof str == 'string' && !isNaN(str)){
    return true
  } else {
    return false
  }
}

function assertIsStringNumber () {
  assert(isStringNumber('42'), true, '"42" is a string number')
  assert(isStringNumber('jsksk'), false, 'isStringNumber does not give a false positive')
}


/*
 * toNumber
 */

// Uncomment when ready to test
// assertToNumber()

function toNumber (str) {
  if(!isNaN(str)){
    return Number(str)
  }
}

function assertToNumber () {
  assert(toNumber('42'), 42, 'toNumber can convert strings to number if possible')
}


/*
 * add
 */

// Uncomment when ready to test
// assertAdd()

function add (a, b) {
  return a + b
}

function assertAdd () {
  assert(add(2, 3), 5, 'add successfully adds two numbers')
  assert(add(-2, 2), 0, 'add successfully adds two numbers')
}


/*
 * addStrings
 */

// Uncomment when ready to test
// assertAddStrings()

function addStrings (a, b) {
  var temp = toNumber(a) + toNumber(b)
  return String(temp)
}

function assertAddStrings () {
  assert(addStrings(meaningOfLife, '10'), '52', 'addStrings can add number strings and convert them back to a string')
}


/*
 * addStringsOrNumbers
 */

// Uncomment when ready to test
// assertAddStringsOrNumbers()

function addStringsOrNumbers (a, b) {
  if(typeof a == 'string' || typeof b == 'string'){
    return "" + ((+a) + (+b))
  } else {
    return add(a,b)
  }
}

function assertAddStringsOrNumbers () {
  assert(addStringsOrNumbers(2, 3), 5, 'addStringsOrNumbers can add numbers')
  assert(addStringsOrNumbers('1', '2'), '3', 'addStringsOrNumbers can add strings')
  assert(addStringsOrNumbers('10', 10), '20', 'addStringsOrNumbers can add strings and numbers (returning a string)')
}


/*
 * isEmail
 */

// Uncomment when ready to test
// assertIsEmail()

function isEmail (str) {
  var newArr = str.split('@')
  if(newArr.length > 1 && newArr[1] != ''){
    return true
  } else {
    return false
  }
}

function assertIsEmail () {
  assert(isEmail('user@company.com'), true, 'isEmail detects an email')
  assert(isEmail('3333@'), false, 'isEmail does not give a false positive')
  assert(isEmail('johnny.b.good'), false, 'isEmail does not give a false positive')
}


/*
 * countIf
 */

// Uncomment when ready to test
assertCountIf()



function assertCountIf () {
  var isString = function (s) {
    return typeof s === 'string'
  }

  var mixedArray = [1, '21', null, Date.now(), 5, meaningOfLife, 42]
  var expectedNumberCount = 4 // do you know which 4 are numbers?
  var expectedStringCount = 2
  var numberCount = index.countIf(isNumber, mixedArray)
  var stringCount = index.countIf(isString, mixedArray)

  assert(numberCount, expectedNumberCount, 'countIf can count the numbers in an array')
  assert(stringCount, expectedStringCount, 'countIf can count the strings in an array')
}


/*
 * filter
 */

// Uncomment when ready to test
// assertFilter()



function assertFilter () {
  var emails = filter(isEmail, data) || []
  assert(emails.length, 44, 'filter and isEmail returns the correct number of emails')
}


/*
 * map
 */

// Uncomment when ready to test
assertMap()



function assertMap () {
  var someNumbers = [2, 4, 6]
  var expectedNumbers = [4, 8, 12]
  var timesTwo = function (num) {
    return num * 2
  }
  var actualNumbers = index.map(timesTwo, someNumbers) || []
  for (var i = 0; i < expectedNumbers.length; i++) {
    assert(expectedNumbers[i], actualNumbers[i], 'number mapped correctly')
  }
}


/*
 * filterStringsWithCommas
 */

var stringsWithCommas = filter(filterStringsWithCommas, data) || []

// Uncomment when ready to test
// assertFilterStringsWithCommas()

// does the string have a comma in it?
function filterStringsWithCommas (str) {
  var temporary = str.split(",")
  if(temporary.length>1)
  {
    return true
  }
  else {
    {
      return false
    }
  }
}

function assertFilterStringsWithCommas () {
  assert(stringsWithCommas.length, 62, 'filter and filterStringsWithCommas returns the correct number of commas')
}


/*
 * splitStringByCommas
 */

// Uncomment when ready to test
// assertSplitStringByCommas()

function splitStringByCommas (str) {
  var temporary = str.split(",")
  return temporary
}

function assertSplitStringByCommas () {
  var arrayOfArrays = index.map(splitStringByCommas, stringsWithCommas) || []
  var matchesArrays = !!arrayOfArrays.length && arrayOfArrays.every(function (arr, i) {
    return arr.every(function (str, j) {
      return str === expectedArrayOfArrays[i][j]
    })
  })

  assert(matchesArrays, true, 'the generated array of array of strings matches the expected array')
}
