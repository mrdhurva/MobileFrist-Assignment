import React,{useState} from 'react';
import {} from '../componentsCss/form.css'


function Form() {

  const [userName,setUserName]=useState();
  const [password,setPassword]=useState();

  const userNameChange=({target:{value}})=>{
    setUserName(value);
  }

  const userPasswordChange=({target:{value}})=>{
    setPassword(value);
  }

  const submission=()=>{
    if(userName!=='anvesh' && password!=='anvesh123'){
      // alert('welcome')
      return <h1>Invalid</h1>;
    }else{
      // alert('wrong')
      return ;
    }
  }

  return (
    <>
      <div className='container'>
        <form action='#' onSubmit={submission}>
            <div className='userName'>
                <div className='userNameLabel'>
                <label>Username:</label>
                </div>
                <div className='userNameInput'>
                <input type='text' onChange={userNameChange}/>
                </div>
            </div>
            <div className='password'>
            <div className='passwordLabel'>
                <label>Password:</label>
                </div>
                <div className='passwordInput'>
                <input type='password' onChange={userPasswordChange}/>
                </div> 
            </div>
            <div className='submitBtn'>
                <button type='submit'>Login</button>
            </div>
        </form>
      </div>
    </>
  )
}

export default Form
