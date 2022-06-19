import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/URL";
import { NoUserInterface, ResourceInfo, UserInterface } from "./Interfaces";

interface VotingBarProps {
  data: ResourceInfo;
  currentUser: UserInterface | NoUserInterface;
}

interface ResourceVoteInfo {
  upVotes: number;
  downVotes: number;
  totalVotes: number;
}

export function VotingBar(props: VotingBarProps): JSX.Element {
  const initialVoteInfo = { upVotes: 0, downVotes: 0, totalVotes: 0 };
  const [votes, setVotes] = useState<ResourceVoteInfo>(initialVoteInfo);
  const [fetchVotesToggle, setVotesToggle] = useState<boolean>(false);

  useEffect(() => {
    async function fetchResourceVotes() {
      const response = await axios.get(
        `${baseURL}/resources/${props.data.resource_id}/votes`
      );
      console.log(response.data);
      setVotes(response.data);
    }
    fetchResourceVotes();
  }, [fetchVotesToggle]);

  async function handleClickVote(isUpvote: boolean) {
    if (props.currentUser.user_id === "not-signed-in") {
      return;
    }
    axios.post(`${baseURL}/resources/${props.data.resource_id}/votes`, {
      user_id: props.currentUser.user_id,
      is_upvote: isUpvote,
    });
  }

  return (
    <section className="d-flex flex-column align-items-center justify-content-evenly ms-3">
      <p>({props.data.votesInfo.upVotes})</p>
      <button onClick={() => handleClickVote(true)}>👍</button>
      <p>({props.data.votesInfo.totalVotes})</p>
      <button onClick={() => handleClickVote(true)}>👎</button>
      <p>({props.data.votesInfo.downVotes})</p>
    </section>
  );
}
