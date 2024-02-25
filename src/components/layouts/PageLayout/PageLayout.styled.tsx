import styled from 'styled-components';
import { theme } from 'styled-tools';

const headerHeight = 'header.height';

export const Wrapper = styled.div`
  color: ${theme('primaryColor')};
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${theme(headerHeight, '15px')};
  border-bottom: 1px solid #c8c8c8;
  height: ${theme('header.height', '100px')};
  background-color: ${theme('header.bgColor')};

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

export const HeaderTitle = styled.div`
  font-size: 24px;
`;

export const AsideWrapper = styled.div`
  width: ${theme('aside.width', '100px')};
  background-color: ${theme('aside.bgColor', '#fff')};
  padding: ${theme('aside.padding', '15px')};
  border-right: 1px solid #c8c8c8;

  position: fixed;
  top: ${theme(headerHeight, '100px')};
  bottom: 0;
  left: 0;
  z-index: 100;
`;

export const AsideGroup = styled.div``;

export const AsideGroupTitle = styled.div`
  font-weight: 500;
  margin: 10px 0 5px;
`;

export const AsideItem = styled.div`
  margin-bottom: 10px;
  padding-left: 10px;

  & > a {
    text-decoration: unset;
    color: grey;
  }
`;

export const MainWrapper = styled.div`
  padding: 20px;
  margin-left: ${theme('aside.width', '100px')};
  margin-top: ${theme(headerHeight, '100px')};
  background-color: ${theme('page.bgColor')};
`;
