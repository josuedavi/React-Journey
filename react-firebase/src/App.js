import './App.css';
import React, {useState, useEffect} from 'react';
import fire from './fire';
import Login from './Login';
import Hero from './Hero';

const App = () => {


    const [user, setUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasAccount, setHasAccount] = useState(false);

   const clearInputs = () => {
     setEmail('');
     setPassword('');

   }

   const clearErrors = () => {
     setEmailError('');
     setPasswordError('');
   }
    const handleLogin = () => {
      clearErrors();
      fire
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch((err) => {
          switch(err.code){
            case "auth/invalid-email":
            case "auth/user-disabled":
            case "auth/user-not-found":
            setEmailError(err.message);
            break;
            case "auth/wrong.password":
            setPasswordError(err.message);
            break;


          }
        });
    };

    const handleSignUp = () => {
      clearErrors();
      fire
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .catch(err => {
          switch(err.code){
            case "auth/email-already-in-use":
            case "auth/invalid-email":
         
            setEmailError(err.message);
            break;
            case "auth/weak-password":
            setPasswordError(err.message);
            break;


          }
        });
    }

    const handleLogout = () => {
      fire.auth().signOut();
    }

    const authListener = () => {
      fire.auth().onAuthStateChanged(user => {
        if(user) {
          clearInputs();
          setUser(user);
        } else {
          setUser('');
        }
      })
    }

    useEffect(() => {
      authListener();
    }, []);

    return (
      <div>
   
{user  ? (

  <Hero 
        user={user}
        handleLogout={handleLogout}
        />
   
) : (     
<div className="galaxy-login">
<div class='stars'></div>
<div class='twinkling'></div>
<div class='clouds'>   </div>
 <Login 
          email={email} 
          setEmail={setEmail}
          password={password} 
          setPassword={setPassword} 
          handleLogin={handleLogin} 
          handleSignUp={handleSignUp}
          hasAccount={hasAccount}
          setHasAccount={setHasAccount}
          emailError={emailError}
          passwordError={passwordError}
         />
        </div>
)}
       
      </div>
    );
  };




export default App;
