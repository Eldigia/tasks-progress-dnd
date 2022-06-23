import { Flex, Text } from "@chakra-ui/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Task } from "./components/Task";
import { TaskInput } from "./components/TaskInput";
import { useTasksContext } from "./context/TasksContext";

function App() {
  const { data, setData } = useTasksContext();

  const onDragEnd = (result: DropResult) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }
    let column = source.droppableId;
    let destinationColumn = destination.droppableId;
    let row = source.index;
    let destinationRow = destination.index;
    if (destinationColumn === column && destinationRow === row) {
      return;
    }
    let newData = [...data];
    let dragItem = newData[parseInt(column)].items[row];
    newData[parseInt(column)].items.splice(row, 1);
    newData[parseInt(destinationColumn)].items.splice(destinationRow, 0, dragItem);
    setData(newData);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Flex m="10">
        {data.map((section, sectionIndex) => (
          <Droppable droppableId={sectionIndex.toString()} key={section.name}>
            {(provided) => (
              <Flex
                {...provided.droppableProps}
                ref={provided.innerRef}
                m="5"
                w="100%"
                h="fit-content"
                bgGradient="linear(to-tl, #161F33, #103457 )"
                borderRadius="30px"
              >
                <Flex boxShadow="base" p="9" w="100%" flexDir="column">
                  <Flex>
                    <Text color="white" fontSize="2rem" fontWeight="bold">
                      {section.name}
                    </Text>
                  </Flex>
                  {section.name === "To do" ? <TaskInput /> : null}

                  <Flex pt="3" flexDir="column">
                    {section.items.map((data, dataIndex) => (
                      <Task columnId={sectionIndex} key={data.id} index={dataIndex} id={data.id} task={data.task} />
                    ))}
                    {provided.placeholder}
                  </Flex>
                </Flex>
              </Flex>
            )}
          </Droppable>
        ))}
      </Flex>
    </DragDropContext>
  );
}

export default App;
