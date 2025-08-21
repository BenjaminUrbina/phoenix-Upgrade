import { Card, Image } from "react-bootstrap";
import "./noticias.css";
import img_unknown from "../../assets/unkwnown_image.png";

type Props = {};

function NewNoticiasCard({}: Props) {
  return (
    <Card>
      <Card.Body className="body-card">
        <Card.Title className="title-noticia">Titulo de la noticia</Card.Title>
        <Image src={img_unknown}></Image>
        <Card.Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
          quos.
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default NewNoticiasCard;
