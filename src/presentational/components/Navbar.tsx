import Image from 'next/image';
import Link from 'next/link';
import Icon from 'public/vercel.svg';
import { FunctionComponent } from 'react';

import { mainStiches } from '../themes';
import { Center, Flex, PrimaryButton } from './common';

type NavbarProps = {};

const Navbar: FunctionComponent<NavbarProps> = ({}) => {
  return (
    <Flex
      css={{
        position: 'sticky',
        top: '0px',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'rgba(255,255,255,0.9)',
      }}>
      <Center css={{ paddingInlineStart: '30px' }}>
        <Image src={Icon} width={70} height={15} alt="icon" />
      </Center>
      <Center>
        {navbarLinks.map((link) => (
          <Link key={link.text} href={link.link}>
            <LinkText>{link.text}</LinkText>
          </Link>
        ))}
        <Link href="/sign-in">
          <SignInButton>Sign In</SignInButton>
        </Link>
      </Center>
    </Flex>
  );
};

export default Navbar;

const SignInButton = mainStiches.styled(PrimaryButton, {
  border: 'none',
  borderRadius: '10px',
  height: '40px',
  width: '120px',
  marginBlock: '10px',
  marginInline: '30px',
});

const LinkText = mainStiches.styled('p', {
  color: 'black',
  marginInlineEnd: '30px',
  '&:hover': {
    color: '$primary',
  },
});

type NavbarLinks = {
  text: string;
  link: string;
};

const navbarLinks: Array<NavbarLinks> = [
  {
    text: 'Home',
    link: '/',
  },
  {
    text: 'Our Product',
    link: '/products',
  },
  {
    text: 'About Us',
    link: '/about-us',
  },
  {
    text: 'Projects',
    link: '/projects',
  },
  {
    text: 'More',
    link: '/more',
  },
];
