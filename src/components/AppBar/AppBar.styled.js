import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;

  justify-content: center;
  background-color: #3470ff;
`;

export const HeadContainer = styled.div`
  width: 1184px;
  display: flex;

  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  padding: 16px 0px;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  color: white;
  text-decoration: none;

  &.active {
    color: yellow;
    text-decoration-line: underline;
  }
`;
export const StyledHomeLink = styled(NavLink)`
  display: flex;
  align-items: center;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;

  color: yellow;
  text-decoration: none;
`;

export const Navigation = styled.nav`
  display: flex;
  gap: 50px;
`;
