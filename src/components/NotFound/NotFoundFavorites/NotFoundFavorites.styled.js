import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NotFound = styled.p`
  text-align: center;

  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 30px;
`;

export const StyledCatalogLink = styled(NavLink)`
  color: #3470ff;
  font-weight: 600;

  &:hover,
  &:focus {
    text-decoration-line: underline;
  }
`;
