import React,{useState,useEffect,useRef} from 'react'
import '../styles/App.css';
const App = () => {

//code here 
  const emailVal = useRef("")
  const passValue = useRef("")

const [email, setEmail] = useState("");
const [pass, setPass] = useState("");

useEffect(()=>{
  emailVal.current = email;
  passValue.current = pass;
})


  return (
    <div id="main">
      Email
      <input id="inputEmail" type="text" value={email}  onChange={(e)=> setEmail(e.target.value)}/><br required/>
      Password
      <input id="inputPassword" type="text" value={pass}  onChange={(e)=> setPass(e.target.value)}/><br required/>
      <button id="submitButton" onClick={()=> {}}>Submit</button><br/>
      <p id="emailText">Your Email : {emailVal.current}</p>
      <p id ="passwordText">Your Password : {passValue.current}</p>
      
    </div>
  )
}


export default App;