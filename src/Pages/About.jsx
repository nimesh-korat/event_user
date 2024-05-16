import React from "react";
import { Link } from "react-router-dom";

function About() {
    return (
        <>
            <div className="page-heading-about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>Radio City Musical Hall</h2>
                            <span>September 24-28, 2021 in Rio de Janeiro</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-item">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8">
                            <div className="left-image">
                                <img src="assets/images/about-image.jpg" alt="party time" />
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="right-content">
                                <div className="about-map-image">
                                    <img
                                        src="assets/images/about-map-image.jpg"
                                        alt="party location"
                                    />
                                </div>
                                <div className="down-content">
                                    <h4>Radio City Musical Hall</h4>
                                    <ul>
                                        <li>August 24 Friday</li>
                                        <li>09:30 AM - 07:00 PM</li>
                                    </ul>
                                    <span>
                                        <i className="fa fa-ticket" /> Tickets Starting From $34.00
                                    </span>
                                    <div className="main-dark-button">
                                        <Link to="/ticket-details">Purchase Tickets</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-upcoming-shows">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-9">
                            <h2>About The Upcoming Show</h2>
                            <p />
                            <p>
                                ArtXibition Event Template is brought to you by Tooplate website
                                and it included total 7 HTML pages. These are{" "}
                                <Link to="/">Homepage</Link>, <Link to="/about">About</Link>,
                                <Link to="/rent-venue">Rent a venue</Link>,{" "}
                                <Link to="/shows-events">shows &amp; events</Link>,
                                <Link to="/event-details">event details</Link>,{" "}
                                <Link to="/tickets">tickets</Link>, and{" "}
                                <Link to="/ticket-details">ticket details</Link>. You can feel
                                free to modify any page as you like. If you have any question,
                                please visit our{" "}
                                <a
                                    href="https://www.tooplate.com/contact"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Contact page
                                </a>
                                .
                            </p>
                            <p />
                            <h4>Items That Are Restricted</h4>
                            <ul>
                                <li>* Flash Cameras</li>
                                <li>* Food &amp; Drinks</li>
                                <li>* Any kind of flashy objects</li>
                            </ul>
                            <h4>Directions &amp; Car Parking</h4>
                            <p>
                                Art party vegan mixtape before they sold out raclette, cliche
                                banh mi mumblecore ugh hell of. Art party kene ugh umami,
                                readymade tbh small batch austin distillery aesthetic.Shoreditch
                                narwhal livers edge actually godar affogato sartorial waistcoat
                                ugh raw denim stumptown.
                            </p>
                            <div className="text-button">
                                <Link to="/event-details">
                                    Need Directions? <i className="fa fa-arrow-right" />
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="next-shows">
                                <h4>
                                    <i className="fa fa-clock-o" /> Get The Next Show Tickets
                                </h4>
                                <ul>
                                    <li>
                                        <h5>Copacabana Festival</h5>
                                        <span>
                                            Sep 24 Fri
                                            <br />
                                            08:30 AM - 11:00 PM
                                        </span>
                                        <div className="icon-button">
                                            <Link to="/ticket-details">
                                                <i className="fa fa-shopping-cart" />
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Rock Music Festival</h5>
                                        <span>
                                            Sep 22 Wed
                                            <br />
                                            11:00 AM - 09:00 PM
                                        </span>
                                        <div className="icon-button">
                                            <Link to="/ticket-details">
                                                <i className="fa fa-shopping-cart" />
                                            </Link>
                                        </div>
                                    </li>
                                    <li>
                                        <h5>Water Splash Festival</h5>
                                        <span>
                                            July 18 Friday
                                            <br />
                                            10:00 AM - 11:00 PM
                                        </span>
                                        <div className="icon-button">
                                            <Link to="/ticket-details">
                                                <i className="fa fa-shopping-cart" />
                                            </Link>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="also-like">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2>You Might Also Like...</h2>
                        </div>
                        <div className="col-lg-4">
                            <div className="like-item">
                                <div className="thumb">
                                    <Link to="/event-details">
                                        <img src="assets/images/like-01.jpg" alt="" />
                                    </Link>
                                    <div className="icons">
                                        <ul>
                                            <li>
                                                <Link to="/event-details">
                                                    <i className="fa fa-arrow-right" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ticket-details">
                                                    <i className="fa fa-ticket" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <span>Sept 10 to 14, 2021</span>
                                    <Link to="/event-details">
                                        <h4>Wonder Land Music and Arts Festival</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="like-item">
                                <div className="thumb">
                                    <Link to="/event-details">
                                        <img src="assets/images/like-02.jpg" alt="" />
                                    </Link>
                                    <div className="icons">
                                        <ul>
                                            <li>
                                                <Link to="/event-details">
                                                    <i className="fa fa-arrow-right" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ticket-details">
                                                    <i className="fa fa-ticket" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <span>Oct 11 to 16, 2021</span>
                                    <Link to="/event-details">
                                        <h4>Big Water Splashing Festival</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="like-item">
                                <div className="thumb">
                                    <Link to="/event-details">
                                        <img src="assets/images/like-03.jpg" alt="" />
                                    </Link>
                                    <div className="icons">
                                        <ul>
                                            <li>
                                                <Link to="/event-details">
                                                    <i className="fa fa-arrow-right" />
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/ticket-details">
                                                    <i className="fa fa-ticket" />
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="down-content">
                                    <span>Nov 10 to 18, 2021</span>
                                    <Link to="/event-details">
                                        <h4>Tiger Dance Hip Hop Festival</h4>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About;
