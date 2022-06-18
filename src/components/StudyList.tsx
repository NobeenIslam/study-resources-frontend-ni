import { NoUserInterface, ResourceInfo, UserInterface } from "./Interfaces";
import SingleResourceBlock from "./SingleResourceBlock";

interface StudyListProps {
  currentUser: UserInterface | NoUserInterface;
  studylist: ResourceInfo[];
  setStudylist: (arg0: ResourceInfo[]) => void;
  fetchStudyListToggle: boolean;
  setFetchStudyListToggle: (arg0: boolean) => void;
}

export default function StudyList(props: StudyListProps): JSX.Element {
  console.log(props.studylist);
  const mapOfResourcesInStudyList = props.studylist.map((item) => (
    <SingleResourceBlock
      key={item.resource_id}
      data={item}
      isInStudyList={true}
      currentUser={props.currentUser}
      fetchStudyListToggle={props.fetchStudyListToggle}
      setFetchStudyListToggle={props.setFetchStudyListToggle}
    />
  ));

  return (
    <>
      <h1 className="m-3 text-center">Your Study List</h1>
      <div className="resourcesBlocksContainer">
        {mapOfResourcesInStudyList}
      </div>
    </>
  );
}
