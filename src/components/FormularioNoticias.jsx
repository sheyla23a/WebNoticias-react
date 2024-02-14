import { useState,useEffect } from "react";
import { Container, Form } from "react-bootstrap";
import ListaNoticias from "./ListaNoticias";

const FormularioNoticias = () => {
  const [categoria, setCategoria] = useState("business");
  const [noticias, setNoticias] = useState([]);

  const url = `https://newsdata.io/api/1/news?apikey=pub_3792983f382da421d03c01863e7b50f5b0c3e&&country=us&category=${categoria}`

  useEffect(() => {
    const consultarAPI = async () => {
      const respuesta = await fetch(url);
      const data = await respuesta.json();
      console.log(data);
      setNoticias(data.results);
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
