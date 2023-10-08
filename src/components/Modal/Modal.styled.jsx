import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  background-color: rgba(4, 4, 4, 0.6);
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
  border-radius: 12px;
  border: 1px solid rgba(239, 237, 232, 0.2);
  padding: 48px 24px;
  z-index: 10;
  width: 335px;
  height: 280px;
`;
