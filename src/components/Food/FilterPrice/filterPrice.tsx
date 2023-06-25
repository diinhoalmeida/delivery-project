import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { DataItems } from "../../../data/data";

interface FilterPriceProps {
  setFoods: (arg: DataItems[]) => void;
  data: DataItems[];
}

const FilterPrice = ({ setFoods, data }: FilterPriceProps) => {
  const filterPrice = (price: string) => {
    setFoods(data.filter((item) => item.price === price));
  };

  return (
    <Box>
      <Text fontWeight="bold" textColor="gray.500">
        Filter Price
      </Text>
      <Flex justifyContent="space-between" maxW={390} w="full">
        <Button
          onClick={() => filterPrice("$")}
          m={1}
          borderColor="#DD6B20"
          textColor="#DD6B20"
          _hover={{ bgColor: "#DD6B20", textColor: "white" }}
        >
          $
        </Button>
        <Button
          onClick={() => filterPrice("$$")}
          m={1}
          borderColor="#DD6B20"
          textColor="#DD6B20"
          _hover={{ bgColor: "#DD6B20", textColor: "white" }}
        >
          $$
        </Button>
        <Button
          onClick={() => filterPrice("$$$")}
          m={1}
          borderColor="#DD6B20"
          textColor="#DD6B20"
          _hover={{ bgColor: "#DD6B20", textColor: "white" }}
        >
          $$$
        </Button>
        <Button
          onClick={() => filterPrice("$$$$")}
          m={1}
          borderColor="#DD6B20"
          textColor="#DD6B20"
          _hover={{ bgColor: "#DD6B20", textColor: "white" }}
        >
          $$$$
        </Button>
      </Flex>
    </Box>
  );
};

export default FilterPrice;
