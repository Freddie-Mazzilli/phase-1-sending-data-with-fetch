

function submitData(name, email){ 
    const newUser = {
        name: name,
        email: email
    }
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(newUser => {
        document.body.append(newUser.id)
    })
    .catch(error => {
        document.body.append(error)
    })
}

submitData("joe", "joe@joe.com")


// fetch("http://localhost:3000/foods", {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json"
//         },
//         body: JSON.stringify(newFood)
//     })
// })