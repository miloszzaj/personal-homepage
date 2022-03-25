import { Bullet, ListItem, ListWrapper } from '../../Section/styled';

const learnListArray = ['React Context', 'Node.js', ' Cypress', ' Unit testing', 'TypeScript'];

const content = learnListArray.map(skill => (
  <ListWrapper>
    {/* <Bullet /> */}
    <ListItem>{skill}</ListItem>
  </ListWrapper>
));

const ToLearn = () => {
  return <>{content}</>;
};

export default ToLearn;
