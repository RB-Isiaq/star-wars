export const truncateWords = (text: string) => {
  const words = text?.split(" ");
  return words?.slice(0, 40).join(" ") + " ...";
};
