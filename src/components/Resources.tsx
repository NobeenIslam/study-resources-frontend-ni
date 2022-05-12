import { Controls } from "./Controls";
import { ResourceInfo } from "./Interfaces";
import SingleResourceBlock from "./SingleResourceBlock";

interface ResourcesProps {
  resources: ResourceInfo[];
  resourceSearch: string;
  setResourceSearch: (arg0: string) => void;
}

export default function Resources(props: ResourcesProps): JSX.Element {
  /*
    Fetch data resources data and put it into array
    Define interface
    Map array into SingleRsrouce component
    */

  const resourcesBlocks: JSX.Element[] = props.resources
    .slice(0, 5)
    .map((resource) => (
      <SingleResourceBlock key={resource.id} data={resource} />
    ));

  return (
    <main>
      <h1>Resources for you</h1>
      <Controls
        resourceSearch={props.resourceSearch}
        setResourceSearch={props.setResourceSearch}
      />
      <section>{resourcesBlocks}</section>
    </main>
  );
}
