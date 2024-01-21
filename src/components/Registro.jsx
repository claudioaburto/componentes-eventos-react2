import SocialButton from "./SocialButton";
import Formulario from "./Formulario";

function Registro({ error, setError, color, setColor }) {
  return (
    <>
      <div className="card p-4">
        <h2>Crea una cuenta</h2>
        <div className="row justify-content-between px-4">
          <div className="col-md-3 col-xs-12 iconSocial">
            <a href="https://web.facebook.com/" target="_blank">
              <SocialButton icon="fa-brands fa-facebook fa-2x" />
            </a>
          </div>
          <div className="col-md-3 col-xs-12 iconSocial">
            <a href="https://github.com/" target="_blank">
              <SocialButton icon="fa-brands fa-github fa-2x" />
            </a>
          </div>
          <div className="col-md-3 col-xs-12 iconSocial">
            <a href="https://cl.linkedin.com/" target="_blank">
              <SocialButton icon="fa-brands fa-linkedin fa-2x" />
            </a>
          </div>
        </div>
        <p className="text-center">O usa un Email para registrarte</p>
        <Formulario
          color={color}
          setColor={setColor}
          error={error}
          setError={setError}
        />
      </div>
    </>
  );
}

export default Registro;
