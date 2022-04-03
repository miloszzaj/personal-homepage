import { Caption, Heading, Image, Tiles, Title, Wrapper } from './styled';
import gitHubImage from '../../../assets/images/git.png';
import Tile from './Tile';
import { useState } from 'react';
import { projects } from '../../../assets/data/projects';
import TileBig from './TileBig';
import TileLoading from './TileLoading';
import { useEffect } from 'react';

const Portfolio = () => {
  const [showAll, setShowAll] = useState(true);
  const [tileIndex, setTileIndex] = useState(null);
  const handleOnClick = index => {
    setShowAll(!setShowAll);
    setTileIndex(index);
  };

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 3000);
    }
  });

  return (
    <Wrapper>
      <Heading>
        <Image src={gitHubImage} />
        <Title>Portfolio</Title>
        <Caption>My recent projects</Caption>
      </Heading>
      {loading ? (
        <TileLoading />
      ) : (
        <Tiles>
          {showAll
            ? projects.map(({ title, content, demo, code }) => (
                <Tile
                  onClick={() => handleOnClick(title)}
                  key={title}
                  title={title}
                  content={content}
                  demo={demo}
                  code={code}
                />
              ))
            : projects.map(item => {
                if (item.title === tileIndex) {
                  return (
                    <TileBig
                      setShowAll={setShowAll}
                      key={item.title}
                      title={item.title}
                      content={item.contentLong}
                      technologies={item.technologies}
                      demo={item.demo}
                      code={item.code}
                    />
                  );
                }
              })}
        </Tiles>
      )}
    </Wrapper>
  );
};

export default Portfolio;
