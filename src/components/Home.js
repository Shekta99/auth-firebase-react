import { app } from "../firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useState } from "react";

function Home() {
  const [errorMessage, setErrorMessage] = useState("");
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        console.log(`welcome ${userCredentials.user.displayName}`);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  return (
    <>
      <h1>Página home</h1>
      <p>Bienvenidos a mi página web de ventas</p>
      <button onClick={handleGoogleSignIn}>Sign in with google</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </>
  );
}

export default Home;
