import { app } from "../firebaseConfig";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { ProfileImage } from "./ProfileImage";
import { useUser } from "../providers/UserProvider";

function Home() {
  const [errorMessage, setErrorMessage] = useState("");
  const { user, setUser } = useUser();
  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth(app);

    signInWithPopup(auth, provider)
      .then((userCredentials) => {
        setUser({
          name: userCredentials.user.displayName,
          profileImage: userCredentials.user.profileImage,
        });
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };

  useEffect(() => {
    console.log(`welcome user ${user.name}`);
  }, [user]);
  return (
    <>
      <header>
        <ProfileImage />
      </header>
      <h1>Página home</h1>
      <p>Bienvenidos a mi página web de ventas</p>
      <button onClick={handleGoogleSignIn}>Sign in with google</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
    </>
  );
}

export default Home;
