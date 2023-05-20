import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import ToyCard from "./ToyCard";


const AllToys = () => {
  const {user} = useContext(AuthContext)
  const [examples, setExamples] = useState([])


  const url = `http://localhost:5000/example`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setExamples(data));
  }, [url]);

  return (
    <div>
     <div className="overflow-x-auto m-5">
        <table className="table border w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>SellerName</th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              examples.map(example => <ToyCard
               key={example._id}
               example={example}
              ></ToyCard>)
            }
          </tbody>
        </table>
        
      </div>
    </div>
  );
};

export default AllToys;