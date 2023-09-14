import PropTypes from 'prop-types'

const Cart = ({actors,salaries,removeHandler,remaining}) => {

      return (
            <div className=' text-left basis-2/3 h-screen sticky top-10 bg-[#000000ba] space-y-4'>
                  <h2 className="text-2xl text-center font-bold py-3">Cart</h2>
                  <div className='w-[80%] mx-auto space-y-3'>
                  <h2 className='text-center'>Remaining: {remaining}</h2>
                  <h2 className='text-center'>Total Cost {salaries}</h2>
                  <ol >
                  {actors.map((actor,idx) => <li key={idx} className='flex justify-between items-center my-3 bg-white p-3 rounded-lg text-black'>{actor.name} <button onClick={()=> removeHandler(actor)} className='p-2 bg-red-400 text-white rounded-lg'>Remove</button></li>)}
                  </ol>
                  </div>
            </div>
      );
};



PropTypes
export default Cart;