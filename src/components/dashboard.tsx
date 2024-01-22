import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Pagination } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { dashboardRequest, productDetailRequest } from '../redux/reducers/duck/dashboardDuck.tsx';

const PRODUCTS_PER_PAGE = 6;

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();

  const [products, setProducts] = useState<Array<any>>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const { dashboardData } = useSelector(({product}: any) => ({
    dashboardData: product?.dashboardData,
  }));

useEffect(() => {
dispatch(dashboardRequest())
},[dispatch])

useEffect(() => {
  setProducts(dashboardData)
},[dashboardData])

  const indexOfLastProduct = currentPage * PRODUCTS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - PRODUCTS_PER_PAGE;
  const currentProducts = products?.slice(indexOfFirstProduct, indexOfLastProduct);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <Container>
      <Row className='mt-4'>
        {currentProducts?.length === 0 ? (
          <h3 className='d-flex align-items-center justify-content-center vh-100'>...Loading</h3>
        ) : (
          currentProducts.map((product) => (
            <Col key={product.id} md={4}>
              <Card style={{ marginTop: '20px' }}>
                <Card.Img variant='top' src={product.image} />
                <Card.Body style={{ minHeight: '390px' }}>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>{`Price: $${product?.description?.length > 45 ? product?.description?.slice(0, 45) + "..." : product?.description}`}</Card.Text>
                  <Card.Img variant="top" src={product?.thumbnail} width={150} height={150} className='mb-2' />
                  <Card.Text>{`Price: $${product.price}`}</Card.Text>
                  <Link to={`/product/${product.id}`} onClick={() => dispatch(productDetailRequest(product.id))}  className='btn btn-primary'>
                    View Details
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        )}
      </Row>
      <Pagination className='mt-4'>
        {[...Array(Math.ceil(products.length / PRODUCTS_PER_PAGE))].map((id ,index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
    </Container>
  );
};

export default Dashboard;
