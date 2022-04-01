import { TileContainer } from './styled';

const Tile = ({ title, content, demo, code, onClick }) => {
  return (
    <TileContainer onClick={onClick}>
      <h1>{title}</h1>
      <div>{content}</div>
      <div>{demo}</div>
      <div>{code}</div>
    </TileContainer>
  );
};

export default Tile;
