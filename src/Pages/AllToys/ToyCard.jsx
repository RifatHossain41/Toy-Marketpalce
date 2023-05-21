import { Link } from "react-router-dom";


const ToyCard = ({example}) => {
  const { _id, name, quantity, sellerName, category, price} = example;
  console.log(example)
  return (
    <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>{sellerName}</td>
        <td>{category}</td>
        <Link to={`/toydetails/${_id}`}>
         <td><button  className="btn btn-sm btn-info">View Details</button></td>
        </Link>
      </tr>
  );
};

export default ToyCard;