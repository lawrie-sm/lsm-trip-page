import { useEffect, useState } from "react";
import type { QuotesRes, Trip } from "./types";
import TripOverview from "./components/TripOverview";
import { mockQuoteRes, mockTrip } from "./data";

function getQuotesUrl(date: Date) {
    const startOfDay = new Date(date).setUTCHours(0, 0, 0, 0);
    const startOfDayStr = new Date(startOfDay).toISOString();
    const endOfDay = new Date(date).setHours(23, 59, 59, 999);
    const endOfDayStr = new Date(endOfDay).toISOString();
    return `https://api.ember.to/v1/quotes/?origin=13&destination=42&departure_date_from=${startOfDayStr}&departure_date_to=${endOfDayStr}`;
}

function getTripUrl(tripId: string) {
    return `https://api.ember.to/v1/trips/${tripId}/`;
}

// TODO_LSM: Validation, error handling, caching etc. Some nice testable way to inject the client for mocking etc. Esp. handle the 403 "trip is in the past" error
const fetchLatestTrip = async (): Promise<Trip> => {
    const today = new Date();
    const quotesUrl = getQuotesUrl(today);
    const quotesRes = await fetch(quotesUrl);
    const quotesJson: QuotesRes = await quotesRes.json();
    console.log({ quotesJson });

    const tripUid = quotesJson.quotes[0].legs[0].trip_uid;
    const tripsRes = await fetch(getTripUrl(tripUid));
    const tripJson: Trip = await tripsRes.json();
    console.log({ tripJson });

    return tripJson;
}

function App() {
    // const [trip, setTrip] = useState<Trip | null>(null);
    // useEffect(() => {
    //     if (trip) return;
    //     fetchLatestTrip().then((trip) => {
    //         setTrip(trip);
    //     });
    // }, [trip]);
    // if (!trip) {
    //     return <div>Loading...</div>;
    // }
    //


    const trip = mockTrip;

    console.log({ mockQuoteRes, trip });
    return (
        <TripOverview trip={trip} />);
}

export default App
