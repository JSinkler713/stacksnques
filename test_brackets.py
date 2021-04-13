def test_brackets(string):
  // limit to only methods push and pop
  stack = []
  for char in string: 
    if ( char == '[' or char == '{' or char == '('):
      stack.push(string[i])
    
    if (char == ']' or char == ')' or char == '}':
      bracketPopped = stack.pop()
      if ((bracketPopped == '[' and char == ']') or (bracketPopped == '(' and char == ')') or (bracketPopped == '{' and char == '}')): 
          # nothing to do all good
      else: 
        # not good closed out something that was
        # not opened
        return false
  # check all chars been popped
  if ( not stack.pop()): 
    return true
  else:
    return false
  
}

print(test_brackets('a[bc(123)]')