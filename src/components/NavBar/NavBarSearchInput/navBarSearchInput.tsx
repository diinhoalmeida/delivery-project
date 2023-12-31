import { Input } from "@chakra-ui/input";
import { Box } from "@chakra-ui/layout";
import { AiOutlineSearch } from "react-icons/ai";

interface NavBarSearchInputProps {
  id: string;
}

function NavBarSearchInput({ id }: NavBarSearchInputProps) {
  return (
    <Box
      bgColor="gray.300"
      rounded="full"
      display="flex"
      alignItems="center"
      px={2}
      data-testid={id}
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
  );
}

export default NavBarSearchInput;
