const Card = ({ title, description, image, price }) => {
  return (
    <div >
      <h3 >{title}</h3>
      <div>
        <img src={image} alt={title} />
      </div>
      <p >{description}</p>
      <p >$ {price}</p>
    </div>
  );
};

export default Card;
