import { Box, ListItem, Text, UnorderedList } from "@chakra-ui/react";
import { AiFillTag, AiOutlineClose } from "react-icons/ai";
import { BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";

interface NavBarSideDrawerProps {
  nav: boolean;
  setNav: (arg: boolean) => void;
}

function NavBarSideDrawer({ nav, setNav }: NavBarSideDrawerProps) {
  return (
    <Box
      pos="fixed"
      top={0}
      left={nav ? 0 : "-100%"}
      w={300}
      h="full"
      bgColor="white"
      zIndex={10}
      transition="left 0.3s"
    >
      <Box position="absolute" right={4} top={4} cursor="pointer">
        <AiOutlineClose onClick={() => setNav(!nav)} size={30} />
      </Box>
      <Text fontSize="2xl" p={4}>
        Best <span style={{ fontWeight: "bold" }}>Eats</span>
      </Text>
      <nav>
        <UnorderedList
          display="flex"
          flexDirection="column"
          p={4}
          textColor="gray.900"
        >
          <ListItem fontSize="xl" py={4} display="flex">
            <Box mr={2} display="flex" gap={2} alignItems="center">
              <TbTruckDelivery size={25} /> Orders
            </Box>
          </ListItem>
          <ListItem fontSize="xl" py={4} display="flex" gap={2}>
            <Box mr={2} display="flex" gap={2}>
              <MdFavorite size={25} /> Favorites
            </Box>
          </ListItem>
          <ListItem fontSize="xl" py={4} display="flex" gap={2}>
            <Box marginRight={4} display="flex" gap={2}>
              <FaWallet size={25} /> Wallet
            </Box>
          </ListItem>
          <ListItem fontSize="xl" py={4} display="flex" gap={2}>
            <Box mr={2} display="flex" gap={2}>
              <MdHelp size={25} /> Help
            </Box>
          </ListItem>
          <ListItem fontSize="xl" py={4} display="flex" gap={2}>
            <Box mr={2} display="flex" gap={2}>
              <AiFillTag size={25} /> Promotions
            </Box>
          </ListItem>
          <ListItem fontSize="xl" py={4} display="flex" gap={2}>
            <Box mr={2} display="flex" gap={2}>
              <BsFillSaveFill size={25} /> Best Ones
            </Box>
          </ListItem>
          <ListItem fontSize="xl" py={4} display="flex" gap={2}>
            <Box mr={2} display="flex" gap={2}>
              <FaUserFriends size={25} /> Invite Friends
            </Box>
          </ListItem>
        </UnorderedList>
      </nav>
    </Box>
  );
}

export default NavBarSideDrawer;
