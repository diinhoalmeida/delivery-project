import { Box } from "@chakra-ui/react";
import { NavBar } from "./components";
import Hero from "./components/Hero/hero";
import HeadlineCards from "./components/HeadlineCards/HeadlineCards";

function App() {
  return (
    <Box>
      <NavBar />
      <Hero />
      <HeadlineCards />
    </Box>
  );
}

export default App;
