import { useNavigate } from "react-router-dom";

function About(props) {
  const { programs, aliances } = props;
  const history = useNavigate();
  return (
    <>
      <h1>Página about</h1>
      <p>Somos una página de ventas</p>
      {programs && <p>Tenemos programas de entrenamiento en ventas</p>}
      {aliances && <p>Nuestros aliados son Vass</p>}
      <button onClick={() => history(-1)}>Atras</button>
    </>
  );
}

export default About;
