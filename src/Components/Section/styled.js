import styled from 'styled-components';
import { Tools } from '@styled-icons/bootstrap/Tools';
import { Rocket } from '@styled-icons/ionicons-outline/Rocket';

import { device } from '../../assets/breakpoints';

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.background.secondary};
  max-width: 1216px;
  padding: 32px;
  margin: 72px auto;
  /* shadow */
  box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
  border-radius: 4px;
  @media ${device.tabletL} {
    margin: 0 13.3px;
    padding: 0;
  }
  @media ${device.mobile} {
  }
`;

export const Divider = styled.hr`
  border-top: 1px solid ${({ theme }) => theme.text.primary};
  opacity: 0.3;
`;

export const Title = styled.h1`
  height: 38px;
  color: ${({ theme }) => theme.text.primary};
  @media ${device.mobile} {
    font-size: 18px;
  }
`;

export const SkillsList = styled.ul`
  list-style-type: none;
  column-count: 3;
  padding: 0;
  @media ${device.tabletL} {
    column-count: 1;
  }
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const ListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ListItem = styled.li`
  color: ${({ theme }) => theme.text.secondary};
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.05em;

  &::before {
    content: '• ';
    font-size: 30px;
    color: ${({ theme }) => theme.color.secondary};
  }
`;

export const ToolsIcon = styled(Tools)`
  color: ${({ theme }) => theme.color.secondary};
  width: 30px;
  margin-left: 15px;
`;

export const RocketIcon = styled(Rocket)`
  color: ${({ theme }) => theme.color.secondary};
  width: 35px;
  margin-left: 15px;
`;
