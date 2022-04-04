import { ListItem, ListWrapper } from '../../Section/styled';
import { learnListArray } from '../../../assets/data/toLearn';

const content = learnListArray.map(skill => (
  <ListWrapper key={skill}>
    <ListItem>{skill}</ListItem>
  </ListWrapper>
));

const ToLearn = () => {
  return <>{content}</>;
};

export default ToLearn;
