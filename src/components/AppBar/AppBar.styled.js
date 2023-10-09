import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 0px 24px;
  background-color: #3470ff;
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

export const Navigation = styled.nav`
  display: flex;
  gap: 50px;
`;
