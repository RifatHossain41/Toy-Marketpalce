import { useLoaderData } from "react-router-dom";

const ToyDetails = () => {
  const details = useLoaderData();
  const { name, sellerName, email, price, rating, quantity, photo, description} = details
  console.log(details);
  return (
    <div>
      <div className="card mx-auto w-1/2 mt-5 mb-5 glass">
        <figure>
          <img src={photo} alt="" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>SellerName: {sellerName}</p>
          <p>Email: {email}</p>
          <p>Price: ${price}</p>
          <p>Rating: {rating}</p>
          <p>Quantity: {quantity}</p>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ToyDetails;
