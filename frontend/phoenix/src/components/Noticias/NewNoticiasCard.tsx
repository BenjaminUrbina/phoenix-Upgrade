import { Card } from "react-bootstrap";

type Props = {};

function NewNoticiasCard({ }: Props) {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Titulo de la noticia</Card.Title>
                <Card.Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default NewNoticiasCard;