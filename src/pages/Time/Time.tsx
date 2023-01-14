import { CenteredRowContainer } from 'styles/global.styled';
import { Timer } from 'components/Timer';

export const Time = (): JSX.Element => {
  return (
    <CenteredRowContainer gap="20px">
      <Timer name="Timer-1" />
      <Timer name="Timer-2" />
    </CenteredRowContainer>
  );
};
