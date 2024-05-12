// const users = fetch("https://jsonplaceholder.typicode.com/users")
// .then(users => {
//     return users.json()}
// ).then(users => {
//     console.log(users)
// })  

// the above is just return the data if we need to print one by one we use the foreach method 
const users = fetch("https://jsonplaceholder.typicode.com/users")
.then(users => {
    return users.json()}
).then(users => {
    users.forEach(user => {
        console.log(user)//prints name only 
    })
    
}) 
