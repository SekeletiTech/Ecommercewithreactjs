import { offer } from "../assets/images";
import Button from "../Components/Button";

const SpecialOffer = () => {
    return (
        <section className="flex justify-wrap items-center 
                            max-xl:flex-col-reverse
                            gap-10 flex-container">
            <div className="flex-1">
                <img
                    src={offer} width={773} height={687}
                    className="object-contain w-full"
                />

            </div>


            <div className="flex flex-1 flex-col">

                <h2 className='mt-10 font-palanquin text-4xl
                capitalize font-bold lg:max-w-lg'>

                    <span className='text-coral-red
                        inline-block mt-3 mr-2'>
                        Special </span>Offer
                </h2>

                <p className=' mt-4 lg:max-w-lg info-text
                '>Ensuring premium comfort and style,
                    our meticulously crafted footwear is designed
                    to elevate your experience, providing you with
                    unmatched quality, innovation and a touch of
                    elegance
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                    Our dedication to detail and ensures your satisfaction
                </p>

                <div className="mt-11">

                    <Button label="Show Details" />
                </div>

            </div>

        </section>
    )
}

export default SpecialOffer
