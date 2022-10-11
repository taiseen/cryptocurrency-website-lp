import { IoIosArrowForward } from "react-icons/io";

const CurrencyItem = ({ currency = {}, itemName = '', setItemName }) => {

    const { image, name, abbr, description } = currency || {};

    return (
        <div
            onClick={() => setItemName(name)}
            className={`${itemName === name ? 'bg-violet text-white' : 'bg-white'}
            w-full rounded-2xl py-12 px-6 shadow-primary cursor-pointer transition duration-300`}
        >

            <div className='flex flex-col justify-center items-center'>

                <img src={image} alt="" className='mb-12' />

                <div className='mb-4 flex items-center gap-x-2'>
                    <h2 className='text-[32px] font-bold'>{name}</h2>
                    <p className='text-lg text-gray-400 font-medium'>{abbr}</p>
                </div>

                <p className='mb-6 text-center'>{description}</p>

                <button className={`${itemName === name
                    ? 'bg-blue text-white border-none pl-8 pr-6 gap-x-3 hover:bg-blue-hover'
                    : 'text-blue w-16'} 
                    border-2 border-gray-200 rounded-full h-16 flex items-center justify-center`}
                >

                    {itemName === name && <p className="text-lg font-medium">Start Mining</p>}

                    <IoIosArrowForward className={`${itemName === name ? 'text-2xl' : 'text-3xl'}`} />
                </button>

            </div>

        </div>
    )
}

export default CurrencyItem