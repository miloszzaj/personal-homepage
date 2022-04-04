import { ListItem, ListWrapper } from '../../Section/styled';
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
  return skillListArray.map(skill => (
    <ListWrapper key={skill}>
      <ListItem>{skill}</ListItem>
    </ListWrapper>
  ));
};

export default Skills;
