import styled from 'styled-components';

export const Content = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  width: 154px;
  height: 49px;
  padding: 12px 9px;
  border: 1px solid rgba(209, 213, 218, 0.3);

  box-sizing: border-box;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.button.background};

  font-style: normal;
  font-weight: 600;
  font-size: 20.0584px;
  line-height: 24px;
  letter-spacing: 0.05em;
`;

export const Text = styled.div`
  margin: 0px 16px;
  color: ${({ theme }) => theme.color.quaternary};
`;
