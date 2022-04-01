import { Caption, Heading, Image, Tiles, Title, Wrapper } from './styled';
import gitHubImage from '../../images/Fill-51 (1).png';
import Tile from './Tile';
import { useState } from 'react';

const data = [
  {
    title: 'React cenjc cenrci ',
    content: 'cnei enciwe c wnicn ',
    demo: 'google.com',
    code: 'wkic mc eroc3e',
  },
  {
    title: 'React cenjc c476enrcijujyuj ',
    content: 'cnei enciwe c wnicn ',
    demo: 'google.com',
    code: 'wkic mc eroc3e',
  },
  {
    title: 'React cenjc cenrcijyuj645y4546yuj ',
    content: 'cnei enciwe c wnicn ',
    demo: 'google.com',
    code: 'wkic mc eroc3e',
  },
  {
    title: 'React cenjc cen4y6767rcijy ',
    content: 'cnei enciwe c wnicn ',
    demo: 'google.com',
    code: 'wkic mc eroc3e',
  },
];

const Portfolio = () => {
  const [showAll, setShowAll] = useState(true);
  const [tileIndex, setTileIndex] = useState(null);
  const handleOnClick = index => {
    setShowAll(false);
    setTileIndex(index);
  };

  return (
    <Wrapper>
      <Heading>
        <Image src={gitHubImage} />
        <Title>Portfolio</Title>
        <Caption>My recent projects</Caption>
      </Heading>
      <Tiles>
        {showAll
          ? data.map(({ title, content, demo, code }) => (
              <Tile
                onClick={() => handleOnClick(title)}
                key={title}
                title={title}
                content={content}
                demo={demo}
                code={code}
              />
            ))
          : data.map(item => {
              if (item.title === tileIndex) {
                return (
                  <Tile
                    key={item.title}
                    title={item.title}
                    content={item.content}
                    demo={item.demo}
                    code={item.code}
                  />
                );
              }
            })}
      </Tiles>
    </Wrapper>
  );
};

export default Portfolio;
