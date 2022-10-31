import "./header.css";
import UserAvatarImage from '../../assets/images/user-avatar.png';
import { app } from '../../services/firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

export const Header = () => {
  const [loggedUser, setLoggedUser] = useState();
  const auth = getAuth(app);
   
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user) {
        const { uid, displayName, photoURL } = user;
        setLoggedUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
      } else {
        setLoggedUser({
          avatar: UserAvatarImage
        });
      }
      console.log(loggedUser);
    });
  }, []);

  const handleClickButtonLogin = async () => {
    const provider = new GoogleAuthProvider();

    const auth = getAuth(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const { uid, displayName, photoURL } = result.user;
        setLoggedUser({
          id: uid,
          name: displayName,
          avatar: photoURL
        });
        // ...
      }).catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  }; 

  return (
    <header>     
      <div className="dropdown float-left">
        <div className="menu-button profile dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
          <img src={loggedUser == undefined ? UserAvatarImage : loggedUser.avatar} alt="UserAvatarImage" width="25" className="user-avatar" />
        </div>

        <div class="dropdown-menu">
          <a class="dropdown-item" onClick={() => auth.signOut()}>Sair</a>
        </div>
      </div>      
      <h1 className="float-left">Weather Safe</h1>
      <main>
        <button className="btn-login btn btn-primary btn-sm" onClick={handleClickButtonLogin}>Login google</button>
      </main>
    </header>
  );
}
