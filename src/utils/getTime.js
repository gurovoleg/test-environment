export const formatTime = (value) => {
  return String(value).length === 2 ? value : `0${value}`;
};

export const getTime = () => {
  const date = new Date();
  const hh = formatTime(date.getHours());
  const mm = formatTime(date.getMinutes());
  const ss = formatTime(date.getSeconds());

  return `${hh}:${mm}:${ss}`;
};
