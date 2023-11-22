import { Box } from "@chakra-ui/react";

interface NavBarOverlayProps {
  id: string;
}

function NavBarOverlay({ id }: NavBarOverlayProps) {
  return (
    <Box
      bgColor="blackAlpha.300"
      pos="fixed"
      w="full"
      data-testid={id}
      h="full"
      zIndex={10}
      top={0}
      left={0}
    ></Box>
  );
}

export default NavBarOverlay;
