import Description from './Description';
import Toggler from './Toggler';
import photo from '../../../assets/images/photo.jpeg';
import { Image, Wrapper } from './styled';

const Introduction = () => {
  return (
    <Wrapper>
      <Image src={photo} />
      <Description />
      <Toggler label='dark mode' />
    </Wrapper>
  );
};

export default Introduction;
