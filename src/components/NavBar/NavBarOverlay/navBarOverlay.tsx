import { Box } from "@chakra-ui/react";

function NavBarOverlay() {
  return (
    <Box
      bgColor="blackAlpha.300"
      pos="fixed"
      w="full"
      h="full"
      zIndex={10}
      top={0}
      left={0}
    ></Box>
  );
}

export default NavBarOverlay;
