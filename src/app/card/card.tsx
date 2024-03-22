import Image from "next/image"

interface CardProps {
  image: string
  title: string
}

const Card: React.FC<CardProps> = ({image, title}) => {
  return (
    <div className="bg-white rounded-lg shadow-xl p-4 flex flex-col transition-transform duration-300 hover:scale-95 cursor-pointer">
      <div className="mb-4 flex justify-center overflow-hidden aspect-square">
        <Image
          src={image}
          alt={title}
          width={250}
          height={290}
          className="rounded-lg object-contain w-full h-full object-center"
        />
      </div>
      <div className="mb-0 flex flex-col flex-grow">
        <h2 className="text-lg font-semibold flex-grow">{title}</h2>
        <p className=" text-left">
          Sign in or create an account to see pricing
        </p>
      </div>
    </div>
  )
}

export default Card
