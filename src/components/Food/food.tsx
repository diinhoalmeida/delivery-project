import { useState } from "react";
import { DataItems, data } from "../../data/data.ts";
import { Box, Flex, Grid, Image, Text } from "@chakra-ui/react";
import FilterType from "./FilterType/filterType.tsx";
import FilterPrice from "./FilterPrice/filterPrice.tsx";

const Food = () => {
  const [foods, setFoods] = useState<DataItems[]>(data);

  return (
    <Box maxW={1640} m="auto" px={4} py={12}>
      <Text
        textColor="#DD6B20"
        fontWeight="bold"
        fontSize="4xl"
        textAlign="center"
      >
        Top Rated Menu Items
      </Text>

      {/* Filter Row */}
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        justifyContent="space-between"
      >
        {/* Fliter Type */}
        <FilterType setFoods={setFoods} data={data} />

        {/* Filter Price */}
        <FilterPrice setFoods={setFoods} data={data} />
      </Flex>

      {/* Display foods */}
      <Grid
        templateColumns={{ base: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
        gap={6}
        pt={4}
      >
        {foods.map((item, index) => (
          <Box
            bgColor="white"
            shadow="lg"
            rounded="lg"
            key={index}
            _hover={{ transform: "scale(1.05)" }}
            transitionDuration="300ms"
          >
            <Image
              src={item.image}
              alt={item.name}
              w="full"
              h={200}
              objectFit="cover"
              roundedTop="lg"
            />
            <Flex justifyContent="space-between" px={2} py={4}>
              <Text fontWeight="bold">{item.name}</Text>
              <Text>
                <span
                  style={{
                    backgroundColor: "#DD6B20",
                    color: "white",
                    padding: 1,
                    borderRadius: 50,
                  }}
                >
                  {item.price}
                </span>
              </Text>
            </Flex>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Food;
