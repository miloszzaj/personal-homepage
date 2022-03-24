import { Bullet, Divider, ListItem, ListWrapper, SkillsList, Title, Wrapper } from './styled';

const Section = () => {
  const arr = [
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

  return (
    <Wrapper>
      <Title>My skillset includes</Title>
      <Divider />
      <SkillsList>
        {arr.map(el => (
          <ListWrapper>
            <Bullet />
            <ListItem>{el}</ListItem>
          </ListWrapper>
        ))}
      </SkillsList>
    </Wrapper>
  );
};

export default Section;
