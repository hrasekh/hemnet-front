import Head from 'next/head'
import { gql } from "@apollo/client";
import client from "apollo-client";
import Slider from 'components/Layout/Slider';
import { Col, Row } from 'reactstrap';
import UserContact from 'components/User/UserContact';
import ImageWrapper from 'components/Image/ImageWrapper';
import GoogleMap from 'components/GoogleMap';
import HrText from 'components/Layout/HrText';

export async function getServerSideProps(context) {
    const { pid } = context.params;
    const { data } = await client.query({
      query: gql`
        {
        house(id: ${pid}) {
          user {
            id
            name
            family
            email
            avatar
          }
          id
          title
          price
          biarea
          larea
          room
          year
          status
          category
          about
          images
        }
      }
      
      `,
    });
  
    return {
      props: {
        house: data?.house,
      },
   };
  }

export default function Bastad({house}) {
  
    const hList = house?.images ? 
      house.images.map((image, index) => 
          <ImageWrapper
            key={`image-${index}`}
            src={image} 
            alt={"image of house - hemnet"}
            layout="responsive"
            width="1000"
            height="700"
          />
          ) 
      : [];

    return (
      <>
        <Head>
          <title>{house.title}</title>
          <meta name="description" content="House Data " />
        </Head>

        <main>
          <Row>
            <Col md="8">
              <Slider slides={hList} spaceBetween={20} slidesPerView={1} />
              <div style={{marginTop: "10px"}}>
                <span style={{float: "right"}} >{house.price} Kr</span>
                <h1>{house.title}</h1>
              </div>
              <hr />
              <Row>
                <Col md="7">{house.about}</Col>
                <Col md="5">
                  <Row>
                    <Col md="6">
                      <i style={{color: "gray", fontSize: "0.8em"}}>Housing type</i>
                    </Col>
                    <Col md="6">
                      <span>{house.category}</span>
                    </Col>      
                    <Col md="6">
                      <i style={{color: "gray", fontSize: "0.8em"}}>Number of rooms</i>
                      </Col>
                    <Col md="6">
                      <span>{house.room}</span>
                    </Col>      
                    <Col md="6">
                      <i style={{color: "gray", fontSize: "0.8em"}}>Boarea</i>
                      </Col>
                    <Col md="6">
                      <span>{house.biarea}</span>
                    </Col>      
                    <Col md="6">
                      <i style={{color: "gray", fontSize: "0.8em"}}>Learea</i>
                      </Col>
                    <Col md="6">
                      <span>{house.larea}</span>
                    </Col>   
                    <Col md="6">
                      <i style={{color: "gray", fontSize: "0.8em"}}>Year of construction</i>
                      </Col>
                    <Col md="6">
                      <span>{house.year}</span>
                    </Col>                
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col md="4">
              <UserContact user={house.user} />
            </Col>
          </Row>
          <Row>
            <Col md="12" style={{margin: "50px 0"}}>
              <h3 style={{width: "100%"}}>
                <HrText text="Map & travel timest" />
              </h3>
              <div style={{margin: "40px 0"}} >
                <GoogleMap />
              </div>
            </Col>
          </Row>

        </main>
      </>
    );
}