import Head from 'next/head'
import { gql } from "@apollo/client";
import client from "apollo-client";
import Slider from 'components/Layout/Slider';
import { Container, Col, Row, Button } from 'reactstrap';

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
      house.images.map(image => 
          <img style={{width: "100%"}} src={`${process.env.api_domain}${image}`} />) 
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
              <img src={`${process.env.api_domain}${house.user.avatar}`}
                style={{float: "right", borderRadius: "50%"}}
                width={70} />
              <h3 style={{fontSize: "1.3em"}}>{house?.user?.name} {house?.user?.family}</h3>
              <h4 style={{color: "gray", fontSize: ".8em"}}>{house?.user?.email}</h4>
              <div style={{padding: "20px 0"}}>
                <Button outline style={{width: "100%", margin: "5px 0"}}>Show Phone Number</Button>
                <Button outline style={{width: "100%", margin: "5px 0"}}>By Email</Button>
              </div>
            </Col>
          </Row>

        </main>
      </>
    );
}