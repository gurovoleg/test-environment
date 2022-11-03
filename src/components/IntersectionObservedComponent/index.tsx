import * as S from './styled';
import { useIntersectionObserver } from './hooks';

export const IntersectionObservedComponent = ({ name }: { name?: string }): JSX.Element => {
  useIntersectionObserver({ selector: name });

  return <S.Wrapper data-observed={name}>Test block</S.Wrapper>;
};

IntersectionObservedComponent.defaultProps = {
  name: 'observed-element',
};
