import "bootstrap/dist/css/bootstrap.min.css";
import "./app.css";
import { Container } from "react-bootstrap";
import ColorForm from "./components/ColorForm";

function App() {
  return (
    <>
      <Container className="my-5 mainPage">
        <ColorForm></ColorForm>
      </Container>
      <footer className="bg-dark text-light text-center py-4">
        &copy; Todos los derechos reservados
      </footer>
    </>
  );
}

export default App;
