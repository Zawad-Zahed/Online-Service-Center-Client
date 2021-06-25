import firebase from "firebase/app";
import "firebase/auth";
import { useContext, useState } from "react";

import { useHistory, useLocation } from "react-router";
import { UserContext } from "../../App";

import firebaseConfig from "./firebase.config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

function Login() {
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const history = useHistory();
  const location = useLocation();

  const { from } = location.state || { from: { pathname: "/" } };

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    isLoggedIn: false,
    name: "",
    email: "",
    password: "",
    photo: "",
    error: "",
    success: false,
  });

  const gProvider = new firebase.auth.GoogleAuthProvider();
  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(gProvider)
      .then((res) => {
        // console.log(res.user);
        const { displayName, email, photoURL } = res.user;
        const signedInUser = {
          isLoggedIn: true,
          name: displayName,
          email: email,
          photo: photoURL,
        };
        setUser(signedInUser);
        setLoggedInUser(signedInUser);
        history.replace(from);

        //  console.log(displayName,email,photoURL);
      })
      .catch((err) => {
        console.log(err.message);
        console.log(err);
      });
    //  console.log(user);
  };

  //auth token
  const authToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
        history.replace(from);
      })
      .catch(function (error) {});
  };

  return (
    <div className="container">
      <div className="signInStyle m-5 mt-5 rounded p-5 ">
        <div class="row g-3">
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="First name"
              aria-label="First name"
            />
          </div>
          <div class="col-md-6">
            <input
              type="text"
              class="form-control"
              placeholder="Last name"
              aria-label="Last name"
            />
          </div>

          <button
            type="button"
            className="btn btn-primary d-flex justify-content-center "
            onClick={handleSignIn}
          >
            <FontAwesomeIcon icon={faGoogle} />
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
