// use an array but only use push and pop

const test_brackets = (string) => {
  // limit to only methods push and pop
  let stack = []
  for (let i=0; i< string.length; i++) {
    if ( string[i] === '[' || string[i] === '{' || string[i] === '(') {
      stack.push(string[i])
    }
    if (string[i] === ']' || string[i] === ')' || string[i] === '}') {
      let bracketPopped = stack.pop()
      if ((bracketPopped === '[' && string[i] === ']') || (bracketPopped === '(' && string[i] === ')') || (bracketPopped === '{' && string[i] === '}')) {
        // good to go this is what we want
      } else {
        // not good closed out something that was
        // not opened
        return false
      }
    }
  }
  // check all chars been popped
  if (!stack.pop()) {
    return true
  } else {
    return false
  }
}

// returns True
console.log(test_brackets('abc(123)'))

// returns True
console.log(test_brackets('a[bc(123)]'))

// returns True
console.log(test_brackets('a{b}{c(1[2]3)}'))

// returns True
console.log(test_brackets('()'))

// returns True -- no brackets = correctly matched
console.log(test_brackets('abc123yay'))

// returns False -- missing closing bracket
console.log(test_brackets('abc(123'))

// returns False -- improperly nested
console.log(test_brackets('a[bc(12]3)'))

// returns False -- improperly nested
console.log(test_brackets('a{b}{c(1}[2]3)'))
