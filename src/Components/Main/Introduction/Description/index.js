import Button from './Button';
import Caption from './Caption';
import Intro from './Intro';
import { Wrapper } from './styled';
import Title from './Title';

const Description = () => {
  return (
    <Wrapper>
      <Intro />
      <Title />
      <Caption />
      <Button />
    </Wrapper>
  );
};

export default Description;
