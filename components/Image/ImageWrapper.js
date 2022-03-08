import Image from 'next/image'

const myLoader = ({ src, width, quality }) => {
    return `http://127.0.0.1:3167/${src}?w=${width}&q=${quality || 75}`
  }
  
const ImageWrapper = (props) => {
    return (
        <Image
            loader={myLoader}
            src="/hemnet-logo.svg"
            alt="Hemnet"
            width={120}
            height={28}
            
        />
    )
}

export default ImageWrapper;