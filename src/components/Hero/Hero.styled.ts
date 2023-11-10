import styled from '@emotion/styled';
import banner from 'images/hero-banner.png';
import { NavLink } from 'react-router-dom';

export const HeroContainer = styled.section`
  background-image: linear-gradient(
      rgba(46, 47, 66, 0.7),
      rgba(46, 47, 66, 0.7)
    ),
    url(${banner});
  height: 800px;
  background-position-y: -200px;
  background-size: cover;
  text-align: center;
  padding-top: 70px;
`;

export const Title = styled.h1`
  color: white;
  font-size: 60px;
  font-style: normal;
  font-weight: 600;
  line-height: 72px;
  margin-bottom: 120px;
`;

export const StyledLink = styled(NavLink)`
  margin: 0 auto;
  margin-bottom: 130px;
  display: flex;
  width: 250px;
  height: 50px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 12px;
  background: #3470ff;

  color: white;

  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;

  &:hover,
  &:focus {
    background: #2b498e;
  }
`;

export const Text = styled.h1`
  color: white;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
`;

export const AdvantagesWrapper = styled.ul`
  display: flex;
  justify-content: center;
  gap: 100px;
  margin-top: 100px;
`;

export const AdvantagesCard = styled.li`
  background-color: rgba(18, 20, 23, 0.5);
  border: 1px solid rgba(18, 20, 23);
  box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
  border-radius: 14px;
  width: 300px;
  heigth: 200px;
  padding: 24px;
`;

export const AdvantagesTitle = styled.h2`
  color: white;

  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 16px;
`;

export const AdvantagesText = styled.p`
  color: white;

  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;
