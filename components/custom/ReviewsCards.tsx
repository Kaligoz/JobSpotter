import Image from 'next/image';
import { FC } from 'react'

interface ReviewsCardsProps {
  coverImage: string,
  name: string,
  message: string,
  stars: string,
}

const ReviewsCards: FC<ReviewsCardsProps> = ({coverImage, name, message, stars}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="bg-[#B3C6CC] rounded-md p-4 text-center flex items-center justify-center relative mb-4">
        <p>{message}</p>
        <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-full w-0 h-0 border-x-8 border-x-transparent border-t-12 border-t-[#B3C6CC]"></div>
        <div className="absolute left-1/2 bottom-0 translate-x-[-50%] translate-y-full w-0 h-0 border-x-7 border-x-transparent border-t-11 border-t-[#B3C6CC]"></div>
      </div>
      <Image 
        src={coverImage}
        alt="Profile picture of the person who left the review"
        width={100}
        height={100}
        className="rounded-full w-[100px] h-[100px] object-cover mb-2"
      />
      <h4 className="text-xl">
        {name}
      </h4>
      <p>
        {stars}
      </p>
    </div>
  );
}

export default ReviewsCards