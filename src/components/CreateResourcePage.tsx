import { useState, useEffect } from "react";
import { resourceForm } from "./Interfaces";
import { useLocation } from "react-router-dom";
import { UserInterface, NoUserInterface } from "./Interfaces";
import { TagCloudCreateResource } from "./TagCloudCreateResource";

interface CreateResourcePageProps {
  currentUser: UserInterface | NoUserInterface;
  setCurrentUser: (arg0: UserInterface | NoUserInterface) => void;
}

export default function CreateResourcePage(
  props: CreateResourcePageProps
): JSX.Element {
  const [formData, setFormData] = useState<resourceForm>({
    title: "",
    description: "",
    url: "",
    origin: "",
    //is_faculty: "";
    content_type: "",
    recommended_week: "",
    evaluation: "",
    justification: "",
    tags: "",
  });

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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("This is form data:", formData);
    //Take what's currently in the tags property and append into tagsArray
    //map tagsArray into buttons of tagAssignment area
    //Then we'll replace tags value with the tagArray
    //Then post
  };
  // async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   event.preventDefault();
  //   await axios.post(baseUrl + "/pastes", formData);

  //   setFormData({ title: "", text: "" });
  //   props.changeToggle(!props.toggle);
  // }

  type StateType = { userData: UserInterface };
  const { userData } = useLocation().state as StateType;

  useEffect(() => props.setCurrentUser(userData));

  return (
    <>
      <p>Hello {userData.name}</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="Resource-form-title">Title</label>
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
        <label htmlFor="Resource-form-Description">Description</label>
        <textarea
          className="form--descriptionArea"
          name="description"
          value={formData.description}
          id="Resource-form-description"
          placeholder="Input Description"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <br />
        <label htmlFor="Resource-form-url">URL</label>
        <textarea
          className="form--urlarea"
          name="url"
          value={formData.url}
          id="Resource-form-url"
          placeholder="Paste URL Here"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <label htmlFor="Resource-form-origin">Origin</label>
        <textarea
          className="form--originarea"
          name="origin"
          value={formData.origin}
          id="Resource-form-origin"
          placeholder="Input Origin Here"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <label htmlFor="Resource-form-content-type">content Type</label>
        <textarea
          className="form--content-type"
          name="content_type"
          value={formData.content_type}
          id="Resource-form-content-type"
          placeholder="Input content-type Here"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <label htmlFor="Resource-form-recommended-week">Recommended Week</label>
        <textarea
          className="form--recommended-week"
          name="recommended_week"
          value={formData.recommended_week}
          id="Resource-form-recommended-week"
          placeholder="Input recommended-week Here"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <label htmlFor="Resource-form-evaluation">Evaluation</label>
        <select
          className="form--evaluation"
          name="evaluation"
          defaultValue={"No evaluation selected"}
          id="Resource-form-evaluation"
          placeholder="Input evaluation Here"
          onChange={(e) => handleFormChange(e)}
        >
          <option>Select from dropdown</option>{" "}
          <option>I recommend this resource after having used it</option>
          <option>I do not recommend this resource after having used it</option>
          <option>I haven't used this resource but it looks promising</option>
        </select>
        <br />
        <label htmlFor="Resource-form-justification">Justification</label>
        <textarea
          className="form--justification"
          name="justification"
          value={formData.justification}
          id="Resource-form-justification"
          placeholder="Input justification Here"
          onChange={(e) => handleFormChange(e)}
        />
        <br />
        <button className="button">Submit</button>
      </form>
      <TagCloudCreateResource
        setAssignedTags={setAssignedTags}
        assignedTags={assignedTags}
      />
      <section>{assignedTags}</section>
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
