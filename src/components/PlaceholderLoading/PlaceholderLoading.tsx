import './styles.css';

export const PlaceholderLoading = (): JSX.Element => {
  return (
    <div style={{ width: '800px', margin: '0 auto' }}>
      <div className="placeholder-container">
        <div className="placeholder-item placeholder-item__title"></div>
        <div className="placeholder-item placeholder-item__body"></div>
        <div className="placeholder-item placeholder-item__button"></div>
      </div>
    </div>
  );
};
