import React from "react";
import '../style/arrivalsproduct.css';


class Arrivalsproduct extends React.Component {
    render() {
        return(
            <>
                <section id="arrivals-product-main-content">
                    <h1>New Arrivals</h1>
                    <div className="today-deal-product-card-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-4 col-sm-12">
                                    <div className="product-deal-card-content">
                                        <div className="product-deal-img-content">
                                            <div className="container">
                                                <img src="https://venia-store-demo.myshopify.com/cdn/shop/products/13.jpg?v=1588752404" alt="Avatar" className="img-fluid"/>
                                                <div className="top-right">SALE</div>
                                                <div className="centered"> Expired</div>
                                                <div className="overlay icon-overlay">
                                                    <div className="main-icon-link">
                                                        <a href="#" className="icon icon-overlay-content">
                                                            <i title="Add to Wishlist" className="fa-regular fa-heart"></i>
                                                            <i title="Add to Card" className="fa-solid fa-cart-shopping"></i>
                                                            <i title="Quickview" className="fa-solid fa-magnifying-glass"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-detail-content">
                                                <h3>Desodorante para mujer</h3>
                                                <p>$28.00 <span>$35.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="product-deal-card-content">
                                        <div className="product-deal-img-content">
                                            <div className="container">
                                                <img src="https://venia-store-demo.myshopify.com/cdn/shop/products/1.jpg?v=1588751406" alt="Avatar" className="img-fluid"/>
                                                <div className="top-right">SALE</div>
                                                <div className="centered"> Expired</div>
                                                <div className="overlay icon-overlay">
                                                    <div className="main-icon-link">
                                                        <a href="#" className="icon icon-overlay-content">
                                                            <i title="Add to Wishlist" className="fa-regular fa-heart"></i>
                                                            <i title="Add to Card" className="fa-solid fa-cart-shopping"></i>
                                                            <i title="Quickview" className="fa-solid fa-magnifying-glass"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-detail-content">
                                                <h3>Mascara</h3>
                                                <p>$28.00 <span>$35.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-12">
                                    <div className="product-deal-card-content">
                                        <div className="product-deal-img-content">
                                            <div className="container">
                                                <img src="https://venia-store-demo.myshopify.com/cdn/shop/products/38.jpg?v=1588752248" alt="Avatar" className="img-fluid"/>
                                                {/*<div className="top-right">SALE</div>*/}
                                                <div className="centered"> Expired</div>
                                                <div className="overlay icon-overlay">
                                                    <div className="main-icon-link">
                                                        <a href="#" className="icon icon-overlay-content">
                                                            <i title="Add to Wishlist" className="fa-regular fa-heart"></i>
                                                            <i title="Add to Card" className="fa-solid fa-cart-shopping"></i>
                                                            <i title="Quickview" className="fa-solid fa-magnifying-glass"></i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-item-detail-content">
                                                <h3>Essence Moisturizing Facial Skin</h3>
                                                <p>$28.00 <span>$35.00</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Arrivalsproduct;