import { Divider, SkillsList, Title, Wrapper } from './styled';

const Section = ({ title, content }) => {
  return (
    <Wrapper>
      <Title>{title}</Title>
      <Divider />
      <SkillsList>{content}</SkillsList>
    </Wrapper>
  );
};

export default Section;
