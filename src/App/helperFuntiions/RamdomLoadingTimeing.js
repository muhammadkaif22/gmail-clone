const RandomLoadingTime = () => {
  const laodingtimes = ["2700", "1500", "3500", "3900"];
  let ramdomtimes =
    laodingtimes[Math.floor(Math.random() * laodingtimes.length)];

  return ramdomtimes;
};

const RandomPageLoadingTime = () => {
  const laodingtimes = ["5700", "4500", "6700", "8000"];
  let ramdomtimes =
    laodingtimes[Math.floor(Math.random() * laodingtimes.length)];

  return ramdomtimes;
};

export default RandomLoadingTime;
export { RandomPageLoadingTime };
