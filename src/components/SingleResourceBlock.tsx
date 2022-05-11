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
    </section>
  );
}
