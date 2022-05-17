import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/URL";
import { matchesSearchText } from "../utils/matchesSearchText";
import { ResourceInfo, UserInterface } from "./Interfaces";
import Resources from "./Resources";

interface MainPageProps {
  setCurrentUser: (arg0: UserInterface) => void;
}

export default function MainPage(props: MainPageProps): JSX.Element {
  const [resourceSearch, setResourceSearch] = useState<string>("");
  const [resources, setResources] = useState<ResourceInfo[]>([]);
  // eslint-disable-next-line
  const [triggerRerender, setTriggerRerender] = useState<boolean>(true);

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
      <Resources
        resources={filteredForSearch}
        resourceSearch={resourceSearch}
        setResourceSearch={setResourceSearch}
      />
    </main>
  );
}
