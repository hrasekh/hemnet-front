import Slider from 'components/Layout/Slider';
import HouseThumbnail from '../HouseThumbnail';

export default function HouseList({houseList}) {
    const hList = houseList ? 
        houseList.map(house => 
            <HouseThumbnail house={house} />
        )
        : [];
    return(
       <Slider slides={hList} />
    );
}