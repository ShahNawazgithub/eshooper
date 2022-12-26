import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
	return (
		<>
			<div className="py-1 bg-black">
				<div className="container">
					<div className="row no-gutters d-flex align-items-start align-items-center px-md-0">
						<div className="col-lg-12 d-block">
							<div className="row d-flex">
								<div className="col-md pr-4 d-flex topper align-items-center">
									<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-phone2"></span></div>
									<span className="text">+91 7014737271</span>
								</div>
								<div className="col-md pr-4 d-flex topper align-items-center">
									<div className="icon mr-2 d-flex justify-content-center align-items-center"><span className="icon-paper-plane"></span></div>
									<span className="text">ashahnawaz456@gmail.com</span>
								</div>
								<div className="col-md-5 pr-4 d-flex topper align-items-center text-lg-right">
									<span className="text">3-5 Business days delivery &amp; Free Returns</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<div className="container">
					<Link className="navbar-brand" to="/">E-Shooper</Link>
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="oi oi-menu"></span> Menu
					</button>

					<div className="collapse navbar-collapse" id="ftco-nav">
						<ul className="navbar-nav ml-auto">
							<li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
							{/* <li className="nav-item dropdown">
								<Link className="nav-link dropdown-toggle" to="#" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Catalog</Link>
								<div className="dropdown-menu" aria-labelledby="dropdown04">
									<Link className="dropdown-item" to="shop.html">Shop</Link>
									<Link className="dropdown-item" to="product-single.html">Single Product</Link>
									<Link className="dropdown-item" to="cart.html">Cart</Link>
									<Link className="dropdown-item" to="checkout.html">Checkout</Link>
								</div>
							</li> */}
							<li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
							<li className="nav-item"><Link to="/shop" className="nav-link">Shop</Link></li>
							<li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
							<li className="nav-item cta cta-colored"><Link to="/cart" className="nav-link"><span className="icon-shopping_cart"></span>[0]</Link></li>

						</ul>
					</div>
				</div>
			</nav>
		</>
	)
}
