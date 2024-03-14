import React,{useState,useEffect} from 'react'

function MainFile() {

  let [data,setData]=useState([]);

    useEffect(()=>{
         async function getData(){
          let apiCall=await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
          let apiRespone=await apiCall.json();
          let apiData =await apiRespone.jokes;
          setData(apiData);
         }
         getData()
    }, []);

    console.log(data)
        
  return (
    <>
    {data.map(({id,category,joke})=>{
      return(
        <>
       <div key={id}>
        <p style={{textAlign:'left'}}>{joke}</p>
       </div>
        </>
      )
    })}
    </>
  )
}

export default MainFile
