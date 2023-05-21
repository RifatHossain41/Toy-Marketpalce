import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import UpdedToys from "./UpdedToys";


const MyToys = () => {
  const { user } = useContext(AuthContext)
  const email = user.email
  const [values, setValues] = useState([])

  useEffect(() => {
    fetch(`http://localhost:5000/mytoys/${email}`)
    .then( res => res.json())
    .then(data => setValues(data))
  }, [])
  console.log(values)
  return (
    <div>
     <div className="overflow-x-auto m-5">
        <table className="table border w-full">
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>SellerName</th>
              <th>Category</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
           {
           values.map(value => <UpdedToys
            key={value._id}
            value={value}
           ></UpdedToys>)
           }
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyToys;