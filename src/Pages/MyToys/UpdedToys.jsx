import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";


const UpdedToys = ({value}) => {
  const { user } = useContext(AuthContext)
  const { _id, name, quantity, sellerName, category, price, description} = value;

  const handleDelete = _id => {
     console.log(_id);
     Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/example/${_id}`, {
          method: 'DELETE'
        })
          .then(res => res.json())
          .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
              Swal.fire(
                'Deleted!',
                'Your data has been deleted.',
                'success'
              )
            }
          })
      }
    })
  }
  return (
       <tr>
        <td>{name}</td>
        <td>${price}</td>
        <td>{quantity}</td>
        <td>{sellerName}</td>
        <td>{category}</td>
        <td>{description}</td>
        <Link to={`update/${_id}`}>
          <td><button className="btn btn-warning">Edit</button></td>
        </Link>
          <td><button onClick={() => handleDelete(_id)} className="btn btn-danger">Delete</button></td>
      </tr>

  );
};

export default UpdedToys;