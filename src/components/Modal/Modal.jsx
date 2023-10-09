import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Backdrop,
  ModalContainer,
  Image,
  HeadText,
  CarTitle,
  CarModel,
  CarInfoWrapper,
  Description,
  SubTitle,
  RentalCondition,
  ConditionValue,
  RentalCarButton,
  CloseButton,
} from './Modal.styled';
import Icons from '../../images/sprite.svg';
// import PropTypes from 'prop-types';

const rootModal = document.querySelector('#root-modal');

export default function Modal({ onCloseModal, info }) {
  const [, city, country] = info.address.split(', ');
  const [minAge, valid, deposit] = info.rentalConditions.split('\n');
  const [min, age, numb] = minAge.split(' ');

  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onCloseModal();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onCloseModal]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onCloseModal();
    }
  };

  return createPortal(
    <Backdrop onClick={handleBackdropClick}>
      <ModalContainer>
        <Image src={info.img} height={248} width={461} />
        <HeadText>
          <CarTitle>
            {info.make} <CarModel>{info.model}</CarModel>, {info.year}
          </CarTitle>
        </HeadText>
        <CarInfoWrapper>
          <p>
            {city} | {country} | Year: {info.year} | Type: {info.type}
          </p>
          <p>
            Fuel Consumption: {info.fuelConsumption} | Engine Size:
            {info.engineSize}
          </p>
        </CarInfoWrapper>
        <Description>{info.description}</Description>
        <SubTitle>Accessories and functionalities:</SubTitle>
        <CarInfoWrapper>
          <p>
            {info.accessories[0]} | {info.accessories[1]} |{' '}
            {info.accessories[2]}
          </p>
          <p>
            {info.functionalities[0]} | {info.functionalities[1]} |{' '}
            {info.functionalities[2]}
          </p>
        </CarInfoWrapper>
        <SubTitle>Rental Conditions: </SubTitle>
        <RentalCondition>
          {min + ' ' + age}
          <ConditionValue>{numb}</ConditionValue>
        </RentalCondition>
        <RentalCondition>{valid}</RentalCondition>
        <br />
        <RentalCondition>{deposit}</RentalCondition>
        <RentalCondition>
          Mileage: <ConditionValue> {info.mileage}</ConditionValue>
        </RentalCondition>
        <RentalCondition>
          Price: <ConditionValue> {info.rentalPrice}</ConditionValue>
        </RentalCondition>
        <RentalCarButton href="tel:+380730000000">Rental car</RentalCarButton>
        <CloseButton type="button" onClick={onCloseModal}>
          <svg width={24} height={24}>
            <use href={Icons + '#icon-x'}></use>
          </svg>
        </CloseButton>
      </ModalContainer>
    </Backdrop>,
    rootModal
  );
}
