import {
  Box,
  Flex,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  lightPrimaryGreen,
  darkPrimaryGreen,
} from "../Constants";

const darkMode = localStorage.getItem("chakra-ui-color-mode");
const primaryGreen = darkMode === 'light' ? lightPrimaryGreen : darkPrimaryGreen;

const tabs = [
  { name: 'Calendar', path: "/" },
  { name: 'Party Bank', path: '/party-bank' },
  { name: 'Character Manager', path: "/characters" },
  // { name: 'Enter Code', path: "/enter-code" },
];

function Navbar() {
  const [selectedTab, setSelectedTab] = useState("Calendar");
  const navigate = useNavigate();

  const onClick = (name, path) => {
    console.log(name);
    setSelectedTab(name);
    navigate(path);
  }

  const NavLink = ({ name, path }) => (
    <Link
      px={2}
      py={1}
      w='100%'
      h='100%'
      onClick={() => onClick(name, path)}
      _hover={{
        textDecoration: 'none',
        bg: primaryGreen,
        textColor: 'white',
      }}
      bg={selectedTab === name ? primaryGreen : 'gray.200'}
      textColor={selectedTab === name ? 'white' : 'black'}
      fontSize='150%'
      fontWeight='bold'
    >
      <Flex w='100%' h='100%' justifyItems={'center'} alignItems={'center'} justifyContent={'space-around'}>
        {name}
      </Flex>
    </Link>
  );

  return (
    <Box mb={'1%'}>
      <Flex h={16} justifyItems={'center'} alignItems={'center'} justifyContent={'space-around'}>
        {tabs.map((tab, i) => (
          <NavLink key={i} name={tab.name} path={tab.path} />
        ))}
      </Flex>
    </Box>
  );
}

export default Navbar;
