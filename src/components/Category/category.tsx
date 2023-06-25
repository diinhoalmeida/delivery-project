import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import { categories } from "../../data/data.js";

const Category = () => {
  return (
    <Box maxW={1640} m="auto" px={4} py={12}>
      <Text color="#DD6B20" fontWeight="bold" fontSize="4xl" textAlign="center">
        Top Rated Menu Items
      </Text>
      {/* Categories */}
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(4, 1fr)" }}
        gap={6}
        py={6}
      >
        {categories.map((item, index) => (
          <Flex
            bgColor="gray.100"
            rounded="lg"
            p={4}
            justifyContent="space-between"
            alignItems="center"
            key={index}
          >
            <Text fontWeight="bold" fontSize={{ sm: "xl" }}>
              {item.name}
            </Text>
            <Image w={20} src={item.image} alt={item.name} />
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default Category;
