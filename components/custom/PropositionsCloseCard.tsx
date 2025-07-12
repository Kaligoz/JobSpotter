import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface PropositionsCloseCardProps {
  coverPhoto: string,
  name: string,
  description: string,
  link:string,
}

const PropositionsCloseCard: FC<PropositionsCloseCardProps> = ({coverPhoto, name, description, link}) => {
  return (
    <div className="bg-[#B3C6CC80] rounded-md flex flex-col justify-center items-center p-4">
        <Image 
          src={coverPhoto}
          alt="Cover photo for a job listing"
          width={236}
          height={176}
          className="rounded-md mb-2"
        />
        <h3 className="text-xl font-semibold mb-2">
          {name}
        </h3>
        <p className="mb-2">
          {description}
        </p>
        <Link href={link} className="text-[#444969] underline text-lg font-semibold">Відгукнутись</Link>
    </div>
  );
}

export default PropositionsCloseCard