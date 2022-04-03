import { Button, Code, Content, Demo, Link, TileContainer, Title } from './styled';

const TileBig = ({ title, content, demo, code, onClick, setShowAll }) => {
  return (
    <TileContainer onClick={onClick}>
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Demo>
        Demo:
        <Link href='{demo}'> {demo}</Link>
      </Demo>
      <Code>
        Code:
        <Link href='{code}'> {code}</Link>
      </Code>
      <Button onClick={setShowAll}>Back</Button>
    </TileContainer>
  );
};

export default TileBig;
