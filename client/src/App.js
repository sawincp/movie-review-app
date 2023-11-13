import { useState, useEffect, createContext } from "react";
import { Routes, Route} from "react-router-dom"

import Login from "./Login";
import Profile from "./Profile";

export const CurrentUserContext = createContext(null)

function App() {
  const [currentUser, setCurrentUser]= useState(null)

  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((currentUser) => setCurrentUser(currentUser));
      }
    });
  }, []);



  return (
    <CurrentUserContext.Provider value={{currentUser, setCurrentUser}}>
      {currentUser ? (
        <Routes>
          <Route exact path="/" element={<Profile />} />
        </Routes>
      ) : (
        <Login />
      )}
    </CurrentUserContext.Provider>
  );
}

export default App;
