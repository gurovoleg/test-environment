import { IntersectionObservedComponent } from 'components/IntersectionObservedComponent';
import { LazyLoading } from '../../components/LazyLoading';

const Separator = ({ height = '100px' }) => (
  <div style={{ height: height, background: 'orange' }}></div>
);

export const IntersectionObserver = (): JSX.Element => {
  return (
    <>
      <Separator />
      <IntersectionObservedComponent />
      <Separator />
      <IntersectionObservedComponent />
      <Separator />
      <LazyLoading />
      <Separator />
    </>
  );
};
