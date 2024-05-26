import React, { useState, useEffect } from "react";
import { Container, Text, VStack, Select, Box, Button, useToast } from "@chakra-ui/react";
import { FaBell } from "react-icons/fa";

const regions = {
  愛媛県松山市道後: ["2023-10-01", "2023-10-05", "2023-10-10"],
  愛媛県松山市三津: ["2023-10-02", "2023-10-06", "2023-10-11"],
  愛媛県松山市石手: ["2023-10-03", "2023-10-07", "2023-10-12"],
  愛媛県松山市久米: ["2023-10-04", "2023-10-08", "2023-10-13"],
  愛媛県松山市北条: ["2023-10-05", "2023-10-09", "2023-10-14"],
  Osaka: ["2023-10-02", "2023-10-06", "2023-10-11"],
};

const Index = () => {
  const [selectedRegion, setSelectedRegion] = useState("愛媛県松山市");
  const [collectionDates, setCollectionDates] = useState(regions["愛媛県松山市"]);
  const toast = useToast();

  useEffect(() => {
    setCollectionDates(regions[selectedRegion]);
  }, [selectedRegion]);

  const handleRegionChange = (event) => {
    setSelectedRegion(event.target.value);
  };

  const handleNotification = () => {
    toast({
      title: "Notification set!",
      description: "You will be notified the day before the collection day.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Text fontSize="2xl">ごみ収集カレンダー</Text>
        <Select value={selectedRegion} onChange={handleRegionChange}>
          {Object.keys(regions).map((region) => (
            <option key={region} value={region}>
              {region}
            </option>
          ))}
        </Select>
        <Box>
          {collectionDates.map((date) => (
            <Text key={date}>{date}</Text>
          ))}
        </Box>
        <Button leftIcon={<FaBell />} colorScheme="teal" onClick={handleNotification}>
          通知を設定
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
