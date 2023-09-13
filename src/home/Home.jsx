

import Card from './Card/Card';
import '../home/home.css'
const Home = ({allActors,addToCart}) => {

      return (
            <div className='flex flex-grow flex-wrap justiify-evenly'>
                 {
                  allActors.map(actor => <Card key={actor.id} actor={actor} addToCart={addToCart}></Card>)
                 }

            </div>
      );
};



export default Home