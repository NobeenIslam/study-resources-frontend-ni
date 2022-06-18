import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateResourcePage from "./components/CreateResourcePage";
import {
  NoUserInterface,
  ResourceInfo,
  UserInterface,
} from "./components/Interfaces";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import StudyList from "./components/StudyList";
import { baseURL } from "./utils/URL";

function App(): JSX.Element {
  const [currentUser, setCurrentUser] = useState<
    UserInterface | NoUserInterface
  >({ user_id: "not-signed-in" });
  const [studylist, setStudylist] = useState<ResourceInfo[]>([]);
  const [fetchStudyListToggle, setFetchStudyListToggle] =
    useState<boolean>(false);

  useEffect(() => {
    async function fetchStudyList() {
      console.log("Fetching study list");
      const studyListRes = await axios.get(
        `${baseURL}/${currentUser.user_id}/studylist`
      );

      setStudylist(studyListRes.data);
    }
    if (currentUser.user_id !== "not-signed-in") {
      fetchStudyList();
    }
    // eslint-disable-next-line
  }, [currentUser, fetchStudyListToggle]);

  return (
    <>
      <BrowserRouter>
        <NavBar setCurrentUser={setCurrentUser} currentUser={currentUser} />
        <Routes>
          <Route
            path="/"
            element={
              <MainPage
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
                studylist={studylist}
                fetchStudyListToggle={fetchStudyListToggle}
                setFetchStudyListToggle={setFetchStudyListToggle}
              />
            }
          ></Route>
          <Route
            path="/create"
            element={
              <CreateResourcePage
                setCurrentUser={setCurrentUser}
                currentUser={currentUser}
              />
            }
          ></Route>
          <Route
            path="/study-list"
            element={
              <StudyList
                currentUser={currentUser}
                studylist={studylist}
                setStudylist={setStudylist}
                fetchStudyListToggle={fetchStudyListToggle}
                setFetchStudyListToggle={setFetchStudyListToggle}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
