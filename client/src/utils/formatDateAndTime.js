const formateDateAndTime = (date = Date.now()) => {
  const newDate = new Date(date);

  const formattedTime = newDate.toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  const formattedDate = newDate.toLocaleString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
};

export default formateDateAndTime;
