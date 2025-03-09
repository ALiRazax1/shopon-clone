import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export function Navbara() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid="xxl">
        <Navbar.Brand href="#"><img style={{width:"100px"}} src="https://shopon-ruddy.vercel.app/static/media/logo.dab186632dcf8f0e506a.png" alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">Gift Cards</Nav.Link>
            <Nav.Link href="#action2">Home</Nav.Link>
            <Nav.Link href="#action2">Mobile & Tablets</Nav.Link>
            <Nav.Link href="#action2">Fasion</Nav.Link>
            <Nav.Link href="#action2">Electronics</Nav.Link>
           
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

