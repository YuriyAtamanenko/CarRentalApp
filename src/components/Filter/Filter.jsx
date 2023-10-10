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

const makes = [
  'Buick',
  'Volvo',
  'HUMMER',
  'Subaru',
  'Mitsubishi',
  'Nissan',
  'Lincoln',
  'GMC',
  'Hyundai',
  'MINI',
  'Bentley',
  'Mercedes-Benz',
  'Aston Martin',
  'Pontiac',
  'Lamborghini',
  'Audi',
  'BMW',
  'Chevrolet',
  'Mercedes-Benz',
  'Chrysler',
  'Kia',
  'Land',
];
const makesOptions = makes.map(make => ({ value: make, label: make }));

const prices = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const pricesOptions = prices.map(price => ({
  value: price,
  label: `${price}$`,
}));

const makeSelectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: 224,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F7F7FB',
    border: 'none',
    color: '#121417',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  placeholder: styles => ({
    ...styles,
    color: '#121417',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  menuList: styles => ({
    ...styles,
    borderRadius: '14px',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    background: '#FFF',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),
  option: (baseStyles, { isFocused }) => ({
    ...baseStyles,
    color: isFocused ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    backgroundColor: isFocused ? 'none' : 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWweight: '500',
    lineHeight: '20px',
  }),
};

const priceSelectStyles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    width: 125,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#F7F7FB',
    border: 'none',
    color: '#121417',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
    paddingLeft: 32,
  }),
  placeholder: styles => ({
    ...styles,
    color: '#121417',
    fontSize: '18px',
    fontStyle: 'normal',
    fontWeight: '500',
    lineHeight: '20px',
  }),
  menuList: styles => ({
    ...styles,
    borderRadius: '14px',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    background: '#FFF',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),
  option: (baseStyles, { isFocused }) => ({
    ...baseStyles,
    color: isFocused ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    backgroundColor: isFocused ? 'none' : 'none',
    cursor: 'pointer',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWweight: '500',
    lineHeight: '20px',
  }),
};

export default function Filter({ onFiltering }) {
  const [selectedMake, setSelectedMake] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedFrom, setSelectedFrom] = useState('');
  const [selectedTo, setSelectedTo] = useState('');

  const onSubmit = e => {
    e.preventDefault();

    const filter = {
      selectedMake,
      selectedPrice: selectedPrice === '' ? 999 : selectedPrice,
      fromMiliage: selectedFrom === '' ? 0 : Number(selectedFrom),
      toMiliage: selectedTo === '' ? 9999 : Number(selectedTo),
    };

    onFiltering(filter);
  };

  return (
    <Form onSubmit={onSubmit}>
      <InputWrapper>
        <Lable>Car brand</Lable>
        <Select
          styles={makeSelectStyles}
          options={makesOptions}
          onChange={e => {
            setSelectedMake(e.value);
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
          placeholder="$"
          onChange={e => {
            setSelectedPrice(e.value);
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
              type="number"
              value={selectedFrom}
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
              type="number"
              value={selectedTo}
              onChange={e => {
                setSelectedTo(e.currentTarget.value);
              }}
            />
          </ImputBox>
        </div>
      </InputWrapper>

      <Submit type="submit">Search</Submit>
    </Form>
  );
}
