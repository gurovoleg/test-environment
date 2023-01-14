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

export type TimerType = {
  ss: string;
  mm: string;
  hh: string;
};

export const convertToMilliseconds = (timer: TimerType): number => {
  return +timer.hh * 3600000 + +timer.mm * 60000 + +timer.ss * 1000;
};

export const convertToTimer = (ms: number): TimerType => {
  return {
    ss: formatTime(Math.floor((ms / 1000) % 60)),
    mm: formatTime(Math.floor((ms / 60000) % 60)),
    hh: formatTime(Math.floor((ms / 3600000) % 24)),
  };
};

export const convertToTimeString = (ms: number) => {
  const { hh, mm, ss } = convertToTimer(ms);

  return `${hh}:${mm}:${ss}`;
};
