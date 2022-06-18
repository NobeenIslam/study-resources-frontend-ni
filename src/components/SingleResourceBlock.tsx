import { creationDateFormatter } from "../utils/creationDateFormatter";
import { NoUserInterface, ResourceInfo, UserInterface } from "./Interfaces";
import { ResourceBlockButtons } from "./ResourceBlockButtons";
import { ResourceBlockText } from "./ResourceBlockText";
import { VotingBar } from "./VotingBar";

interface SingleResourceBlockProps {
  data: ResourceInfo;
  isInStudyList: boolean;
  currentUser: UserInterface | NoUserInterface;
  fetchStudyListToggle: boolean;
  setFetchStudyListToggle: (arg0: boolean) => void;
}

export default function SingleResourceBlock(
  props: SingleResourceBlockProps
): JSX.Element {
  const resourcesTags = props.data.tags.map((tagInfo) => (
    <div className="btn btn-warning m-2" key={tagInfo.tag_id}>
      {tagInfo.tag_name}
    </div>
  ));

  return (
    <section className="card border-dark mb-3 resourceBlockWidth">
      <div className="card-header">Created By: {props.data.origin}</div>
      <section className="card-body d-flex flex-row ">
        <div className="d-flex flex-column me-auto flex-grow-1">
          <ResourceBlockText data={props.data} />
          <div className="d-flex flex-column mt-auto ">
            <section className="tags--container">{resourcesTags}</section>
            <ResourceBlockButtons
              data={props.data}
              isInStudyList={props.isInStudyList}
              currentUser={props.currentUser}
              fetchStudyListToggle={props.fetchStudyListToggle}
              setFetchStudyListToggle={props.setFetchStudyListToggle}
            />
          </div>
        </div>
        <VotingBar data={props.data} />
      </section>
      <div className="card-footer">
        {" "}
        Posted on: {creationDateFormatter(props.data.creation_date)} by{" "}
        {props.data.name} {props.data.is_faculty && "⭐"}{" "}
      </div>
    </section>
  );
}
