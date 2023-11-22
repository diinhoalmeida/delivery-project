import { useState } from "react";
import { Box } from "@chakra-ui/react";
import NavbarLeft from "./NavBarLeft/navBarLeft";
import NavBarSearchInput from "./NavBarSearchInput/navBarSearchInput";
import NavBarCartButton from "./NavBarCartButton/navBarCartButton";
import NavBarOverlay from "./NavBarOverlay/navBarOverlay";
import NavBarSideDrawer from "./NavBarSideDrawer/navBarSideDrawer";

function NavBar() {
  const [nav, setNav] = useState<boolean>(false);

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
      <NavbarLeft nav={nav} setNav={setNav} id="navbar-left" />

      {/* Search Input */}
      <NavBarSearchInput id="search-input" />

      {/* Cart button */}
      <NavBarCartButton id="cart-button" />

      {/* Mobile Menu */}
      {nav && <NavBarOverlay id="navbar-overlay" />}

      {/* Side drawer menu */}
      <NavBarSideDrawer nav={nav} setNav={setNav} />
    </Box>
  );
}

export default NavBar;
