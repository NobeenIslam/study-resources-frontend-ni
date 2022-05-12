import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/baseURL";
import { matchesSearchText } from "../utils/matchesSearchText";
import { ResourceInfo, UserInterface } from "./Interfaces";
import NavBar from "./NavBar";
import Resources from "./Resources";

export default function MainPage(): JSX.Element {
  const [resourceSearch, setResourceSearch] = useState<string>("");
  const [resources, setResources] = useState<ResourceInfo[]>([]);
  // eslint-disable-next-line
  const [triggerRerender, setTriggerRerender] = useState<boolean>(true);
  // eslint-disable-next-line
  const [currentUser, setCurrentUser] = useState<UserInterface>();

  useEffect(() => {
    const fetchResources = async () => {
      const response = await axios.get(`${baseURL}/resources`);
      setResources(response.data);
    };
    fetchResources();
  }, [triggerRerender]);

  const filteredForSearch = resources.filter((resource) =>
    matchesSearchText(resource, resourceSearch)
  );

  return (
    <main>
      <NavBar setCurrentUser={setCurrentUser} />
      <Resources
        resources={filteredForSearch}
        resourceSearch={resourceSearch}
        setResourceSearch={setResourceSearch}
      />
    </main>
  );
}
