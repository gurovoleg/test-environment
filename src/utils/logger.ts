export type logDataType = {
  [key: string]: unknown;
};

export function logger(data: logDataType): void {
  console.log(
    '%c Logger ',
    'background:blue;color:white;font-weight:bold',
    data
  );
}
