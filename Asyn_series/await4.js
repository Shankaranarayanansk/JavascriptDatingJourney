const Add ={
    id:'ALnka',
    joke:"no boys can live together"
  }
const postjoke =async (jokeobj)=>
    {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts",
        { 
        method :"POST",//default is get 
        headers:{ 
            "Content-Type":"application/json"// here we doesn't use the accept becoz we are posting in it 
        },
        body: JSON.stringify(jokeobj)//jokeobj used becozsending it init 
    })
    const  data= await response.json()// for getting in json formmate
    console.log(data)  ; //dosen't prints any 
}
postjoke()//now prints the data 