import { Star, StarOff } from 'lucide-react';
import { FC, JSX } from 'react'

interface DynamicStarsProps {
  rating: number,
}

const DynamicStars: FC<DynamicStarsProps> = ({ rating }) => {

    const stars: JSX.Element[] = []

    for (let i = 1; i <= 5; i++) {
        if( rating >= i ){
            stars.push(<Star key={i}/>)
        } else {
            stars.push(<StarOff key={i}/>)
        }
    } 

    return <span className="flex gap-1">{stars}</span>
}

export default DynamicStars