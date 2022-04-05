import Section from '../Section';
import { RocketIcon, ToolsIcon } from '../Section/styled';
import Footer from './Footer';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Skills from './Skills';
import { Wrapper } from './styled';
import ToLearn from './ToLearn';

const Main = () => {
  return (
    <Wrapper>
      <Introduction />
      <Section title='My skillset includes' icon={<ToolsIcon />}>
        <Skills />
      </Section>
      <Section title='What I want to learn next' icon={<RocketIcon />}>
        <ToLearn />
      </Section>
      <Portfolio />
      <Footer />
    </Wrapper>
  );
};

export default Main;
//
