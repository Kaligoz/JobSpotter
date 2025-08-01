import Image from 'next/image';
import { CiLocationOn, CiHeart } from "react-icons/ci";
import { FC } from 'react';
import { Button } from '../ui/button';

interface OfferCardProps {
  coverImage: string;
  payment: string;
  nameOfJob: string;
  distance: string;
  description: string;
}

const OfferCard: FC<OfferCardProps> = ({ coverImage, payment, nameOfJob, distance, description}) => {
  return (
    <div className='bg-[#E3E9ED] rounded-lg w-[600px]'>
        <div className='flex flex-row gap-4 m-4'>
            <Image src={coverImage} alt='cover image for a job offer' width={194} height={194}/>
            <div className='flex flex-col justify-center items-center'>
                <h4 className='font-semibold text-xl'>{nameOfJob}</h4>
                <p className='font-medium text-[#12181C80]'>
                    {description}
                </p>
            </div>
        </div>
        <div className='flex flex-row items-center justify-between m-4 gap-2'>
            <p className='text-xl text-center'>зп: <span className='font-bold'>{payment}₴ - день</span></p>
            <div className='flex flex-row items-center gap-2'>
                <CiLocationOn className='w-[20px] h-[20px] border border-[#444969] rounded-sm'/>
                <p className='font-normal text-[#444969]'>{distance} км від вас</p>
                <CiHeart className='w-[20px] h-[20px] border border-[#444969] rounded-sm'/>
                <Button className='bg-[#969BBB] text-[#444969]'>+ Відгукнутись</Button>
            </div>
        </div>
    </div>
  );
}

export default OfferCard