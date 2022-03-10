import { useParams } from "react-router-dom";

function ContactUs() {
  const { method } = useParams();
  return (
    <>
      <h1>Página contacto</h1>
      <p>Para contactar con nosotros </p>
      {method === "email" ? (
        <p>usa este email: ventas@gmail.com</p>
      ) : (
        method === "telefono" && <p>usa este telefono 01 8000 44 44</p>
      )}
    </>
  );
}

export default ContactUs;
