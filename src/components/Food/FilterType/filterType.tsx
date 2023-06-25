import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { DataItems } from "../../../data/data";

interface FilterTypeProps {
  setFoods: (arg: DataItems[]) => void;
  data: DataItems[];
}

const FilterType = ({ setFoods, data }: FilterTypeProps) => {
  const filterType = (category: string) => {
    setFoods(data.filter((item) => item.category === category));
  };

  return (
    <Box>
      <Text fontWeight="bold" textColor="gray.400">
        Filter Type
      </Text>
      <Flex justifyContent="space-between" flexWrap="wrap">
        <Button
          onClick={() => setFoods(data)}
          m={1}
          borderColor="#DD6B20"
          textColor="#DD6B20"
          _hover={{ bgColor: "#DD6B20", textColor: "white" }}
        >
          All
        </Button>
        <Button
          onClick={() => filterType("burger")}
          m={1}
          borderColor="#DD6B20"
          textColor="#DD6B20"
          _hover={{ bgColor: "#DD6B20", textColor: "white" }}
        >
          Burgers
        </Button>
        <Button
          onClick={() => filterType("pizza")}
          m={1}
          borderColor="#DD6B20"
          textColor="#DD6B20"
          _hover={{ bgColor: "#DD6B20", textColor: "white" }}
        >
          Pizza
        </Button>
        <Button
          onClick={() => filterType("salad")}
          m={1}
          borderColor="#DD6B20"
          textColor="#DD6B20"
          _hover={{ bgColor: "#DD6B20", textColor: "white" }}
        >
          Salads
        </Button>
        <Button
          onClick={() => filterType("chicken")}
          m={1}
          borderColor="#DD6B20"
          textColor="#DD6B20"
          _hover={{ bgColor: "#DD6B20", textColor: "white" }}
        >
          Chicken
        </Button>
      </Flex>
    </Box>
  );
};

export default FilterType;
