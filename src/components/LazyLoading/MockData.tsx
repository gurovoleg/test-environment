import { postcodes } from '../../mock/postcodes';

const data = postcodes.match(/.{3,4}\s.{3}/g);

const MockData = (): JSX.Element => {
  console.log('MOCK DATA');

  return (
    <div style={{ height: '100%' }}>
      {data.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </div>
  );
};

export default MockData;
