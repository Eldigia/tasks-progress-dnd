import { Flex, Text } from "@chakra-ui/react";
import { DragDropContext, Droppable, DropResult } from "react-beautiful-dnd";
import { Task } from "./components/Task";
import { TaskInput } from "./components/TaskInput";
import { useTasksContext } from "./context/TasksContext";

function App() {
  const { data } = useTasksContext();

  const onDragEnd = (result: DropResult) => {
    console.log(result);
    // const { tasks, setTasks } = useTasksContext();
    // const { destination, source, draggableId } = result;
    // if (!destination) {
    //   return;
    // }
    // if (destination.droppableId === source.droppableId && destination.index === source.index) {
    //   return;
    // }
    // const sourceColIndex = tasks.findIndex((e) => e.id === source.droppableId);
    // const destinationColIndex = tasks.findIndex((e) => e.id === destination.droppableId);
    // const sourceCol = tasks[sourceColIndex];
    // const destinationCol = tasks[destinationColIndex];
    // {
    //   console.log(sourceCol);
    // }
    // const sourceTask = [...sourceCol.id];
    // const destinationTask = [...destinationCol.task];
    // const [removed] = sourceTask.splice(source.index, 1);
    // destinationTask.splice(destination.index, 0, removed);
    // tasks[sourceColIndex].task = sourceTask;
    // tasks[destinationColIndex].task = destinationTask;
    // setTasks(tasks);
    // const column = this.state.columns[source.droppableId];
    // const newTaskIds = Array.from(column.taskIds);
    // newTaskIds.splice(source.index, 1);
    // newTaskIds.splice(destination.index, 0, draggableId);
    // const newColumn = {
    //   ...column,
    //   taskIds: newTaskIds,
    // };
    // const newState = {
    //   ...this.state,
    //   columns: {
    //     ...this.state.columns,
    //     [newColumn.id]: newColumn,
    //   },
    // };
    // this.setState(newState);
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
                      <Task key={data.id} index={dataIndex} id={data.id} task={data.task} />
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
