function recurse_me(times) {
  if (times == 0) {
  console.log("Base Case 0!")
  } else {
  console.log(`Before: ${times}`)
  recurse_me(times-1)
  console.log(`After: ${times}`)
  }
}

recurse_me(5)