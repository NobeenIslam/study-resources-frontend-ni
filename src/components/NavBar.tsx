import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/baseURL";
import { UserInterface } from "./Interfaces";

interface NavBarProps {
  currentUser: UserInterface | undefined;
  setCurrentUser: (arg0: UserInterface) => void;
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

  if (!props.currentUser) {
    return (
      <section>
        <select>
          {users.map((user) => (
            <option
              key={user.user_id}
              onClick={() => props.setCurrentUser(user)}
            >
              {user.name}
            </option>
          ))}
        </select>
      </section>
    );
  } else {
    return (
      <section>
        <button>Create Resource</button>
        <button>Study List</button>
        <button>Sign-out</button>
      </section>
    );
  }
}
