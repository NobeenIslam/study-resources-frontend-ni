import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/URL";
import { tagInterface } from "./Interfaces";

interface TagCloudCreateResourceProps {
  setAssignedTags: (arg0: string[]) => void;
  assignedTags: string[];
}

export function TagCloudCreateResource(
  props: TagCloudCreateResourceProps
): JSX.Element {
  const [tags, setTags] = useState<tagInterface[]>([]);

  useEffect(() => {
    async function fetchTags() {
      const tagRes = await axios.get(baseURL + "/tags");
      setTags(tagRes.data);
    }
    fetchTags();
  }, []);

  async function handleClick(name: string) {
    props.setAssignedTags([...props.assignedTags, name]);
  }

  const tagCloud: JSX.Element[] = tags.map((tag) => {
    return (
      <div
        onClick={() => {
          handleClick(tag.name);
        }}
        className={"tagElement0"}
        key={tag.tag_id}
      >
        {tag.name}
      </div>
    );
  });

  return (
    <>
      <h3>Click tag to assign</h3>
      <section className="tagCloudContainer">{tagCloud}</section>
    </>
  );
}
