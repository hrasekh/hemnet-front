import Link from "next/link";
import ImageWrapper from 'components/Image/ImageWrapper';

const BlogThumbnail = ({blog, imageAsBackground, height}) => {
    const imgUrl = `${process.env.NEXT_PUBLIC_API_DOMAIN}${blog?.image}`;
    return (    
        <Link href={`/blog/${blog?.id}`} >
            <a>
                <div style={{position:"relative"}}>
                {!imageAsBackground && 
                    <>
                        <ImageWrapper
                            src={imgUrl}
                            alt={`${blog?.title}`}
                            layout="fill"
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
                <h5 style={{width: "100%", textShadow: "#000 1px 1px 0", 
                            background: "inear-gradient(180deg,rgba(0,0,0,0) 0,rgba(0,0,0,.7))", 
                            fontSize: "0.9em", position: "absolute", 
                            padding: "15px 8px" ,bottom: 0, margin: 0, color: "white", 
                            textAlign: "left"}}>
                    {blog?.title}
                </h5>
            </div>
            </a>
        </Link>
    )
}
export default BlogThumbnail;