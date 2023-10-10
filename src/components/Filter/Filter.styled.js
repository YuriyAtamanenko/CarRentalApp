import styled from '@emotion/styled';

export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 18px;
`;

export const Submit = styled.button`
  display: flex;
  padding: 14px 44px;
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
    background: #0b44cd;
  }
`;

export const Lable = styled.label`
  color: #8a8a89;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const FromInput = styled.input`
  display: flex;
  padding-left: 70px;
  width: 160px;
  height: 48px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 14px 0px 0px 14px;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  background: #f7f7fb;

  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const ToInput = styled.input`
  display: flex;
  padding-left: 50px;
  width: 160px;
  height: 48px;
  align-items: center;
  flex-shrink: 0;
  border: none;
  border-radius: 0px 14px 14px 0px;
  background: #f7f7fb;

  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const ImputBox = styled.div`
  position: relative;
`;

export const ImputBoxLabel = styled.label`
  position: absolute;
  top: 14px;
  left: 24px;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;

export const PriceLable = styled.label`
  position: absolute;
  z-index: 1;
  bottom: 14px;
  left: 18px;
  color: #121417;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
`;
