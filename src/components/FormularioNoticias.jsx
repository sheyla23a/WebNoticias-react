import { Container, Form } from "react-bootstrap";

const FormularioNoticias = () => {
  return (
    <>
      <Container className="border border-1 mt-5">
        <Form.Group className="mb-3 mt-3 d-flex flex-column flex-md-row p-md-4">
          <Form.Label className="w-50 ms-2 mb-2 mb-md-0 ">
            Busca por Categoría:
          </Form.Label>
          <Form.Select>
            <option>Opciones</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
      </Container>
    </>
  );
};

export default FormularioNoticias;
