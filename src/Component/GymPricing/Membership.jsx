import { GiStarFormation } from 'react-icons/gi';
const Membership = ({plan}) => {
    const {membership_type,price,features} =plan;
    return (
        <div className="bg-slate-200 w-1/3 mr-6 ml-6 p-2 rounded-xl mt-5 flex flex-col pb-3 ">
            <p className="text-center mt-3 text-4xl font-bold text-red-600 rounded-lg p-2 bg-green-200 w-fit mx-auto"><span className='text-8xl'>{price}$</span>/Month</p>
          <div className='flex-grow'>
          {
                features.map(feature=> <li className="mt-4 ml-3 list-none flex items-center gap-2"><GiStarFormation className='text-blue-400'></GiStarFormation>{feature}</li>)
            }
          </div>
            <h1 className="text-4xl  font-semibold text-center  ">{membership_type}</h1>
            
            <button className="btn mt-6 bg-blue-600 text-white w-fit mx-auto">Buy Now</button>
        </div>
    );
};

export default Membership;