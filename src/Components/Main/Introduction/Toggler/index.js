import { Container, Inner, Input, Label, Switch, Wrapper } from './styled';
import { useThemeToggler } from '../../../../useTogglerTheme';

const Toggler = ({ label }) => {
  const { theme, themeToggler } = useThemeToggler();
  console.log(theme);

  return (
    <Container>
      {label}{' '}
      <Wrapper>
        <Input onChange={() => themeToggler()} type='checkbox' name={label} id={label} />
        <Label className='label' htmlFor={label}>
          <Inner className='inner' />
          <Switch className='switch' />
        </Label>
      </Wrapper>
      <button onClick={() => themeToggler()}>zmień</button>
    </Container>
  );
};

export default Toggler;