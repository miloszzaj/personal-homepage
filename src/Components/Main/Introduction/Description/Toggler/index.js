import { Container, Inner, Input, Label, Switch, Wrapper } from './styled';

const Toggler = ({ label }) => {
  return (
    <Container>
      {label}{' '}
      <Wrapper>
        <Input type='checkbox' name={label} id={label} />
        <Label className='label' htmlFor={label}>
          <Inner className='inner' />
          <Switch className='switch' />
        </Label>
      </Wrapper>
    </Container>
  );
};

export default Toggler;
