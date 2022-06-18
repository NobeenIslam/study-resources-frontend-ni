import { ResourceInfo } from "./Interfaces";

interface ResourceBlockTestProps {
  data: ResourceInfo;
}
export function ResourceBlockText(props: ResourceBlockTestProps): JSX.Element {
  return (
    <>
      <h2 className="card-title">{props.data.title}</h2>
      <h6 className="card-subtitle text-muted">Description:</h6>
      <p className="card-text">{props.data.description}</p>
      <h6 className="card-subtitle text-muted">Recommended For:</h6>
      {props.data.recommended_week && <p>{props.data.recommended_week}</p>}
      <h6 className="card-subtitle text-muted">Usage:</h6>
      {props.data.evaluation && <p>{props.data.evaluation}</p>}
      <h6 className="card-subtitle text-muted">Justification:</h6>
      {props.data.justification && <p>{props.data.justification}</p>}{" "}
    </>
  );
}
