import { Button, Code, Content, Demo, Link, TileContainer, Title } from './styled';

const Tile = ({ title, content, demo, code, onClick }) => {
  return (
    <TileContainer onClick={onClick}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Demo>
        <strong>Demo:</strong>
        <Link href='{demo}'>Preview</Link>
      </Demo>
      <Code>
        <strong>Code:</strong>
        <Link href='{code}'>Repository</Link>
        <Button>more info</Button>
      </Code>
    </TileContainer>
  );
};

export default Tile;
