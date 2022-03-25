import Section from '../../Section';
import { Bullet, ListItem, ListWrapper } from '../../Section/styled';
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
const Skills = () => {
  return (
    <Section
      title='What I want to learn next'
      content={skillListArray.map(skill => (
        <ListWrapper>
          {/* <Bullet /> */}
          <ListItem>{skill}</ListItem>
        </ListWrapper>
      ))}
    />
  );
};

export default Skills;
