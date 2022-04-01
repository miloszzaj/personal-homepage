import { Container, Inner, Input, Label, Switch, Wrapper } from './styled';
import { useThemeToggler } from '../../../../assets/features/useTogglerTheme';

const Toggler = ({ label }) => {
  const { theme, themeToggler } = useThemeToggler();
  console.log(theme);

  return (
    <Container>
      {label}{' '}
      <Wrapper>
        <Input onChange={themeToggler} type='checkbox' name={label} id={label} />
        <Label className='label' htmlFor={label}>
          <Inner className='inner' />
          <Switch className='switch' />
        </Label>
      </Wrapper>
    </Container>
  );
};

export default Toggler;
