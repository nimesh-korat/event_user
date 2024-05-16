import { createSlice } from "@reduxjs/toolkit";

// Create a Redux slice for managing events
export const eventSlice = createSlice({
  name: "events",
  initialState: [],
  reducers: {
    // Reducer for adding or updating an event in the state
    addEvent: (state, action) => {
      // Check if the event already exists in the state
      const existingEventIndex = state.findIndex(
        (event) => event._id === action.payload._id
      );

      // If the event already exists, update it
      if (existingEventIndex !== -1) {
        state[existingEventIndex] = {
          _id: action.payload._id,
          totalSeats: action.payload.totalSeats,
          pricePerSeat: action.payload.pricePerSeat,
          eventName: action.payload.eventName,
          datetime: action.payload.datetime,
          category: action.payload.category,
          address: action.payload.address,
          artistId: action.payload.artistId,
          availableSeats: action.payload.availableSeats,
        };
      }
      // If the event doesn't exist, add it to the state
      else {
        state.push({
          _id: action.payload._id,
          eventPic: action.payload.eventPic,
          totalSeats: action.payload.totalSeats,
          pricePerSeat: action.payload.pricePerSeat,
          eventName: action.payload.eventName,
          datetime: action.payload.datetime,
          category: action.payload.category,
          address: action.payload.address,
          artistId: action.payload.artistId,
          availableSeats: action.payload.availableSeats,
        });
      }
    },
  },
});

// Export the action creator for adding or updating an event
export const { addEvent } = eventSlice.actions;

// Export the reducer for managing events
export default eventSlice.reducer;
