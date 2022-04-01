import { Caption, Heading, Image, Tile, Tiles, Title, Wrapper } from './styled';
import gitHubImage from '../../images/Fill-51 (1).png';

const Portfolio = () => {
  return (
    <Wrapper>
      <Heading>
        <Image src={gitHubImage} />
        <Title>Portfolio</Title>
        <Caption>My recent projects</Caption>
      </Heading>
      <Tiles>
        <Tile />
        <Tile />
        <Tile />
        <Tile />
      </Tiles>
    </Wrapper>
  );
};

export default Portfolio;
