import Slider from 'components/Layout/Slider';
import Link from 'next/link'

export default function HouseList({houseList}) {
    const hList = houseList ? 
        houseList.map(house => 
            <Link href={`/bostad/${house.id}`} >
                <a>
                    <img style={{width: "100%"}} src={`${process.env.api_domain}${house.images[0]}`} />
                </a>
            </Link>
        )
        : [];
    return(
       <Slider slides={hList} />
    );
}