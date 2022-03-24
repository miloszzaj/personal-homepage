import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  width: 1216px;
  /* height: 404px; */
  padding: 32px;
  margin: 72px auto;
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
`;

export const Divider = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.text.primary};
  opacity: 0.3;
`;

export const Title = styled.h1`
  height: 38px;
  color: ${({ theme }) => theme.text.primary};
`;

export const SkillsList = styled.ul`
  list-style-type: none;
  column-count: 3;
  padding: 0;
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Bullet = styled.div`
  background-color: ${({ theme }) => theme.color.secondary};
  border-radius: 50%;
  width: 9px;
  height: 9px;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 24px 0px;
`;
export const ListItem = styled.li`
  color: ${({ theme }) => theme.text.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  vertical-align: middle;
  /* Inside auto layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 8px 10px;
`;
