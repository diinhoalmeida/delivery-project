import { Box } from "@chakra-ui/layout";
import { BsFillCartFill } from "react-icons/bs";

interface NavBarCartButtonProps {
  id: string;
}

function NavBarCartButton({ id }: NavBarCartButtonProps) {
  return (
    <Box
      bgColor="black"
      data-testid={id}
      textColor="white"
      display={{ base: "none", md: "flex" }}
      alignItems="center"
      py={2}
      px={5}
      rounded="xl"
    >
      <BsFillCartFill size={20} className="mr-2" /> Cart
    </Box>
  );
}

export default NavBarCartButton;
