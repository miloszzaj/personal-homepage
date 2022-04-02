import { Container, Inner, Input, Label, Switch, Wrapper } from './styled';
import { useUpdateTheme } from '../../../../assets/features/ThemeContext';

const Toggler = ({ label }) => {
  const themeToggler = useUpdateTheme();

  return (
    <Container>
      {label}
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
