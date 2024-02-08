import { useState,useEffect } from "react";
import { Container, Form } from "react-bootstrap";

const FormularioNoticias = () => {
  const [categoria, setCategoria] = useState();
  const [noticias, setNoticias] = useState([]);

  const url = `https://newsapi.org/v2/top-headlines?country=us&category=${categoria}&apiKey=de7790c8316344f1aad516564e45553f`;

  useEffect(() => {
    const consultarAPI = async () => {
      const respuesta = await fetch(url);
      const data = await respuesta.json();

      setNoticias(data.articles);
    };
    consultarAPI();
  }, [categoria]);

  const Categorias = [
    { value: "portada", label: "Portada" },
    { value: "ultimo momento", label: "Ultimo momento" },
    { value: "deportes", label: "Deportes" },
    { value: "politica", label: "Politica" },
    { value: "seguridad", label: "Seguridad" },
    { value: "economía", label: "Economía" },
    { value: "cultura", label: "Cultura" },
  ];

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
      </Container>
    </>
  );
};

export default FormularioNoticias;
