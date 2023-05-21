
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
   const loadedData = useLoaderData()
      console.log(loadedData);
   const {_id, price, description, quantity} = loadedData

   const handleUpdateData = event => {
    event.preventDefault();

    const form = event.target;
    const price = form.price.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const updateData = {price, quantity, description}
    console.log(updateData);
      
    fetch(`http://localhost:5000/example/${_id}`, {
      method: 'PUT',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(updateData)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.modifiedCount > 0){
          Swal.fire({
            title: 'Success!',
            text: 'Data Updated Successfully',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
        }
      })

   }
  return (
    <div>
      
      <form  onSubmit={handleUpdateData} className="m-4 p-2" >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              defaultValue={price}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Quantity</span>
            </label>
            <input
              type="text"
              name="quantity"
              defaultValue={quantity}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              defaultValue={description}
              name="description"
              className="input input-bordered"
            />
          </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Info"
          />
        </div>
        </div>
      </form>

    </div>
  );
};

export default Update;