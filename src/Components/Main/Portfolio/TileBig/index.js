import { Button, Code, Content, Demo, Link, TileContainer, Title } from './styled';

const TileBig = ({ title, content, technologies, demo, code, onClick, setShowAll }) => {
  return (
    <TileContainer onClick={onClick}>
      <Title>{title}</Title>
      <Content>
        <strong>Description:</strong> {content}
      </Content>
      <Content>
        <strong>Technologies used:</strong> {technologies}
      </Content>
      <Demo>
        <strong> Demo:</strong>
        <Link href='{demo}'> Preview</Link>
      </Demo>
      <Code>
        <strong> Code:</strong>
        <Link href='{code}'> Repository</Link>
      </Code>
      <Button onClick={setShowAll}>Back</Button>
    </TileContainer>
  );
};

export default TileBig;
