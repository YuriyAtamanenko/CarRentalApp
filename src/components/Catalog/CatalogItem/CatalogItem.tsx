import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, removeFromFavorites } from 'redux/Favorites/slice';
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
  AddRemoveButton,
} from './CatalogItem.styled';
import Icons from '../../../images/sprite.svg';
import { selectFavorites } from 'redux/Favorites/selectors';

import { ICar } from '../CatalogItem/CatalogItem.types';

interface ICatalogItem {
  info: ICar;
}

export default function CatalogItem({ info }: ICatalogItem) {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const favorites = useSelector(selectFavorites);

  const [, city, country] = info.address.split(', ');
  const title = info.make + info.model + info.year;

  const isFavorites = favorites.find(({ id }) => id === info.id);

  const toggleModal = () => {
    setIsModalOpen(isModalOpen => !isModalOpen);
  };

  return (
    <Card>
      {isFavorites ? (
        <AddRemoveButton
          type="button"
          onClick={() => dispatch(removeFromFavorites(info.id))}
        >
          <svg width={18} height={18}>
            <use href={Icons + '#icon-heart-remove'}></use>
          </svg>
        </AddRemoveButton>
      ) : (
        <AddRemoveButton
          type="button"
          onClick={() => dispatch(addToFavorites(info))}
        >
          <svg width={18} height={18}>
            <use href={Icons + '#icon-heart-add'}></use>
          </svg>
        </AddRemoveButton>
      )}

      <Image
        src={info.img}
        alt={info.make + ' ' + info.model}
        height={268}
        width={274}
      />
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
