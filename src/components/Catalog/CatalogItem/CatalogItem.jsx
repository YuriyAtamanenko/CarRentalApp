import { useState } from 'react';
import Modal from 'components/Modal/Modal';
import {
  Card,
  Image,
  HeadText,
  CarTitle,
  CarModel,
  Price,
  CarInfoWrapper,
  LearnMoreButton,
} from './CatalogItem.styled';

export default function CatalogItem({ info }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [, city, country] = info.address.split(', ');
  const title = info.make + info.model + info.year;

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  return (
    <Card>
      <Image src={info.img} height={268} width={274} />
      <HeadText>
        <CarTitle>
          {info.make}
          <CarModel>
            {title.length > 25 ? null : ' ' + info.model}
          </CarModel>, {info.year}
        </CarTitle>
        <Price>{info.rentalPrice}</Price>
      </HeadText>
      <CarInfoWrapper>
        <p>
          {city} | {country} | {info.rentalCompany} |{' '}
          {info.rentalCompany.split(' ')[0]}
        </p>
        <p>
          {info.type} | {info.make} | {info.mileage} | {info.engineSize}
        </p>
      </CarInfoWrapper>
      <LearnMoreButton type="button" onClick={toggleModal}>
        Learn more
      </LearnMoreButton>
      {isModalOpen && <Modal onCloseModal={toggleModal} info={info} />}
    </Card>
  );
}
