import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";


const AddToys = () => {
  const { user } = useContext(AuthContext);
  const handleSubmit = event => {
    event.preventDefault();

    const form = event.target;
    const photo = form.photo.value;
    const name = form.name.value;
    const sellerName = form.sellerName.value;
    const email = user?.email;
    const price = form.price.value;
    const rating = form.rating.value;
    const quantity = form.quantity.value;
    const description = form.description.value;
    const category = form.category.value;
   const allData = {photo, name, sellerName, email, price, rating, quantity, description,category}
   console.log(allData);

   fetch('http://localhost:5000/example', {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(allData)
   })
     .then(res => res.json())
     .then(data => {
      console.log(data)
     })
  }

  return (
    <div>
     
      <form className="m-4 p-2" onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Seller Name</span>
            </label>
            <input
              type="text"
              name="sellerName"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              // defaultValue={user?.email}
              name="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="text"
              name="price"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="text"
              name="rating"
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
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="description"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <input
              type="text"
              name="category"
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control mt-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="Add Info"
          />
        </div>
      </form>
    </div>
  );
};

export default AddToys;
