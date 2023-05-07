import React from "react";
import '../style/faqpage.css';


class Faqspage extends React.Component {

    state = {
        divcontainer:false,
    }
    render() {
        var Handelchande = e => {
            this.setState({divcontainer: !this.state.divcontainer});
        }

        const x =this.state.divcontainer;
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
                                        <hr/>
                                    </div>
                                </div>
                                <div className="col-md-3"></div>
                            </div>
                        </div>
                    </div>
                    <div className="faq-page-question-list-main-content">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 col-sm-12">
                                    <div className="question-list-content">
                                        <ul>
                                            <li><h3 onClick={ Handelchande }><span>+</span> {x?' + How long does it take for home delivery?  ':' + How long does it take for home delivery? '} </h3>
                                                {
                                                    x &&(
                                                        <p>We use Royal mail and DHL to send most of our UK orders.Euro Car Parts reserves the right to use discretion
                                                            in any circumstance where it makes more sense to use an alternative delivery method. </p>
                                                    )

                                                }
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12"></div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default Faqspage;