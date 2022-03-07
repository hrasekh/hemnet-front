import Head from 'next/head'
import { gql } from "@apollo/client";
import client from "apollo-client";

import HrText from 'components/Layout/HrText';
import { Row, Col } from 'reactstrap';
import HouseList from 'components/House/HouseList';
import Link from 'next/link';
import HouseThumbnail from 'components/House/HouseThumbnail';

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      {
        houses {
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
      houses: data.houses,
    },
 };
}

export default function Home(houses) {

  // const houseComp = houses?.houses ? houses?.houses.map((house) => <Col md="3"><HouseThumbnail house={house} /></Col>) : [];

  return (
    <>
      <Head>
        <title>Hemnet - Sweden's largest housing platform</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <main>
        <div style={{textAlign: "center", padding: "20px"}}>
          <Row>
            <Col md="7"  style={{margin: "2px 0", padding: "2px"}}>
               <HouseThumbnail imageAsBackground={true} house={houses?.houses[0]} height="340px" />
            </Col>
            <Col md="5" style={{padding: "2px"}} >
              <Row>
                <Col md="12"  style={{margin: "2px 0"}}>
                  <HouseThumbnail imageAsBackground={true} house={houses?.houses[1]} height="170px" />
                </Col>
                <Col md="12"  style={{margin: "2px 0"}}>
                  <HouseThumbnail imageAsBackground={true} house={houses?.houses[2]} height="170px" />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row>
            <Col md="4"  style={{margin: "2px 0", padding: "2px"}}>
              <HouseThumbnail imageAsBackground={true} house={houses?.houses[3]} height="170px" />
            </Col>
            <Col md="4"  style={{margin: "2px 0", padding: "2px"}}>
              <HouseThumbnail imageAsBackground={true} house={houses?.houses[4]} height="170px" />
            </Col>
            <Col md="4"  style={{margin: "2px 0", padding: "2px"}}>
              <HouseThumbnail imageAsBackground={true} house={houses?.houses[5]} height="170px" />
            </Col>
          </Row>
        </div>

        <Row style={{padding: "30px 0"}}>
          <h3 style={{width: "100%"}}>
            <HrText text="Top List" />
          </h3>
          <HouseList houseList={houses?.houses} />
        </Row>
      </main>
    </>
  )
}
