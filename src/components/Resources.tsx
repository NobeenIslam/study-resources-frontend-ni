import { NoUserInterface, ResourceInfo, UserInterface } from "./Interfaces";
import SingleResourceBlock from "./SingleResourceBlock";

interface ResourcesProps {
  resources: ResourceInfo[];
  currentUser: UserInterface | NoUserInterface;
  studylist: ResourceInfo[];
}

export default function Resources(props: ResourcesProps): JSX.Element {
  //filter resources according to study list entries

  const filteredResourcesSL = props.resources.filter(
    (resource) => !props.studylist.includes(resource)
  );

  const resourcesBlocks: JSX.Element[] = filteredResourcesSL.map((resource) => (
    <SingleResourceBlock
      key={resource.resource_id}
      data={resource}
      isInStudyList={false}
      currentUser={props.currentUser}
    />
  ));

  return (
    <main>
      <section className="resourceListContainer">{resourcesBlocks}</section>
    </main>
  );
}
