import { ResourceInfo } from "../components/Interfaces";

export function matchesSearchText(
  resource: ResourceInfo,
  resourceSearch: string
): boolean {
  const isMatchOnTitle = resource.title
    .toUpperCase()
    .includes(resourceSearch.toUpperCase());
  const isMatchOnDesc = resource.description
    .toUpperCase()
    .includes(resourceSearch.toUpperCase());

  /*
    Need to add functionality to search for tags and for author name
    */

  return isMatchOnTitle || isMatchOnDesc;
}
