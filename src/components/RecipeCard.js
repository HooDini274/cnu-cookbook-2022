import { Link } from 'react-router-dom';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

import placeholder from '../images/food-placeholder.png';

// const obj = {
//   a: "1",
//   b: "2",
//   c: "3"
// }

// const { a, b, c } = obj;

export function RecipeCard({ title, preparationTime, slug }) {
  return (
    <Card className="h-100">
      <Link to={`/recipe/${slug}`}>
        <CardImg src={placeholder} />
      </Link>
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{preparationTime} min</CardSubtitle>
      </CardBody>
    </Card>
  );
}
