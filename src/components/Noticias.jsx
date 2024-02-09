import { Card } from 'react-bootstrap';

const Noticias = ({ noticia }) => {
  const { urlToImage, url, title, description, source } = noticia;

  return (
    <Card className="w-100 h-100 d-flex flex-column">
      {urlToImage && (
        <Card.Img
          variant="top"
          src={urlToImage}
          alt={`Imagen de la noticia ${title}`}
          className="img-fluid"
        />
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-warning py-2">{title}</Card.Title>
        <Card.Subtitle className="pb-2">{source.name}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <Card.Footer className="mt-auto">
        <a
          className="btn btn-outline-warning w-100 text-uppercase fw-bold"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Leer Noticia
        </a>
      </Card.Footer>
    </Card>
  );
};

export default Noticias;

