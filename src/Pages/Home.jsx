import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addEvent } from "../slices/event";
import { useQuery } from "@tanstack/react-query";

function Home() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_MONGO_BASE_URL}/admin/getUpcomingEvents`
    );
    response.data.upcomingEvents.forEach((event) => {
      dispatch(addEvent(event));
    });
    return response.data.upcomingEvents;
  };

  const eventDatas = useQuery({
    queryKey: ["events"],
    queryFn: fetchData,
  });

  eventDatas.isError && console.log(eventDatas.error);

  useEffect(() => {
    window.scrollTo(0, 0, { behavior: "smooth" });
  }, []);

  // const eventss = useSelector((state) => state.events);

  return (
    <>
      <div className="main-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-content">
                <h2>The Sunny Hill Festival 2024</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      {eventDatas.isFetched ? (
        <div className="venue-tickets">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-heading">
                  <h2>Events &amp; Tickets</h2>
                </div>
              </div>
              {eventDatas.data?.slice(0, 3)?.map((event, index) => (
                <EventCard key={index} event={event} />
              ))}
            </div>
            {eventDatas.data.length > 3 ? (
              <div className="main-grey-button">
                <Link to="/all-events">More Events</Link>
              </div>
            ) : null}
          </div>
        </div>
      ) : (
        <div className="js-preloader ">
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
    </>
  );
}

const EventCard = ({ event }) => {
  return (
    <div className="col-lg-4">
      <div className="venue-item">
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
        </div>
        <div className="down-content">
          <div className="left-content">
            <div className="main-white-button">
              {event.availableSeats === 0 ? (
                <Link> Sold Out</Link>
              ) : (
                <Link to="ticket-details" state={{ event: event }}>
                  Purchase Tickets
                </Link>
              )}
            </div>
          </div>
          <div className="right-content">
            <h4>{event.eventName}</h4>
            <br />
            <ul>
              <li>
                <i className="fa fa-clock-o" />{" "}
                {new Date(event.datetime).toLocaleString()}
              </li>
              <br />
              <li>
                <i className="fa fa-map-marker" />
                {event.address}
              </li>
            </ul>
            <ul>
              <li title="Available Seats">
                <i className="fa fa-sitemap" />
                {event.availableSeats}
              </li>
              <li title="Total Seats">
                <i className="fa fa-user" />
                {event.totalSeats}
              </li>
            </ul>
            <div className="price">
              <span>
                1 ticket
                <br />
                for <em>₹ {event.pricePerSeat}</em>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
