import { Button, Content, Text } from './Button';
import Caption from './Caption';
import Intro from './Intro';
import { Wrapper } from './styled';
import Title from './Title';

import mailIcon from '../../../../assets/images/mail.svg';

const Description = () => {
  return (
    <Wrapper>
      <Intro>This is:</Intro>
      <Title>Miłosz Zajączkowski </Title>
      <Caption>
        {' '}
        AMkmij eidcj wijv r vjwijv oiw voiw vjwivjoiwfoiv nw jfvi hwf oivhw iofhvo iwhoi ciwnc cniwj
        dc wodcj wm jvd omc wdlc owd comw docwo dcmwmd cwm dlc wdc ow
      </Caption>
      <Button>
        {' '}
        <Content href='mailto:zajaczkowski.milosz@gmail.com' target='_blank' rel='noopener'>
          <img src={mailIcon} alt='email icon' />
          <Text>Hire Me</Text>
        </Content>
      </Button>
    </Wrapper>
  );
};

export default Description;
