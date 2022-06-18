import { NoUserInterface, ResourceInfo, UserInterface } from "./Interfaces";
import SingleResourceBlock from "./SingleResourceBlock";

interface ResourcesProps {
  resources: ResourceInfo[];
  currentUser: UserInterface | NoUserInterface;
  studylist: ResourceInfo[];
  fetchStudyListToggle: boolean;
  setFetchStudyListToggle: (arg0: boolean) => void;
}

export default function Resources(props: ResourcesProps): JSX.Element {
  //filter resources according to study list entries

  //console.log("Resources", props.resources)
  //console.log("StudyList", props.studylist)

  function isInStudyList(
    resource: ResourceInfo,
    studyList: ResourceInfo[]
  ): boolean {
    if (
      studyList.find(
        (resourceInStudyList) =>
          resourceInStudyList.resource_id === resource.resource_id
      )
    ) {
      return true;
    }
    return false;
  }

  const resourcesBlocks: JSX.Element[] = props.resources.map((resource) => (
    <SingleResourceBlock
      key={resource.resource_id}
      data={resource}
      isInStudyList={isInStudyList(resource, props.studylist)}
      currentUser={props.currentUser}
      fetchStudyListToggle={props.fetchStudyListToggle}
      setFetchStudyListToggle={props.setFetchStudyListToggle}
    />
  ));

  return (
    <main>
      <section className="resourcesBlocksContainer">{resourcesBlocks}</section>
    </main>
  );
}
