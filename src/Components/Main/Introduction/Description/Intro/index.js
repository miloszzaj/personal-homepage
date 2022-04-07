import styled from 'styled-components';

export const Intro = styled.div`
  width: 50px;
  height: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
`;

export default Intro;
