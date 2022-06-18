import axios from "axios";
import { baseURL } from "../utils/URL";
import { NoUserInterface, ResourceInfo, UserInterface } from "./Interfaces";

interface ResourceBlockButtonsProps {
  data: ResourceInfo;
  isInStudyList: boolean;
  currentUser: UserInterface | NoUserInterface;
}

export function ResourceBlockButtons(
  props: ResourceBlockButtonsProps
): JSX.Element {
  async function handleAddStudyList(resource_id: number) {
    try {
      await axios.post(
        `${baseURL}/users/${props.currentUser.user_id}/studylist`,
        {
          resource_id: resource_id,
        }
      );
    } catch (error) {
      window.alert(error);
    }
  }

  async function handleRemoveFromStudyList(resource_id: number) {
    try {
      await axios.delete(
        `${baseURL}/users/${props.currentUser.user_id}/studylist/${resource_id}`
      );
    } catch (error) {
      window.alert(error);
    }
  }

  return (
    <section className="d-flex flex-column mx-auto mb-0 w-75">
      <button
        className="btn btn-info"
        onClick={() => window.open(props.data.url)}
      >
        Go To {props.data.content_type}
      </button>
      {props.isInStudyList && props.currentUser.user_id !== "not-signed-in" ? (
        <button
          className="btn btn-danger"
          onClick={() => handleRemoveFromStudyList(props.data.resource_id)}
        >
          Remove from Study List
        </button>
      ) : (
        <button
          className="btn btn-primary"
          onClick={() => handleAddStudyList(props.data.resource_id)}
        >
          Add to Study List
        </button>
      )}
    </section>
  );
}
