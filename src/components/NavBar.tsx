import axios from "axios";
import { UserInfo } from "os";
import { useEffect, useState } from "react";
import { baseURL, frontendURL } from "../utils/URL";
import { NoUserInterface, UserInterface } from "./Interfaces";

interface NavBarProps {
  currentUser: UserInterface | NoUserInterface;
  setCurrentUser: (arg0: UserInterface | NoUserInterface) => void;
}
export default function NavBar(props: NavBarProps): JSX.Element {
  const [users, setUsers] = useState<UserInterface[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      const response = await axios.get(`${baseURL}/users`);
      setUsers(response.data);
    }
    fetchUsers();
  }, []);

  if (props.currentUser.user_id === "not-signed-in") {
    return (
      <section>
        <select
          value={props.currentUser.user_id}
          onChange={(e) => {
            const selectedId = parseInt(e.target.value)
            const selectedUser: UserInterface[] = users.filter((user) => user.user_id === selectedId)
            props.setCurrentUser(selectedUser[0])
          }}
        >
          {users.map((user) => (
            <option key={user.user_id}>{user.name}</option>
          ))}
        </select>
      </section>
    );
  } else {
    return (
      <section>
        <button onClick={() => window.open(`${frontendURL}/create`)}>
          Create Resource
        </button>
        <button onClick={() => window.open(`${frontendURL}/study-list`)}>
          Study List
        </button>
        <button
          onClick={() => props.setCurrentUser({ user_id: "not-signed-in" })}
        >
          Sign-out
        </button>
      </section>
    );
  }
}
