

const UpdedToys = ({value}) => {
  const { _id, name, quantity, sellerName, category, price, description} = value;
  return (
       <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>{sellerName}</td>
        <td>{category}</td>
        <td>{description}</td>
        <td><button className="btn btn-warning">Edit</button></td>
      </tr>

  );
};

export default UpdedToys;