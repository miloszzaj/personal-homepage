import Section from '../Section';
import { Bullet, ListItem, ListWrapper } from '../Section/styled';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import { Wrapper } from './styled';

const Main = () => {
  const skillListArray = [
    'HTML',
    'Responsive Web Design',
    'Teamwork',
    'Markdown',
    'CSS BEM convention',
    'CSS Grid',
    'CSS FlexBox',
    'React Router',
    'Redux-Saga',
    'Redux (Toolkit)',
    'React Hooks',
  ];

  const learnListArray = ['React Context', 'Node.js', ' Cypress', ' Unit testing', 'TypeScript'];
  return (
    <Wrapper>
      <Introduction />
      <Section
        title='My skillset includes'
        content={skillListArray.map(skill => (
          <ListWrapper>
            <Bullet />
            <ListItem>{skill}</ListItem>
          </ListWrapper>
        ))}
      />
      <Section
        title='What I want to learn next'
        content={learnListArray.map(skill => (
          <ListWrapper>
            <Bullet />
            <ListItem>{skill}</ListItem>
          </ListWrapper>
        ))}
      />
      <Portfolio />
    </Wrapper>
  );
};

export default Main;
