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
  const [whichButtonActiveClass, setWhichButtonActiveClass] = useState<
    string[]
  >(["", ""]);

  console.log(whichButtonActiveClass, props.data.title);

  useEffect(() => {
    async function fetchResourceVotes() {
      const response = await axios.get(
        `${baseURL}/resources/${props.data.resource_id}/votes`
      );
      setResourceVoteInfo(response.data);
    }
    fetchResourceVotes();
  }, [fetchVoteInfoToggle, props.data.resource_id]);

  async function handleClickVote(isUpvote: boolean, buttonClasses: string[]) {
    if (props.currentUser.user_id === "not-signed-in") {
      return;
    }
    const response = await axios.post(
      `${baseURL}/resources/${props.data.resource_id}/votes`,
      {
        user_id: props.currentUser.user_id,
        is_upvote: isUpvote,
      }
    );
    setFetchVoteInfoToggle(!fetchVoteInfoToggle);
    setWhichButtonActiveClass(buttonClasses);
  }

  return (
    <section className="d-flex flex-column align-items-center justify-content-evenly ms-3">
      <p className="text-success">({resourceVoteInfo.upVotes})</p>
      <button
        data-toggle="button"
        className={`btn btn-success ${whichButtonActiveClass[0]} active`}
        onClick={() => handleClickVote(true, ["active", ""])}
      >
        👍
      </button>
      <p>({resourceVoteInfo.totalVotes})</p>
      <button
        className={`btn btn-danger ${whichButtonActiveClass[1]}`}
        onClick={() => handleClickVote(false, ["", "active"])}
      >
        👎
      </button>
      <p className="text-danger">({resourceVoteInfo.downVotes})</p>
    </section>
  );
}
