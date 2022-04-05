import styled from 'styled-components';
import { Github } from '@styled-icons/bootstrap/Github';
import { Facebook } from '@styled-icons/bootstrap/Facebook';
import { LinkedinWithCircle } from '@styled-icons/entypo-social/LinkedinWithCircle';
import { InstagramWithCircle } from '@styled-icons/entypo-social/InstagramWithCircle';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const Caption = styled.div`
  width: 670px;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.color.primary};
  margin-bottom: 56px;
`;

export const GitHubIcon = styled(Github)`
  color: ${({ theme }) => theme.color.primary};
  width: 40px;
  margin-right: 24px;
  transition: color 0.3s linear;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
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
`;

export const LinkedinIcon = styled(LinkedinWithCircle)`
  color: ${({ theme }) => theme.color.primary};
  width: 45px;
  margin-right: 24px;

  transition: color 275ms ease;

  &:hover {
    color: ${({ theme }) => theme.color.secondary};
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
`;
