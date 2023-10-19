import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(18, 20, 23, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 100;
  opacity: 1;
  transform: scale(100);
  transform: rotate(0deg);
  visibility: visible;
  transition: opacity 1000ms linear, transform 500ms linear;
`;
export const ModalContainer = styled.div`
  position: relative;
  background-color: white;
  border-radius: 24px;
  padding: 40px;
  z-index: 10;
  width: 541px;
  max-height: 752px;
  overflow: auto;
  overflow-x: hidden;
`;

export const Image = styled.img`
  width: 461px;
  height: 248px;
  border-radius: 14px;
background: #F3F3F2;
object-fit: cover;
  }
`;

export const HeadText = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 14px;
`;

export const CarTitle = styled.h2`
  font-size: 18px;
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

export const Description = styled.p`
  margin-top: 14px;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
`;

export const SubTitle = styled.h3`
  margin-top: 24px;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const RentalCondition = styled.p`
  display: inline-flex;
  padding: 7px 14px;
  margin-top: 8px;
  margin-right: 8px;
  border-radius: 35px;
  background: #f9f9f9;

  color: #363535;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.24px;
`;

export const ConditionValue = styled.span`
  color: #3470ff;
  font-weight: 600;
  margin-left: 4px;
`;

export const RentalCarButton = styled.a`
  margin-top: 24px;
  display: flex;
  width: 168px;
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

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  border: none;
  background: none;
`;
