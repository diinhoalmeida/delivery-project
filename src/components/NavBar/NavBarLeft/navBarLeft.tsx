import { Box, Text } from "@chakra-ui/layout";
import { AiOutlineMenu } from "react-icons/ai";

interface NavBarLeftProps {
  nav: boolean;
  setNav: (arg: boolean) => void;
  id: string;
}

function NavBarLeft({ nav, setNav, id }: NavBarLeftProps) {
  return (
    <Box
      onClick={() => setNav(!nav)}
      display="flex"
      alignItems="center"
      data-testid={id}
    >
      <Box cursor="pointer">
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
  );
}

export default NavBarLeft;
