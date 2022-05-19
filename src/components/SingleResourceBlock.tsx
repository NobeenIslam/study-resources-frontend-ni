import { creationDateFormatter } from "../utils/creationDateFormatter";
import { ResourceInfo } from "./Interfaces";

interface SingleResourceBlockProps {
  data: ResourceInfo;
}

export default function SingleResourceBlock({
  data,
}: SingleResourceBlockProps): JSX.Element {
  return (
    <section className="singleResourceContainer">
      <h2 className="resourceTitle">{data.title}</h2>
      <h4 className="topDataBox">
        <em className="uploadInfo">
          Uploaded By: {data.name} {data.is_faculty && "⭐"}{" "}
          <small>({creationDateFormatter(data.creation_date)})</small>
        </em>
        <p></p>
        <em className="uploadInfo">Created By: {data.origin}</em>
      </h4>
      <p>{data.description}</p>
      {data.recommended_week && <p>Recommended For: {data.recommended_week}</p>}
      {data.evaluation && <p>{data.evaluation}</p>}
      {data.justification && <p>{data.justification}</p>}
      <div className="votesContainer">
        <p>({data.votesInfo.upVotes})</p>
        <button>👍</button>
        <p>({data.votesInfo.totalVotes})</p>
        <button>👎</button>
        <p>({data.votesInfo.downVotes})</p>
      </div>
      {/* display each tag in its own button */}
      <section className="tagCloudContainer">
        {data.tags.map((tagInfo) => (
          <div className="tagElement0" key={tagInfo.tag_id}>
            {tagInfo.tag_name}
          </div>
        ))}
      </section>
      <button onClick={() => window.open(data.url)}>
        Go To {data.content_type}
      </button>
    </section>
  );
}
