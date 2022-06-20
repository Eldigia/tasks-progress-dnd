import { Divider, Flex, Text } from "@chakra-ui/react";
import React from "react";

export const DayTasks = () => {
  const hours = [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

  return (
    <Flex w="60%" boxShadow="base" p="5" mr="10">
      <Flex flexDir="column" alignItems="end" w="8%" mr="5">
        {hours.map((hour) => {
          return (
            <Flex flexDir="column" alignItems="end">
              <Text fontSize="1.2rem">{hour + ":00"}</Text>
              <Divider w="50%" />
              <Divider mt="2" w="50%" />
              <Divider mt="2" w="50%" />
              <Divider mt="2" w="50%" />
              <Divider mt="2" w="50%" />
            </Flex>
          );
        })}
        <Text fontSize="1.2rem">{"22:00"}</Text>
      </Flex>
      <Divider orientation="vertical" />
      <Flex w="92%">Here your tasks will be</Flex>
    </Flex>
  );
};
