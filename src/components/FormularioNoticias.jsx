import { useState,useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticias = () => {
  const [categoria, setCategoria] = useState("general");
  const [noticias, setNoticias] = useState([]);

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=de7790c8316344f1aad516564e45553f`

  useEffect(() => {
    const consultarAPI = async () => {
      const respuesta = await fetch(url);
      const data = await respuesta.json();

      setNoticias(data.articles);
    };
    consultarAPI();
  }, [categoria]);

  const Categorias = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

  return (
    <>
      <Container className="border border-1 mt-5">
        <Form.Group className="mb-3 mt-3 d-flex flex-column flex-md-row p-md-4">
          <Form.Label className="w-50 ms-2 mb-2 mb-md-0 ">
            Busca por Categoría:
          </Form.Label>
          <Form.Select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {Categorias.map((categoria) => (
              <option key={categoria.value} value={categoria.value}>
                {categoria.label}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
        <ListaNoticias noticias={noticias}></ListaNoticias>
      </Container>
    </>
  );
};

export default FormularioNoticias;
