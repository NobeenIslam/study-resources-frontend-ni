import axios from "axios";
import { useEffect, useState } from "react";
import { baseURL } from "../utils/URL";
import { NoUserInterface, ResourceInfo, UserInterface } from "./Interfaces";

interface VotingBarProps {
  data: ResourceInfo;
  currentUser: UserInterface | NoUserInterface;
}

interface ResourceVoteInfoInterface {
  upVotes: number;
  downVotes: number;
  totalVotes: number;
}

export function VotingBar(props: VotingBarProps): JSX.Element {
  const initialVoteInfo = { upVotes: 0, downVotes: 0, totalVotes: 0 };
  const [resourceVoteInfo, setResourceVoteInfo] =
    useState<ResourceVoteInfoInterface>(initialVoteInfo);
  const [fetchVoteInfoToggle, setFetchVoteInfoToggle] =
    useState<boolean>(false);

  useEffect(() => {
    const abortCont = new AbortController();
    async function fetchResourceVotes() {
      try {
        const response = await axios.get(
          `${baseURL}/resources/${props.data.resource_id}/votes`,
          { signal: abortCont.signal }
        );
        setResourceVoteInfo(response.data);
      } catch (error) {
        //as error us unknown, couldn't do property access.
        type errorType = { code: string; message: string; name: string };
        const errorMod = error as errorType;
        if (errorMod.name === "CanceledError") {
          console.log("Clean up occurred and fetch aborted");
        }
      }
    }
    fetchResourceVotes();
    return () => {
      abortCont.abort();
    };
  }, [fetchVoteInfoToggle, props.data.resource_id]);

  async function handleClickVote(isUpvote: boolean) {
    if (props.currentUser.user_id === "not-signed-in") {
      return;
    }
    await axios.post(`${baseURL}/resources/${props.data.resource_id}/votes`, {
      user_id: props.currentUser.user_id,
      is_upvote: isUpvote,
    });
    setFetchVoteInfoToggle(!fetchVoteInfoToggle);
  }

  return (
    <section className="d-flex flex-column align-items-center justify-content-evenly ms-3">
      <p className="text-success">({resourceVoteInfo.upVotes})</p>
      <button
        className={`btn btn-success`}
        aria-pressed="true"
        onClick={() => handleClickVote(true)}
      >
        👍
      </button>
      <p>({resourceVoteInfo.totalVotes})</p>
      <button
        className={`btn btn-danger`}
        onClick={() => handleClickVote(false)}
      >
        👎
      </button>
      <p className="text-danger">({resourceVoteInfo.downVotes})</p>
    </section>
  );
}
