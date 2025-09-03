import type { QuotesRes, Trip } from "./types";

/*
    Many things missing here, skipped to focus on the core task:
    - Polling for updates
    - Validation, rendering logic is much easier with fewer optionals
    - Error handling and display
    - Check vehicle.gps.last_updated and warn about staleness, keep an eye on users's connection state
    - Caching, for example with react-query
    - API client injection, for testing, shared auth handling, exponential backoff logic etc. We'd probably have an SDK for this
*/

function getQuotesUrl(date: Date) {
    const startOfDay = new Date(date).setUTCHours(0, 0, 0, 0);
    const startOfDayStr = new Date(startOfDay).toISOString();
    const endOfDay = new Date(date).setUTCHours(23, 59, 59, 999);
    const endOfDayStr = new Date(endOfDay).toISOString();
    return `https://api.ember.to/v1/quotes/?origin=13&destination=42&departure_date_from=${startOfDayStr}&departure_date_to=${endOfDayStr}`;
}

function getTripUrl(tripId: string) {
    return `https://api.ember.to/v1/trips/${tripId}/`;
}

export async function fetchTrip(): Promise<Trip> {
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

