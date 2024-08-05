function getuser() {
  return [
    { username: "john", email: "john@test.com" },
    { username: "jane", email: "jane@test.com" },
  ];
}

function findUser(username){L
    console.log(username)
    const users = getuser()
    
    const user = users.find((user)=>
    user.username === username
    )
    return user
}

console.log(findUser('john'))