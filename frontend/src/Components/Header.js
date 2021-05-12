import React from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import{ Nav, Navbar } from 'react-bootstrap'

function Header(props) {
    return (


        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav">
      <li class="nav-item active">
      <Link to="/">Home</Link>
      </li>
      <li class="nav-item">
      <Link to="/Cocktails">Cocktails</Link>
      </li>
      <li class="nav-item">
      <Link to="/Cocktails">Create Your Own</Link>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
    </ul>
  </div>
</nav>

//         <header class="header">
//   <a href="" class="logo">CSS Nav</a>
//   <input class="menu-btn" type="checkbox" id="menu-btn" />
//   <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
//   <ul class="menu">
//     <li><Link to="/">Home</Link></li>
//     <li><Link to="/Cocktails">Cocktails</Link></li>
//     <li><Link to="/Cocktails">Create Your Own</Link></li>
//     <li><a href="#contact">Contact</a></li>
//   </ul>
// </header>

    //         <Navbar bg='dark' variant="dark" sticky='top' expand="sm" collapseOnSelect>
    //  <Navbar.Toggle/>
    //  <Navbar.Collapse>
    // <Navbar.Brand>
    //   <img className="navimg" src="https://gallery.yopriceville.com/var/resizes/Free-Clipart-Pictures/Drinks-PNG-/Summer_Cocktail_PNG_Clip_Art_Image.png?m=1507172108" width="20px"/>{' '}
    //   Logo
    // </Navbar.Brand>
    // <Nav>
    // <Nav.Link href="Drinks">Drinks</Nav.Link>
    // <Nav.Link href="Muchies">Munchies</Nav.Link>
    // <Nav.Link href="Spirits">Spirits</Nav.Link>
    // <Nav.Link href="Merch">Merch</Nav.Link>
    // </Nav>
    // </Navbar.Collapse>
    // </Navbar>

{/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
        <a class="nav-item nav-link active" href="/">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="/Cocktails">Features</a>
        <a class="nav-item nav-link" href="/Cocktails">Pricing</a>
        <a class="nav-item nav-link disabled" href="#">Disabled</a>
    </div>
    <div className="login-container">
        <Auth setUser={setUser} />
    </div>
        <CartIcon />
    </div>
</nav> */}

              {/* <Nav >
                <Link to="/">Home</Link>
                <Link to="/Cocktails">Cocktails</Link>
                <Link to="/Cocktails">Create Your Own</Link>
                  <div className="login-container">
                    <Auth setUser={setUser} />
                  </div>
                <CartIcon />
              </Nav> */}

    );
}

export default Header;

