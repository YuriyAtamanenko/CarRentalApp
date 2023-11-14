import { useState } from 'react';
import Select from 'react-select';

import {
  Submit,
  Lable,
  Form,
  InputWrapper,
  FromInput,
  ToInput,
  ImputBox,
  ImputBoxLabel,
  PriceLable,
} from './Filter.styled';

import { makeSelectStyles, priceSelectStyles } from './CustomSelectStyles';
import { makesOptions } from 'db/makesList';
import { pricesOptions } from 'db/priceList';

export default function Filter({ onFiltering }) {
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const filter = {
      selectedMake: selectedMake ? selectedMake.value : '',
      selectedPrice: selectedPrice ? selectedPrice.value : 1000,
      fromMiliage: selectedFrom === '' ? 0 : Number(selectedFrom),
      toMiliage: selectedTo === '' ? 9999 : Number(selectedTo),
    };

    onFiltering(filter);
  };

  const onFormatMileage = value => {
    return value
      .toString()
      .replace(/,/g, '')
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const onSeeAll = () => {
    setSelectedMake(null);
    setSelectedPrice(null);
    setSelectedFrom('');
    setSelectedTo('');
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <Lable>Car brand</Lable>
        <Select
          styles={makeSelectStyles}
          value={selectedMake}
          options={makesOptions}
          onChange={e => {
            setSelectedMake(e);
          }}
          placeholder="Enter the text"
        />
      </InputWrapper>
      <InputWrapper>
        <Lable>Price/ 1 hour</Lable>
        <PriceLable htmlFor="priceSelect">To</PriceLable>
        <Select
          id="priceSelect"
          styles={priceSelectStyles}
          options={pricesOptions}
          value={selectedPrice}
          placeholder="$"
          onChange={e => {
            setSelectedPrice(e);
          }}
        />
      </InputWrapper>
      <InputWrapper>
        <Lable>Сar mileage / km</Lable>
        <div style={{ display: 'flex', position: 'relative' }}>
          <ImputBox>
            <ImputBoxLabel htmlFor="mileageFrom">From</ImputBoxLabel>
            <FromInput
              id="mileageFrom"
              name="from"
              value={onFormatMileage(selectedFrom)}
              onChange={e => {
                setSelectedFrom(e.currentTarget.value);
              }}
            />
          </ImputBox>
          <ImputBox>
            <ImputBoxLabel htmlFor="mileageTo">To</ImputBoxLabel>
            <ToInput
              id="mileageTo"
              name="to"
              value={onFormatMileage(selectedTo)}
              onChange={e => {
                setSelectedTo(e.currentTarget.value);
              }}
            />
          </ImputBox>
        </div>
      </InputWrapper>

      <Submit type="submit">Search</Submit>
      <Submit type="button" onClick={onSeeAll}>
        Reset
      </Submit>
    </Form>
  );
}
