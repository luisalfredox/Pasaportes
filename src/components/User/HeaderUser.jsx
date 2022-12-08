export const HeaderUser = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "PassPort APP"}
                  <span></span>
                </h1>
                <p>
                  {props.data
                    ? props.data.paragraph
                    : "Bienvenido a la mejor aplicacion de pasaporte."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};