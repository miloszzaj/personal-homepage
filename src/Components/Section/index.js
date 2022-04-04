import { Divider, SkillsList, Title, ToolsIcon, Wrapper } from './styled';

const Section = ({ title, children, icon }) => {
  return (
    <Wrapper>
      <Title>
        {title}
        {icon}
      </Title>
      <Divider />
      <SkillsList>{children}</SkillsList>
    </Wrapper>
  );
};

export default Section;
