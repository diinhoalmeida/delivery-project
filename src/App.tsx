import { Box } from "@chakra-ui/react";
import { NavBar } from "./components";
import Hero from "./components/Hero/hero";
import HeadlineCards from "./components/HeadlineCards/HeadlineCards";
import Food from "./components/Food/food";
import Category from "./components/Category/category";

function App() {
  return (
    <Box>
      <NavBar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </Box>
  );
}

export default App;
