import { useState } from "react";
import Resources from "./Resources";

export default function MainPage(): JSX.Element {
  const [resourceSearch, setResourceSearch] = useState<string>("");
  return (
    <main>
      <h1>Resources for you</h1>
      <input
        placeholder="Search Resources..."
        value={resourceSearch}
        onChange={(e) => setResourceSearch(e.target.value)}
      ></input>
      <Resources />
    </main>
  );
}
