const users =async()=>{
    const user1= await fetch ("https://jsonplaceholder.typicode.com/users")
    const user2 = await user1.json()
    user2.forEach((user1)=>{
        console.log(user1);//one by one 
    })
    console.log(user2);// all by one
    return user2;
}
users()

