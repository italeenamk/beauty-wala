import React from "react";
import '../style/faqpage.css';
import left_colum_img from '../assest/eyeshadow.png';


class Faqspage extends React.Component {

    state = {
        divcontainer:false,
    }
    state = {
        divcontain:false,
    }
    state = {
        divconner:false,
    }
    state = {
        divconnect:false,
    }
    render() {
        var Handelchande = e => {
            this.setState({divcontainer: !this.state.divcontainer});
        }
        var Handelchandetwo = e => {
            this.setState({divcontain: !this.state.divcontain});
        }

        var Handelchandethree = e => {
            this.setState({divconner: !this.state.divconner});
        }

        var Handelchandefour = e => {
            this.setState({divconnect: !this.state.divconnect});
        }

        const x =this.state.divcontainer;
        const y =this.state.divcontain;
        const z =this.state.divconner;
        const e =this.state.divconnect;
        return(
            <>
                <section id="faq-page-main-content">
                    <div className="faq-page-heading-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-3"></div>
                                <div className="col-md-6 col-sm-12">
                                    <div className="faq-text-heading-content">
                                        <h2>#Frequently asked questions</h2>
                                        <p>I am text block. Click edit button to change this text. Lorem ipsum dolor sit amet,consectetur adipiscing elit. Ut elit tellus,
                                            luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                                <hr/>
                            </div>
                        </div>
                    </div>
                    <div className="faq-page-question-list-main-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="question-list-content">
                                        <ul>
                                            <li><h3 onClick={ Handelchande }><span>+</span> {x?' How long does it take for home delivery?  ':' How long does it take for home delivery? '} </h3>
                                                {
                                                    x &&(
                                                        <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion
                                                            in any circumstance where it makes more sense to use an alternative delivery method. </p>
                                                    )

                                                }
                                            </li>
                                            <li><h3 onClick={ Handelchandetwo }><span>+</span> {y?' What courier do you use for deliveries?   ':' What courier do you use for deliveries?  '} </h3>
                                                {
                                                    y &&(
                                                        <p>We use Royal mail and DH
                                                            L to send most of our UK orders.Euro Car Parts reserves the right to use discretion
                                                            in any circumstance where it makes more sense to use an alternative delivery method. </p>
                                                    )

                                                }
                                            </li>
                                            <li><h3 onClick={ Handelchandethree }><span>+</span> {z?' Why am I being charged for delivery on my order when it states standard delivery is free? ':' Why am I being charged for delivery on my order when it states standard delivery is free? '} </h3>
                                                {
                                                    z &&(
                                                        <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion
                                                            in any circumstance where it makes more sense to use an alternative delivery method. </p>
                                                    )

                                                }
                                            </li>
                                            <li><h3 onClick={ Handelchandefour }><span>+</span> {e?' I haven’t received a dispatch email/email confirmation?  ':'  I haven’t received a dispatch email/email confirmation? '} </h3>
                                                {
                                                    e &&(
                                                        <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion
                                                            in any circumstance where it makes more sense to use an alternative delivery method. </p>
                                                    )

                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 text-center">
                                    <div className="fsq-left-colum-img-content">
                                        <img src="https://media.istockphoto.com/id/1351143377/vector/background-with-cosmetics-for-skincare-and-makeup-illustration-for-advertising-beauty-and.jpg?s=612x612&w=0&k=20&c=gIGd6PplzwFOd7jBI9iHoGzsIhBhzwtZXWvXSCs7a9w=" alt=""/>
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

export default Faqspage;