
const Card = ({actor,addToCart}) => {
      const {name,role,image,salary} = actor;

      return (
            <div className="card space-y-3 m-3">
                  <img className="rounded-full w-24 mx-auto" src={image} alt="" />
                  <h2>{name}</h2>
                  <p>{role}</p>
                  <p>salary: ${salary}</p>
                  <button onClick={()=>addToCart(actor)} className="p-2 bg-[#f315798a] rounded-xl">learn more</button>
            </div>
      );
};

export default Card;