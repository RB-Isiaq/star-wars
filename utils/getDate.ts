export const getDate = (inputDate: string) => {
  const parts = inputDate?.split("-");
  const year = parseInt(parts?.[0], 10);
  const month = parseInt(parts?.[1], 10);
  const day = parseInt(parts?.[2], 10);

  const utcDate = new Date(Date.UTC(year, month, day));
  //   const utcDate = new Date(inputDate);
  //   console.log(utcDate.toUTCString());

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const formattedDate = `${monthNames[utcDate.getUTCMonth() - 1]} ${String(
    utcDate.getDate()
  ).padStart(2, "0")} , ${utcDate.getUTCFullYear()}`;

  return formattedDate;
};
