import Head from 'next/head'
import { gql } from "@apollo/client";
import client from "apollo-client";
import { Col, Row } from 'reactstrap';
import ImageWrapper from 'components/Image/ImageWrapper';

export async function getServerSideProps(context) {
    const { pid } = context.params;
    const { data } = await client.query({
      query: gql`
        {
        blog(id: ${pid}) {
          user {
            id
            name
            family
            email
            avatar
          }
          id
          title
          body
          createdAt
          updatedAt
          image
        }
      }
      
      `,
    });
  
    return {
      props: {
        blog: data?.blog,
      },
   };
  }

export default function Bastad({blog}) {
  
    return (
      <>
        <Head>
          <title>{blog.title}</title>
          <meta name="description" content="blog Data " />
        </Head>

        <main>
          <Row className='justify-content-md-center' >
            <Col md="8" >
              <ImageWrapper
                  src={blog.image}
                  alt={blog.title}
                  layout="responsive"
                  width={1000}
                  height={700}
              />
              <div style={{marginTop: "10px"}}>
                <h1>{blog.title}</h1>
              </div>
              <hr />
              <p>
                {blog.body}
              </p>
            </Col>
          </Row>

        </main>
      </>
    );
}