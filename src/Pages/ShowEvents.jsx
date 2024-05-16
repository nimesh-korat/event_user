import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
// import { useSelector } from "react-redux";

function ShowEvents() {
  // const event = useSelector((state) => state.events);

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_MONGO_BASE_URL}/admin/getUpcomingEvents`
    );
    return response.data.upcomingEvents;
  };

  const eventData = useQuery({
    queryKey: ["events"],
    queryFn: fetchData,
  });

  eventData.isError && console.log(eventData.error);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <>
      <div className="page-heading-shows-events">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2>Tickets On Sale Now!</h2>
              <span>
                Check out upcoming and past shows &amp; events and grab your
                ticket right now.
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="tickets-page">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="heading">
                <h2>All Events</h2>
              </div>
            </div>
            {eventData.isFetched ? (
              <>
                {eventData.data?.map((event, index) => (
                  <div className="col-lg-4" key={index}>
                    <div className="ticket-item">
                      <div className="thumb">
                        <img
                          className="img-fluid"
                          style={{ height: "300px", objectFit: "cover" }}
                          src={
                            event.eventPic
                              ? `${process.env.REACT_APP_MONGO_BASE_URL}/images/eventPics/${event.eventPic}`
                              : "assets/images/venue-01.jpg"
                          }
                          alt=""
                        />
                        <div className="price">
                          <span>
                            1 ticket
                            <br />
                            from <em>₹ {event.pricePerSeat}</em>
                          </span>
                        </div>
                      </div>
                      <div className="down-content">
                        <span>
                          There Are {event.availableSeats} Tickets Left For This
                          Show
                        </span>
                        <h4>{event.eventName}</h4>
                        <ul>
                          <li>
                            <i className="fa fa-clock-o" />{" "}
                            {new Date(event.datetime).toLocaleString()}
                          </li>
                          <li>
                            <i className="fa fa-map-marker" />
                            {event.address}
                          </li>
                        </ul>
                        <div className="main-dark-button">
                          {event.availableSeats === 0 ? (
                            <Link> Sold Out</Link>
                          ) : (
                            <Link to="/ticket-details" state={{ event: event }}>
                              Purchase Tickets
                            </Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div className="js-preloader">
                <div className="preloader-inner">
                  <span className="dot" />
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ShowEvents;
