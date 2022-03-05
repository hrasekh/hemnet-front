
const HouseThumbnail = ({house}) => {
        
    return (    
        <a key={house.id} href="#">
           <img src={`${process.env.api_domain}${house.images[0]}`} />
        </a> 
    )
}
export default HouseThumbnail;