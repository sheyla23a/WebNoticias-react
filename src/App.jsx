import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FormularioNoticias from "./components/FormularioNoticias"
import { Container } from "react-bootstrap";

function App() {
  return (
    <>
      <h1 className="text-center mt-4">Noticias</h1>
      <hr />
     <Container>
      <FormularioNoticias></FormularioNoticias>
     </Container>
    </>
  );
}

export default App;
