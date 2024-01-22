import React from 'react';
import { Container, Row, Col, Card, Image,  } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ProductDetails: React.FC = () => {

  const { productDetailData } = useSelector(({product}: any) => ({
    productDetailData: product?.productDetailData,
  }));

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md={6}>
          <Card style={{ marginTop: '20px' }}>
            <Card.Body>
              <div className='d-flex justify-content-between'>
                {productDetailData.length === 0 ? (
                  <h3 className='d-flex align-items-center justify-content-center'>...Loading</h3>
                ) : (
                  productDetailData && (
                    <Card.Title className='mt-4'>
                      {' '}
                      {productDetailData?.title} <p>({productDetailData?.brand})</p>
                    </Card.Title>
                  )
                )}
                {productDetailData && (
                  <div>
                    <Image
                      src={productDetailData?.thumbnail}
                      alt="thumbnail"
                      roundedCircle
                      style={{ width: 100, height: 100 }}
                    />
                  </div>
                )}
              </div>
              <Card.Text>{productDetailData?.category}</Card.Text>
              <Card.Text>{productDetailData?.description}</Card.Text>
              {productDetailData &&
                productDetailData?.images &&
                productDetailData.images?.map((img) => (
                  <Card.Img variant="top" src={img} width={300} height={300} className='mt-5' />
                ))}
              {productDetailData && (
                <div className='d-flex justify-content-between mt-4'>
                  <Card.Title>{`Price: ${productDetailData?.price} `}</Card.Title>
                  <Card.Title>{`Rating: ${productDetailData?.rating} `}</Card.Title>
                  <Card.Title>{`Stock: ${productDetailData?.stock} `}</Card.Title>
                </div>
              )}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetails;
