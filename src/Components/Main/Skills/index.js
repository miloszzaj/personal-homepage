import { ListItem, ListWrapper } from '../../Section/styled';
import { skillListArray } from '../../../assets/data/skills';

const Skills = () => {
  return skillListArray.map(skill => (
    <ListWrapper key={skill}>
      <ListItem>{skill}</ListItem>
    </ListWrapper>
  ));
};

export default Skills;
