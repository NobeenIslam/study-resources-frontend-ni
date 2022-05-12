import { ResourceInfo } from "./Interfaces";
import SingleResourceBlock from "./SingleResourceBlock";

interface ResourcesProps{
  resources: ResourceInfo[]
}

export default function Resources({resources}: ResourcesProps): JSX.Element {
  /*
    Fetch data resources data and put it into array
    Define interface
    Map array into SingleRsrouce component
    */



  const resourcesBlocks: JSX.Element[] = resources
    .slice(0, 5)
    .map((resource) => (
      <SingleResourceBlock key={resource.id} data={resource} />
    ));

  return <main>{resourcesBlocks}</main>;
}
