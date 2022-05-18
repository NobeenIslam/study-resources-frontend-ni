import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateResourcePage from "./components/CreateResourcePage";
import { NoUserInterface, UserInterface } from "./components/Interfaces";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import StudyList from "./components/StudyList";

function App(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<
    UserInterface | NoUserInterface
  >({ user_id: "not-signed-in" });
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
          <Route path="/study-list" element={<StudyList />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
