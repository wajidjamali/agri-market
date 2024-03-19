import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import styles from "../../styles/styles";
import EventCard from "./EventCard";

const Events = () => {
  const { allEvents, isLoading } = useSelector((state) => state.events);
  console.log(allEvents);
  return (
    <div>
      {!isLoading && (
        <div className={`${styles.section}`}>
          <div className={`${styles.heading}`}>
            <h1>Popular Events</h1>
          </div>

          <div className='w-full grid'>
            {allEvents.length !== 0 ? (
              allEvents.map((event) => (
                <EventCard key={event._id} data={event} />
              ))
            ) : (
              <h4>No Events Available</h4>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Events;
