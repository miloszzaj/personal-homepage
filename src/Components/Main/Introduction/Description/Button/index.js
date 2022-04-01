import { Content, Text } from './styled';
import mailIcon from '../../Image/mail.svg';

const Button = () => {
  return (
    <Content href='mailto:zajaczkowski.milosz@gmail.com' target='_blank' rel='noopener'>
      <img src={mailIcon} alt='email icon' />
      <Text>Hire Me</Text>
    </Content>
  );
};

export default Button;
