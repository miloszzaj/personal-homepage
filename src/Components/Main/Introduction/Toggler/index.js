import { Container, Inner, Input, Label, Switch, Wrapper } from './styled';
import { useUpdateTheme, useTheme } from '../../../../assets/features/ThemeContext';

const Toggler = ({ label }) => {
  const themeToggler = useUpdateTheme();
  const themeContext = useTheme();

  return (
    <Container>
      {label} <div>{JSON.stringify(themeContext)}</div>
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
