export * from './logger';
export * from './time';
export * from './text';

export const init = () => {
  let element = document.createElement('h1');

  element.textContent = 'This is entry point';
  document.body.append(element);

  console.log(process.env.TEST_USER);

  const { firstName, secondName } = JSON.parse(process.env.TEST_USER || '{}');

  element = document.createElement('h3');
  element.textContent = `${firstName} ${secondName}`;
  document.body.append(element);
};
