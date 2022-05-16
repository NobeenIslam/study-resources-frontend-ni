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
          Uploaded By: {data.author_name} {}
          <small>({creationDateFormatter(data.creation_date)})</small>
        </em>
        {data.is_faculty && (
          <p>
            <em>Faculty Member</em>
          </p>
        )}
      </h4>
      <h4>
        <em>Created By: {data.origin}</em>
      </h4>
      <p>{data.description}</p>
      {data.recommended_week && <p>Recommended For: {data.recommended_week}</p>}
      {data.evaluation && <p>{data.evaluation}</p>}
      {data.justification && <p>{data.justification}</p>}
      <div>
        <p>({data.votesInfo.upVotes})</p>
        <button>👍</button>
        <p>({data.votesInfo.downVotes})</p>
        <button>👎</button>
        <p>({data.votesInfo.totalVotes})</p>
      </div>
      {/* display each tag in its own button */}
      <ul>
        {data.tags.map((tagInfo) => (
          <li key={tagInfo.tag_id}>{tagInfo.tag_name}</li>
        ))}
      </ul>
      <button onClick={() => window.open(data.url)}>
        Go To {data.content_type}
      </button>
    </section>
  );
}
