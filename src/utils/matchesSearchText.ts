import { ResourceInfo } from "../components/Interfaces";

export function matchesSearchText(
  resource: ResourceInfo,
  resourceSearch: string
): boolean {
  const keysToSearch = ["title", "description"];
  for (const key of keysToSearch) {
    const resourceSection = resource[key as keyof ResourceInfo];
    if (typeof resourceSection === "string") {
      const isMatching = resourceSection
        .toUpperCase()
        .includes(resourceSearch.toUpperCase());
      if (isMatching) {
        return true;
      }
    }
  }

  return false;
}

// const isMatchOnTitle = resource.title
//   .toUpperCase()
//   .includes(resourceSearch.toUpperCase());
// const isMatchOnDesc = resource.description
//   .toUpperCase()
//   .includes(resourceSearch.toUpperCase());

/*
    Need to add functionality to search for tags and for author name
    */

// return isMatchOnTitle || isMatchOnDesc;
