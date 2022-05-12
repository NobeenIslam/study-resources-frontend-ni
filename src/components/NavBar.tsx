import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/baseURL";
import { UserInterface } from "./Interfaces";

interface NavBarProps {
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

  return (
    <section>
      <select>
        {users.map((user) => (
          <option key={user.id} onClick={() => props.setCurrentUser(user)}>
            {user.name}
          </option>
        ))}
      </select>
    </section>
  );
}
