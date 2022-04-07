import styled from 'styled-components';
import { Github } from '@styled-icons/bootstrap/Github';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';

import { device } from '../../../assets/breakpoints';
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
  @media ${device.tabletL} {
    /* margin-left: 10px; */
    padding-left: 0;

    margin: 0;
    height: fit-content;
    /* align-items: center; */
    /* align-self: center; */
    /* justify-self: center; */
    /* margin-left: auto;
    margin-right: auto; */
  }
  @media ${device.mobile} {
    align-items: flex-start;
    margin: auto 13.3px;
  }
`;

export const Outro = styled.div`
  width: 71px;
  height: 16px;
  font-weight: 700;
  font-size: 12px;
  line-height: 130%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.text.secondary};
  margin-top: 120px;
  @media ${device.mobile} {
    margin-top: 48px;
  }
`;

export const Mail = styled.a`
  margin: 24px 0;
  font-weight: 900;
  font-size: 32px;
  line-height: 39px;
  letter-spacing: 0.03em;
  text-decoration: none;
  color: ${({ theme }) => theme.color.primary};
  transition: color 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }

  @media ${device.tabletL} {
    /* margin: 10px 40px; */
    font-size: 22px;
  }
  @media ${device.mobile} {
    margin: 8px 0;
    font-size: 16px;
  }
`;

export const Caption = styled.div`
  max-width: 670px;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 56px;

  @media ${device.tablet} {
    margin: 0px auto 40px;
  }
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const GitHubIcon = styled(Github)`
  color: ${({ theme }) => theme.color.primary};
  width: 40px;
  margin-right: 24px;
  transition: color 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
  @media ${device.mobile} {
    width: 30px;
  }
`;

export const FacebookIcon = styled(Facebook)`
  color: ${({ theme }) => theme.color.primary};
  width: 40px;
  margin-right: 24px;
  transition: color 275ms ease;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
  @media ${device.mobile} {
    width: 30px;
  }
`;

export const LinkedinIcon = styled(LinkedinWithCircle)`
  color: ${({ theme }) => theme.color.primary};
  width: 45px;
  margin-right: 24px;
  transition: color 275ms ease;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
  @media ${device.mobile} {
    width: 30px;
  }
`;

export const InstagramIcon = styled(InstagramWithCircle)`
  color: ${({ theme }) => theme.color.primary};
  width: 42px;
  margin-right: 24px;
  transition: color 275ms ease;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
  }
  @media ${device.mobile} {
    width: 30px;
  }
`;
