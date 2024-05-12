const userla =
{
    userlist:[]
}

const users = async()=>{
    const response=await fetch("https://jsonplaceholder.typicode.com/users")
    const user=await response.json()
    return user;
    // console.log(user);
}
const users2 = ()=>{
    const data = users()//await is important if we removed it Promise { <pending> 
    userla.userlist=data//ipo atha arraya la 10 obj create aagirukum
    // return data
    // console.log(data);
    console.log(userla)//line clear to see the 
}
users2();