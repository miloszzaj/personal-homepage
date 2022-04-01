import { Divider, SkillsList, Title, Wrapper } from './styled';

const Section = ({ title, children }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Divider />
      <SkillsList>{children}</SkillsList>
    </Wrapper>
  );
};

export default Section;
