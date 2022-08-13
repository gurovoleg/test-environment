export const formatTime = (value: number): string => {
  return String(value).length === 2 ? String(value) : `0${value}`;
};

export const getTime = (): string => {
  const date = new Date();
  const hh = formatTime(date.getHours());
  const mm = formatTime(date.getMinutes());
  const ss = formatTime(date.getSeconds());

  return `${hh}:${mm}:${ss}`;
};
