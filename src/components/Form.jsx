import React,{useState} from 'react';
import {} from '../componentsCss/form.css'
import Error from './Error';


function Form() {

  const [userName,setUserName]=useState();
  const [password,setPassword]=useState();
  const [submit,setSubmit]=useState(true);
  const [path,setPath]=useState();

  const userNameChange=({target:{value}})=>{
    setUserName(value);
  }

  const userPasswordChange=({target:{value}})=>{
    setPassword(value);
  }

  const submission=(e)=>{
    if(userName==='anvesh' && password==='anvesh123'){
      setPath('/joke');
      setSubmit(true);
    }else if(userName!=='anvesh' && password!=='anvesh123'){
      e.preventDefault();
      setPath('')
      setSubmit(!true);
    }
  }

  return (
    <>
    
      <div className='container'>
      <div>
      {submit ? '' : <Error/>}
    </div>
        <form action={path} onSubmit={submission}>
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
