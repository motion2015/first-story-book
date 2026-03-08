import { ToDoList } from "../../components/templates/ToDoList";

export const ToDoListPage = () => {
    const toDoList = ["리액트 공부하기", "스토리북 공부하기", "테스트 코드 작성하기"];
  return <ToDoList toDoList={toDoList} />;
};
