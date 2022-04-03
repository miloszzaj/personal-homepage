import { Caption, StyledSpinner, Wrapper } from './styled';

const TileLoading = () => {
  return (
    <Wrapper>
      <Caption>Please wait; projects are being loaded...</Caption>
      <StyledSpinner />
    </Wrapper>
  );
};

export default TileLoading;
