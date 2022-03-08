import Link from "next/link";
import Image from 'next/image';

const HouseThumbnail = ({house, imageAsBackground, height}) => {
    const imgUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}${house.images[0]}`;
    return (    
        <Link href={`/bostad/${house.id}`} >
            <a>
                {!imageAsBackground && 
                    <>
                        <Image
                            src={imgUrl}
                            alt={`${house?.title}`}
                            layout="responsive"
                            height="70"
                            width="100"
                        />
                    </>
                }
                {imageAsBackground && 
                    <>
                        <div style={{ color: "red", 
                            backgroundSize:"cover", 
                            backgroundImage: `url(${imgUrl})`, 
                            width: "100%", height: `${height}` }} />
                    </>
                }
                <h5 style={{width: "100%", textShadow: "#000 1px 1px 0", background: "inear-gradient(180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.7))", fontSize: "0.9em", position: "absolute", padding: "15px 8px" ,bottom: 0, margin: 0, color: "white"}}>
                    {house.title}
                </h5>
            </a>
        </Link>
    )
}
export default HouseThumbnail;