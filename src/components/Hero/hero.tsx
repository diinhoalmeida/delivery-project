import { Box, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Box maxW={1640} mx="auto" p={4} data-testid="hero-box">
      <Box maxH={500} pos="relative">
        {/* Overlay */}
        <Box
          pos="absolute"
          w="full"
          h="full"
          textColor="gray.400"
          maxH={500}
          bgColor="blackAlpha.100"
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Text px={4} fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}>
            The <span style={{ color: "#DD6B20" }}>Best</span>
          </Text>
          <Text px={4} fontSize={{ base: "4xl", sm: "5xl", md: "6xl" }}>
            {" "}
            <span style={{ color: "#DD6B20" }}>Foods</span> Devlivered
          </Text>
        </Box>
        <Image
          w="full"
          maxH={500}
          objectFit="cover"
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="hamburguer image banner"
        />
      </Box>
    </Box>
  );
};

export default Hero;
