import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `${process.env.NEXT_PUBLIC_API_DOMAIN}${src}?w=${width}&q=${quality || 75}`;
  }
  
const ImageWrapper = (props) => {
    let imgProps = {
        src: props.src,
        width: props.width,
        height: props.height,
        layout: props.layout    }

    if (!props.local){
        imgProps.loader = myLoader;
    }

    return (
        <>
            <Image alt={props.alt} {...imgProps} />
        </>
    )
}

export default ImageWrapper;