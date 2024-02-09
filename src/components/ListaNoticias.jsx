import Noticias from './Noticias';

const ListaNoticias = ({ noticias }) => {
  return (
    <div>
      <h2 className="text-center fw-bold pt-5">Últimas Noticias</h2>
      <div className="container my-5">
        <div className="row justify-content-center">
          {noticias && Array.isArray(noticias) && noticias.length > 0 ? (
            noticias.map((noticia, index) => (
              <div key={index} className="col-12 col-md-6 col-lg-4 mb-3">
                <Noticias noticia={noticia} />
              </div>
            ))
          ) : (
            <p className="col-12 text-center">No hay noticias disponibles.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ListaNoticias;
