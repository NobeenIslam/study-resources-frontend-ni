import { creationDateFormatter } from "../utils/creationDateFormatter";
import { ResourceInfo } from "./Interfaces";

interface SingleResourceBlockProps {
  data: ResourceInfo;
}
export default function SingleResourceBlock({
  data,
}: SingleResourceBlockProps): JSX.Element {
  return (
    <section>
      <h2>{data.title}</h2>
      <h4>
        <em>
          Uploaded By: {data.author_id}{" "}
          <small>({creationDateFormatter(data.creation_date)})</small>
        </em>
      </h4>
      <h4>
        <em>Created By: {data.origin}</em>
      </h4>
      <p>{data.description}</p>
      {data.recommended_week && <p>Recommended For: {data.recommended_week}</p>}
      {data.evaluation && <p>{data.evaluation}</p>}
      {data.justification && <p>{data.justification}</p>}
      {/* Voting information */}
      {/* Tag list */}
      <button onClick={() => window.open(data.url)}>
        Go To {data.content_type}
      </button>
    </section>
  );
}
