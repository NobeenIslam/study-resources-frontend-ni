import { useState } from "react";
import { tagArrayToObject } from "../utils/tagArrayToObject";
import { TagCloudCreateResource } from "./TagCloudCreateResource";

interface TagAssignBlockProps {
  assignedTags: string[];
  setAssignedTags: (arg0: string[]) => void;
}

export function TagAssignBlock({
  assignedTags,
  setAssignedTags,
}: TagAssignBlockProps): JSX.Element {
  const [newTag, setNewTag] = useState<string>("");

  function handleCreateNewTag(newTag: string): void {
    setAssignedTags([...assignedTags, newTag]);
    setNewTag("");
  }

  const allAssignedTagObjects = tagArrayToObject(assignedTags);
  const allAssignedTagButtons = allAssignedTagObjects.map((tagObj) => (
    <button
      key={tagObj.id}
      className="btn btn-warning"
      onClick={() => {
        //Remove that tag when it is clicked again
        const assignedTagsCopy = [...assignedTags];
        assignedTagsCopy.splice(tagObj.id, 1);
        console.log(assignedTagsCopy);
        setAssignedTags(assignedTagsCopy);
      }}
    >
      {tagObj.tagName}
    </button>
  ));

  return (
    <section>
      <h6 className="text-muted fw-bolder">Add a new tag:</h6>
      <div className="d-flex flex-row justify-content-start mb-4">
        {" "}
        <input
          className="form--input me-2"
          placeholder="Input one tag"
          value={newTag}
          onChange={(e) => setNewTag(e.target.value.trim())}
        ></input>
        <button
          className="btn btn-info"
          onClick={() => handleCreateNewTag(newTag)}
        >
          Add
        </button>
      </div>

      <h6 className="text-muted fw-bolder">Click tag to assign:</h6>
      <TagCloudCreateResource
        setAssignedTags={setAssignedTags}
        assignedTags={assignedTags}
      />
      {assignedTags.length > 0 && (
        <div>
          {" "}
          <h6 className="text-muted fw-bolder">Assigned Tags:</h6>
          <section className="tags--container mb-4">
            {allAssignedTagButtons}
          </section>
        </div>
      )}
    </section>
  );
}
