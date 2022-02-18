import {Button, Container, Form, FormControl, Nav, Navbar, NavDropdown} from "react-bootstrap";
import "./ navbar.css";

function Navigation() {
    return (
    <>
        
    <Navbar bg="wi" expand="lg" className="w-75 ">
        <Container fluid className=''>
            <Navbar.Brand href="#"><img src="../img/logo.svg" alt=""/></Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="#action1">Kaталог</Nav.Link>
                    <Nav.Link href="#action2">Контакты</Nav.Link>
                    <NavDropdown title="Статьи о растениях" id="navbarScrollingDropdown">
                        <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action5">
                            Something else here
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                {/*<div className="input-group mb-3">*/}
                {/*    <div className="input-group-prepend">*/}
                {/*        <button  className="btn btn-outline-secondary" type="button"><img src="/img/search.svg" alt=""/></button>*/}
                {/*    </div>*/}
                {/*    <input type="text" className="form-control" placeholder="" aria-label=""*/}
                {/*           aria-describedby="basic-addon1"/>*/}
                {/*</div>*/}
                <Form className="d-flex">
                    <Button variant="outline " className='btn-search'><img src="/img/search.svg" alt=""/></Button>
                    <FormControl

                        type="search"
                        placeholder=""
                        className="me-2 input-search"
                        aria-label="Search"
                    />

                </Form>





            </Navbar.Collapse>
        </Container>
    </Navbar>

    </>
    );
}

export default Navigation;