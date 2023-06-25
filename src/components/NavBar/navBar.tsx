import React, { useState } from "react";
import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { Box, Input, ListItem, Text, UnorderedList } from "@chakra-ui/react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <Box
      maxW={1640}
      mx="auto"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={4}
    >
      {/* Left side */}
      <Box display="flex" alignItems="center">
        <Box onClick={() => setNav(!nav)} cursor="pointer">
          <AiOutlineMenu size={30} />
        </Box>
        <Text fontSize={{ base: "2xl", sm: "3xl", lg: "4xl" }} px={2}>
          Best <span style={{ fontWeight: "bold" }}>Eats</span>
        </Text>
        <Box
          display={{ base: "none", lg: "flex" }}
          alignItems="center"
          bgColor="gray.300"
          rounded="full"
          p={1}
          fontSize={14}
        >
          <Text textColor="white" bgColor="black" rounded="full" p={2}>
            Delivery
          </Text>
          <Text p={2}>Pickup</Text>
        </Box>
      </Box>

      {/* Search Input */}
      <Box
        bgColor="gray.300"
        rounded="full"
        display="flex"
        alignItems="center"
        px={2}
        w={{ base: 200, sm: 400, lg: 500 }}
      >
        <AiOutlineSearch size={25} />
        <Input
          bgColor="transparent"
          p={2}
          w="full"
          borderColor="transparent"
          focusBorderColor="transparent"
          type="text"
          placeholder="Search foods"
        />
      </Box>
      {/* Cart button */}
      <Box
        bgColor="black"
        textColor="white"
        display={{ base: "none", md: "flex" }}
        alignItems="center"
        py={2}
        px={5}
        rounded="xl"
      >
        <BsFillCartFill size={20} className="mr-2" /> Cart
      </Box>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <Box
          bgColor="blackAlpha.100"
          pos="fixed"
          w="full"
          h="full"
          zIndex={10}
          top={0}
          left={0}
        ></Box>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
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
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </ListItem>
            <ListItem fontSize="xl" py={4}>
              <MdFavorite size={25} className="mr-4" /> Favorites
            </ListItem>
            <ListItem fontSize="xl" py={4}>
              <FaWallet size={25} className="mr-4" /> Wallet
            </ListItem>
            <ListItem fontSize="xl" py={4}>
              <MdHelp size={25} className="mr-4" /> Help
            </ListItem>
            <ListItem fontSize="xl" py={4}>
              <AiFillTag size={25} className="mr-4" /> Promotions
            </ListItem>
            <ListItem fontSize="xl" py={4}>
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </ListItem>
            <ListItem fontSize="xl" py={4}>
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </ListItem>
          </UnorderedList>
        </nav>
      </Box>
    </Box>
  );
};

export default Navbar;
