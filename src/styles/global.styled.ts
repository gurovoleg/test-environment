import styled, { css } from 'styled-components';
import { prop } from 'styled-tools';

export type ContainerProps = {
  gap?: string;
};

export const CenteredStyles = css`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: ${prop('gap', '0px')};
`;

export const CenteredRowContainer = styled.div<ContainerProps>`
  ${CenteredStyles};
`;

export const CenteredColumnContainer = styled.div<ContainerProps>`
  ${CenteredStyles};

  flex-direction: column;
`;
