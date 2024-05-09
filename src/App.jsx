import { Button, Form } from "react-bootstrap";
import "./App.css";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ListItem = styled.li`
  cursor: pointer;
`;

function App() {
  const [todoInput, setTodoInput] = useState("");

  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    setTodos([...todos, todoInput]);
    setTodoInput("");
  };

  return (
    <>
      <Wrapper>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Hedef  </Form.Label>
            <Form.Control
              value={todoInput}
              onChange={(e) => {
                setTodoInput(e.target.value);
              }}
              type="text"
            />
          </Form.Group>
        </Form>
        <Button onClick={addTodo}>Ekle</Button>
      </Wrapper>
      <ul>
        {todos.map((todo) => (
          <ListItem
            onClick={() => {
              setTodos(todos.filter((filterTodo) => filterTodo !== todo));
            }}
            key={todo}
          >
            {todo}
          </ListItem>
        ))}
      </ul>
    </>
  );
}

export default App;
