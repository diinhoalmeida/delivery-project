import { Box, Button, Grid, Image, Text } from "@chakra-ui/react";

const HeadlineCards = () => {
  return (
    <Grid
      maxW={1640}
      mx="auto"
      p={4}
      py={12}
      templateColumns={{ base: "grid", md: "repeat(4, 1fr)" }}
      gap={6}
    >
      {/* Card */}
      <Box rounded="xl" pos="relative">
        {/* Overlay */}
        <Box
          pos="absolute"
          w="full"
          h="full"
          bgColor="blackAlpha.100"
          rounded="xl"
          textColor="white"
        >
          <Text fontWeight="bold" fontSize="2xl" px={2} pt={4}>
            Sun's Out, BOGO's Out
          </Text>
          <Text px={2}>Through 8/26</Text>
          <Button
            borderColor="white"
            bgColor="white"
            textColor="black"
            mx={2}
            pos="absolute"
            bottom={4}
          >
            Order Now
          </Button>
        </Box>
        <Image
          maxH={{ base: 160, md: 200 }}
          w="full"
          objectFit="cover"
          rounded="xl"
          src="https://images.unsplash.com/photo-1613769049987-b31b641f25b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fGJyZWFrZmFzdHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </Box>
      {/* Card */}
      <Box rounded="xl" position="relative">
        {/* Overlay */}
        <Box
          pos="absolute"
          w="full"
          h="full"
          bgColor="blackAlpha.200"
          rounded="xl"
          textColor="white"
        >
          <Text fontWeight="bold" fontSize="2xl" px={2} pt={4}>
            New Restaurants
          </Text>
          <Text px={2}>Added Daily</Text>
          <Button
            borderColor="white"
            bgColor="white"
            textColor="black"
            mx={2}
            pos="absolute"
            bottom={4}
          >
            Order Now
          </Button>
        </Box>
        <Image
          maxH={{ base: 160, md: 200 }}
          w="full"
          objectFit="cover"
          rounded="xl"
          src="https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJicXxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </Box>
      {/* Card */}
      <Box rounded="xl" position="relative">
        {/* Overlay */}
        <Box
          pos="absolute"
          w="full"
          h="full"
          bgColor="blackAlpha.200"
          rounded="xl"
          textColor="white"
        >
          <Text fontWeight="bold" fontSize="2xl" px={2} pt={4}>
            We Deliver Desserts Too
          </Text>
          <Text px={2}>Tasty Treats</Text>
          <Button
            borderColor="white"
            bgColor="white"
            textColor="black"
            mx={2}
            pos="absolute"
            bottom={4}
          >
            Order Now
          </Button>
        </Box>
        <Image
          maxH={{ base: 160, md: 200 }}
          w="full"
          objectFit="cover"
          rounded="xl"
          src="https://images.unsplash.com/photo-1559715745-e1b33a271c8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGRlc3NlcnR8ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
          alt="/"
        />
      </Box>
    </Grid>
  );
};

export default HeadlineCards;
