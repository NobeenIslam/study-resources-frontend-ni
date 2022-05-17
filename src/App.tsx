import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateResourcePage from "./components/CreateResourcePage";
import { UserInterface } from "./components/Interfaces";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";

function App(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<UserInterface | undefined>();
  return (
    <>
      <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<MainPage setCurrentUser={setCurrentUser} />}
          ></Route>
          <Route path="/create" element={<CreateResourcePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
