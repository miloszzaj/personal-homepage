import Section from '../Section';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Skills from './Skills';
import { Wrapper } from './styled';
import ToLearn from './ToLearn';

const Main = () => {
  return (
    <Wrapper>
      <Introduction />
      <Skills />
      <Section title='My skillset includes' content={<ToLearn />} />
      <Portfolio />
    </Wrapper>
  );
};

export default Main;
//
