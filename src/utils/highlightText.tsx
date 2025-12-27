export const highlightText = (text: string, search: string) => {
  if (!search) {
    return text;
  }

  const escapedSearch = search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escapedSearch})`, 'gi');

  return text
    .split(regex)
    .map((part, index) =>
      part.toLowerCase() === escapedSearch.toLowerCase() ?
        <mark key={index}> {part} </mark>
      : part,
    );
};
