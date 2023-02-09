// Homework Problem #1
// Reverse the string

let str = "Im trying to do this while very tired"
let rev_str = str.split("").reverse().join("")

console.log("Homework Problem #1")
console.log("The original sentence:", str)
console.log("The reversed sentence:",rev_str)

//Homework Problem #2
//Split the array and count the words in it

let sentence = 'I wanted to do a for loop because I overcomplicate things'
let words = sentence.split(" ")
let count = words.length

console.log("Homework Problem #2")
console.log("There are", count, "words in this sentence.")

//Homework Problem #3
// Replace v with w and vice versa

let third = 'wave'
let third_changed = []
for (var i = 0; i < third.length; i++) {
    if (third[i] === 'v') {
      third_changed.push('w')
    }
    else if (third[i] === 'w') {
      third_changed.push('v')
    }
    else {
      third_changed.push(third[i])
    }
  }
let third_joined = third_changed.join("")

console.log("Homework Problem #3")
console.log(third_joined)

// Homework Problem 4
// Palindrome check
// This is to check for an individual palindrome

let palindrome = "wow"
let rev_palindrome = palindrome.split("").reverse().join("")

if ( palindrome === rev_palindrome) {
    console.log(true)
}
else {
    console.log(false)
}

// This is to check for palindromes in an array

let palindromeArray = ['wow', 'dog', 'madam', 'white', 'level', 'nurses run']
let count = 0
for (let i = 0; i < palindromeArray.length; i++) {
    let item = palindromeArray[i].replace(' ', '')
    let rev_item = item.split('').reverse().join('')
    if ( item === rev_item ) {
        count++
    }
}
console.log("There are", count, "palindromes in this array.")
