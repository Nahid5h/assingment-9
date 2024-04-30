import { Link } from "react-router-dom";

const Card = ({cardInfo}) => {
    // console.log(cardInfo)
   const {image, location,status,price,estate_title,id}=cardInfo;
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={image} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{estate_title}</h2>
    <p>{status} </p>
    <h1>{price} </h1>
    <h1>{location} </h1>
    <div className="card-actions justify-end">
    <Link to={`/Details/${id}`}> <button className="btn btn-primary">View Property</button></Link>
    </div>
  </div>
</div>
    );
};

export default Card;