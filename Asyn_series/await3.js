const getjoke =async ()=>
    {
        const response = await fetch("https://official-joke-api.appspot.com/jokes/random",
        { 
        method :"GET",//default is get 
        headers:{ 
            "Accept":"application/json"
            // "Accept": "text/plain"
        }
    })
    const  data= await response.json()// for getting in json formmate
    // const data = await response.text();// for getting the text formate 
    console.log(data.setup)  ; //dosen't prints any 
}
getjoke()//now prints the data 