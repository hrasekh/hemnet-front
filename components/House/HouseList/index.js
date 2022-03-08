import Slider from 'components/Layout/Slider';
import HouseThumbnail from '../HouseThumbnail';

export default function HouseList({houseList}) {
    const hList = houseList ? 
        houseList.map((house, index) => 
            <HouseThumbnail house={house} key={`house-${index}`} />
        )
        : [];
    return(
       <Slider slides={hList} />
    );
}