// Homework Problem 1
// Write a function that determines if a number is odd

function isOdd (number) {
    let oddNumber = 0
    if ( oddNumber == number % 2)
        oddNumber = true
    else {
        oddNumber = false
    }
    return !oddNumber
  }
  console.log( isOdd(1) )   // Should print: true
  console.log( isOdd(50) )  // Should print: false

// Homework Problem 2
// Write a function that returns the reverse of a string

function reverseString (string) {
    let revString = string.split("").reverse().join("")
    return revString
  }
  console.log( reverseString('Yui') )     // Should print: iuY
  console.log( reverseString('racecar') ) // Should print: racecar

// Homework Problem 3
// A function that determines if a number is evenly divisible by 3

function isDiv3 (number) {
    let div3Number = 0
    if ( div3Number == number % 3)
        div3Number = false
    else {
        div3Number = true
    }
    return !div3Number
  }
  
  console.log( isDiv3(69) ) // true
  console.log( isDiv3(28) ) // false

// Homework Problem 4
// Write a function that reverses strings if they're divisible by 3

function reverseThrees (string) {
    if (isDiv3(string.length)){
        return reverseString(string)
    } else {
        return string
    }
  }
  
  console.log( reverseThrees('eisohR') )  // Reversed
  console.log( reverseThrees('is very'))  // Stays the same
  console.log( reverseThrees('ytterp'))   // Reversed

// Homework Problem 5
// Write a function that calculates multiple dice roll sum

function rollDice (numberToRoll, sides) {
    let diceSum = 0
    for (var i = 0 ; i < numberToRoll ; i++) {
      const random = Math.random()   
      const roll = sides * random + 1
      const flooredRoll = Math.floor(roll)
      diceSum = diceSum + flooredRoll
    }
    return sum
}
  
  console.log(rollDice(4, 6))    // This should be like rolling 4d6
  console.log(rollDice(1, 20))   // This is how you'd roll a d20 alone

// Homework Problem 6
// Write a function that calculates magic missile damage relative to spell level

function magicMissile (spellLevel) {
    return rollDice(spellLevel + 2, 4) + (spellLevel + 2)
  }

  console.log(magicMissile(3)) // This should return the sum of 5 darts (5d4+5)

// Homework Problem 7
// Write a function that calculates the sum of an array

function arrayTotal (array){
    let arraySum = 0
    for (var i = 0; i < array.length; i++){
    arraySum = arraySum + array[i]
    }
    return arraySum
}

console.log(arrayTotal([1, 3, 6, 14]))

// Homework Problem 8
// I dont wanna touch this...



// Homework Problem 9
// Magic Eight Ball

function rollDie (sides) {
  const random = Math.random()    
  const roll = sides * random + 1 
  return Math.floor(roll)         
}

function magicEightBall(){
  let answers = [
      'It is certain.',
      'It is decidedly so.',
      'Without a doubt.',
      'Yes definitely.',
      'You may rely on it.',
      'As I see it, yes.',
      'Most likely.',
      'Outlook good.',
      'Yes.',
      'Signs point to yes.',
      'Reply hazy, try again.',
      'Ask again later.',
      'Better not tell you now.',
      'Cannot predict now.',
      'Concentrate and ask again.',
      'Dont count on it.',
      'My reply is no.',
      'My sources say no.',
      'Outlook not so good.',
      'Very doubtful.'
  ]
  let thineFate = rollDie(20) - 1;
  let thineAnswer = answers[thineFate];
  console.log(thineAnswer)
}

magicEightBall()

// Homework Problem 10
// A recursive function is a fucntion that calls on itself. It must have a 
// condition that stops it from calling itself, otherwise it will keep looping.
