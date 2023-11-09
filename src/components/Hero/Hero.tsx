import {
  HeroContainer,
  Title,
  StyledLink,
  Text,
  AdvantagesWrapper,
  AdvantagesCard,
  AdvantagesTitle,
  AdvantagesText,
} from './Hero.styled';

export default function Hero() {
  return (
    <HeroContainer>
      <Title>RENT LUXURY CARS IN EUROPE</Title>
      <StyledLink to="/catalog">Get started search</StyledLink>
      <Text>PICK UP AND DROP OFF ANYWHERE</Text>
      <AdvantagesWrapper>
        <AdvantagesCard>
          <AdvantagesTitle>Flexible rentals</AdvantagesTitle>
          <AdvantagesText>
            Cancel or change most bookings for free up to 48 hours before
            pick-up
          </AdvantagesText>
        </AdvantagesCard>
        <AdvantagesCard>
          <AdvantagesTitle>No hidden fees</AdvantagesTitle>
          <AdvantagesText>Know exactly what you’re paying</AdvantagesText>
        </AdvantagesCard>
        <AdvantagesCard>
          <AdvantagesTitle>Price Match Guarantee</AdvantagesTitle>
          <AdvantagesText>
            Found the same deal for less? We’ll match the price.
          </AdvantagesText>
        </AdvantagesCard>
      </AdvantagesWrapper>
    </HeroContainer>
  );
}
