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

  function handleClick(name: string) {
    props.setAssignedTags([...props.assignedTags, name]);
  }

  function isTagNotAssigned(tag: tagInterface): boolean {
    return !props.assignedTags.includes(tag.name);
  }

  const filteredTags: tagInterface[] = tags.filter((tag: tagInterface) => {
    return isTagNotAssigned(tag);
  });

  const tagCloud: JSX.Element[] = filteredTags.map((tag) => {
    return (
      <div
        onClick={() => {
          handleClick(tag.name);
        }}
        className="btn btn-primary"
        key={tag.tag_id}
      >
        {tag.name}
      </div>
    );
  });

  return (
    <>
      <section className="tags--container mb-4">{tagCloud}</section>
    </>
  );
}
