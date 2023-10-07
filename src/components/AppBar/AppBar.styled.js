import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  font-weight: 700;
  color: #000;
  text-decoration: none;
  margin-right: 16px;
  &.active {
    color: #3b4c98;
  }
`;
