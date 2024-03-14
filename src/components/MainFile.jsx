import React,{useState,useEffect} from 'react';
import {} from '../componentsCss/mainfile.css';

function MainFile() {

  let [data,setData]=useState([]);
  let [path,setPath]=useState();

    useEffect(()=>{
         getData()
    }, []);

    async function getData(){
      let apiCall=await fetch('https://v2.jokeapi.dev/joke/any?format=json&blacklistFlags=nsfw,sexist&type=single&lang=EN&amount=10');
      let apiRespone=await apiCall.json();
      let apiData =await apiRespone.jokes;
      setData(apiData);
     }

    let fetchBtn=()=>{
      getData();
    }

    let logOut=()=>{
      setPath('/')
    }
        
  return (
    <>
   <div className='container'>
   <div className='jokesContent'>
      <h3>Jokes</h3>
    {data.map(({id,joke})=>{
      return(
        <div key={id} className='dataContent'>
        <p>{joke}</p>
        </div>
      )
    })}
    </div>
    <div className='buttons'>
     <form action={path}>
     <button type='submit' onClick={fetchBtn} className='fetchBtn'>FetchJokes</button>
     <button type='submit' onClick={logOut} className='logoutBtn'>Logout</button>
     </form>
    </div>
   </div>
    </>
  )
}

export default MainFile
