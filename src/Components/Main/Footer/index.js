import {
  Caption,
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedinIcon,
  Mail,
  Outro,
  Wrapper,
} from './styled';

const Footer = () => {
  return (
    <Wrapper>
      <Outro>Let’s talk!</Outro>
      <Mail href='mailto:zajaczkowski.milosz@gmail.com' target='_blank' rel='noopener'>
        zajaczkowski.milosz@gmail.com
      </Mail>
      <Caption>
        I’m always open to new projects whenever I have the time. If you have a website, dashboard
        or mobile app in mind and need some help to make your ideas come to life, feel free to
        conatct me.
      </Caption>
      <div>
        <a
          href='https://github.com/miloszzaj'
          rel='noreferrer noopener'
          target='_blank'
          title='GitHub Profile'>
          <GitHubIcon />
        </a>
        <a
          href='https://github.com/miloszzaj'
          rel='noreferrer noopener'
          target='_blank'
          title='GitHub Profile'>
          <FacebookIcon />
        </a>
        <a
          href='https://github.com/miloszzaj'
          rel='noreferrer noopener'
          target='_blank'
          title='GitHub Profile'>
          <LinkedinIcon />
        </a>
        <a
          href='https://github.com/miloszzaj'
          rel='noreferrer noopener'
          target='_blank'
          title='GitHub Profile'>
          <InstagramIcon />
        </a>
      </div>
    </Wrapper>
  );
};

export default Footer;
