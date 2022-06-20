import { Flex } from "@chakra-ui/react";
import { DayTasks } from "./components/DayTasks";
import { Tasks } from "./components/Tasks";

function App() {
  return (
    <Flex m="20" flexDir="row">
      <DayTasks />
      <Tasks />
    </Flex>
  );
}

export default App;
