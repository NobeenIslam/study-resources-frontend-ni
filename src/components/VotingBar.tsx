import { ResourceInfo } from "./Interfaces";

interface VotingBarProps {
  data: ResourceInfo;
}

export function VotingBar(props: VotingBarProps): JSX.Element {
  return (
    <section className="d-flex flex-column align-items-center justify-content-evenly ms-3">
      <p>({props.data.votesInfo.upVotes})</p>
      <button>👍</button>
      <p>({props.data.votesInfo.totalVotes})</p>
      <button>👎</button>
      <p>({props.data.votesInfo.downVotes})</p>
    </section>
  );
}
