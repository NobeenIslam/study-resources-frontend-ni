import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/baseURL";
import { matchesSearchText } from "../utils/matchesSearchText";
import { ResourceInfo } from "./Interfaces";
import Resources from "./Resources";

export default function MainPage(): JSX.Element {
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
      <h1>Resources for you</h1>
      <input
        placeholder="Search Resources..."
        value={resourceSearch}
        onChange={(e) => setResourceSearch(e.target.value)}
      ></input>
      <button onClick={() => setResourceSearch("")}>Clear Search</button>
      <Resources resources={filteredForSearch} />
    </main>
  );
}
