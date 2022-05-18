import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { UserInterface, NoUserInterface } from "./Interfaces";

interface CreateResourcePageProps {
  currentUser: UserInterface | NoUserInterface;
  setCurrentUser: (arg0: UserInterface | NoUserInterface) => void;
}

export default function CreateResourcePage(
  props: CreateResourcePageProps
): JSX.Element {
  const userData = useLocation().state as UserInterface;
  console.log(userData);
  console.log(props.currentUser);

  useEffect(() => props.setCurrentUser(userData));

  return <p>hello world</p>;
}
