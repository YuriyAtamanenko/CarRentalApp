import styled from '@emotion/styled';

export const Card = styled.li`
  position: relative;
  width: 274px;
  height: 426px;
    }
`;

export const Image = styled.img`
  width: 100%;
  height: 268px;
  border-radius: 14px;
  object-fit: cover;
    background: linear-gradient(rgba(18, 20, 23, 0.5) 2.5%, rgba(18, 20, 23, 0) 41.07%);
  }
`;

export const HeadText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const CarTitle = styled.h2`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const Price = styled.p`
  color: #121417;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
`;

export const CarModel = styled.span`
  color: #3470ff;
`;

export const CarInfoWrapper = styled.div`
  margin-top: 8px;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;

export const LearnMoreButton = styled.button`
  margin-top: 32px;
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
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

export const AddRemoveButton = styled.button`
  position: absolute;
  top: 14px;
  right: 14px;
  border: none;
  background: none;
`;
