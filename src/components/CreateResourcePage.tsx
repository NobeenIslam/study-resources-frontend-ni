import { useState, useEffect } from "react";
import { ResourceForm } from "./Interfaces";
import { useLocation } from "react-router-dom";
import { UserInterface, NoUserInterface } from "./Interfaces";
import axios from "axios";
import { baseURL } from "../utils/URL";
import { TagAssignBlock } from "./TagAssignBlock";

interface CreateResourcePageProps {
  currentUser: UserInterface | NoUserInterface;
  setCurrentUser: (arg0: UserInterface | NoUserInterface) => void;
}

export default function CreateResourcePage(
  props: CreateResourcePageProps
): JSX.Element {
  type StateType = { userData: UserInterface };
  const { userData } = useLocation().state as StateType;

  useEffect(() => props.setCurrentUser(userData));

  const blankForm: ResourceForm = {
    title: "",
    description: "",
    url: "",
    origin: "",
    content_type: "",
    recommended_week: "",
    evaluation: "",
    justification: "",
    tags: [""],
    author_id: userData.user_id,
  };

  const [formData, setFormData] = useState<ResourceForm>(blankForm);

  const [assignedTags, setAssignedTags] = useState<string[]>([]);

  function handleFormChange(
    event:
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) {
    const { name, value } = event.target;
    setFormData((previous) => {
      return { ...previous, [name]: value }; //Updates key value pair of object if they already exist which they should
    });
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    formData["tags"] = assignedTags;
    //console.log("This is form data:", formData);

    if (formData["title"] === "") {
      window.alert(`Please input a Title`);
      return;
    }

    if (formData["description"] === "") {
      window.alert(`Please input a Description`);
      return;
    }

    if (formData["url"] === "") {
      window.alert(`Please input a url`);
      return;
    }

    if (formData["origin"] === "") {
      window.alert(`Please input an Origin`);
      return;
    }

    if (formData["content_type"] === "") {
      window.alert(`Please input a Content Type`);
      return;
    }

    if (formData["recommended_week"] === "") {
      window.alert(`Please input a Recommended Week`);
      return;
    }

    if (formData["evaluation"] === "") {
      window.alert(`Please input an Evaluation`);
      return;
    }

    if (formData["justification"] === "") {
      window.alert(`Please input a Justification`);
      return;
    }

    await axios.post(baseURL + "/resources", formData);
    setFormData(blankForm);
    setAssignedTags([]);
    window.alert("You have posted!");
  }

  return (
    <>
      <h2 className="text-center m-3">Create a Resource</h2>
      <div className="createResourceForm">
        {" "}
        <form onSubmit={handleSubmit}>
          <label htmlFor="Resource-form-title" className="text-muted fw-bolder">
            Title
          </label>
          <input
            className="form--input"
            name="title"
            value={formData.title}
            id="Resource-form-title"
            placeholder="Title"
            type="text"
            onChange={(e) => handleFormChange(e)}
          />
          <br />
          <label
            htmlFor="Resource-form-Description"
            className="text-muted fw-bolder"
          >
            Description
          </label>
          <textarea
            className="form--textArea"
            name="description"
            value={formData.description}
            id="Resource-form-description"
            placeholder="Input Description"
            onChange={(e) => handleFormChange(e)}
          />
          <br />
          <br />
          <label htmlFor="Resource-form-url" className="text-muted fw-bolder">
            URL
          </label>
          <textarea
            className="form--input"
            name="url"
            value={formData.url}
            id="Resource-form-url"
            placeholder="Paste URL Here"
            onChange={(e) => handleFormChange(e)}
          />
          <br />
          <label
            htmlFor="Resource-form-origin"
            className="text-muted fw-bolder"
          >
            Origin
          </label>
          <textarea
            className="form--input"
            name="origin"
            value={formData.origin}
            id="Resource-form-origin"
            placeholder="Input Origin Here"
            onChange={(e) => handleFormChange(e)}
          />
          <br />
          <label
            htmlFor="Resource-form-content-type"
            className="text-muted fw-bolder"
          >
            Content Type
          </label>
          <textarea
            className="form--input"
            name="content_type"
            value={formData.content_type}
            id="Resource-form-content-type"
            placeholder="Input content-type Here"
            onChange={(e) => handleFormChange(e)}
          />
          <br />
          <label
            htmlFor="Resource-form-recommended-week"
            className="text-muted fw-bolder"
          >
            Recommended Week
          </label>
          <textarea
            className="form--input"
            name="recommended_week"
            value={formData.recommended_week}
            id="Resource-form-recommended-week"
            placeholder="Input recommended-week Here"
            onChange={(e) => handleFormChange(e)}
          />
          <br />
          <label
            htmlFor="Resource-form-evaluation"
            className="text-muted fw-bolder"
          >
            Evaluation
          </label>
          <select
            className="form--dropdown"
            name="evaluation"
            value={formData.evaluation}
            id="Resource-form-evaluation"
            placeholder="Input evaluation Here"
            onChange={(e) => handleFormChange(e)}
          >
            <option>Select from dropdown</option>{" "}
            <option>I recommend this resource after having used it</option>
            <option>
              I do not recommend this resource after having used it
            </option>
            <option>I haven't used this resource but it looks promising</option>
          </select>
          <br />
          <label
            htmlFor="Resource-form-justification"
            className="text-muted fw-bolder"
          >
            Justification
          </label>
          <textarea
            className="form--textArea"
            name="justification"
            value={formData.justification}
            id="Resource-form-justification"
            placeholder="Input justification Here"
            onChange={(e) => handleFormChange(e)}
          />
          <br />
          <TagAssignBlock
            assignedTags={assignedTags}
            setAssignedTags={setAssignedTags}
          />
          <button className="btn btn-success w-100">Submit</button>
        </form>
      </div>
    </>
  );
}

/*
Create a cloud of tags that a user can click
onClick of a tag add that to an array of tags
this also adds the tag button to a tag assignment area

Create separate input for create a tag
On submit add to the array of tags and th tags assigment area
Need to specify specific input for user when creating the tag.
Can't accept weird inputs




*/
