import { Card } from 'react-bootstrap';

const Noticias = ({ noticia }) => {
  const { image_url, title, description, creator } = noticia;

  return (
    <Card className="w-100 h-100 d-flex flex-column">
      {image_url && (
        <Card.Img
          variant="top"
          src={image_url}
          alt={`Imagen de la noticia ${title}`}
          className="img-fluid"
        />
      )}

      <Card.Body className="d-flex flex-column">
        <Card.Title className="text-warning py-2">{title}</Card.Title>
        <Card.Subtitle className="pb-2">{creator}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>

      <Card.Footer className="mt-auto">
        <a
          className="btn btn-outline-warning w-100 text-uppercase fw-bold"
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

