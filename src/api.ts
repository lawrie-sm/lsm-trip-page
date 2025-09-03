import type { QuotesRes, Trip } from "./types";

/*
    Many things missing here, skipped to focus on the core task:
    - Polling for updates
    - Better validation, zod etc.
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

export async function fetchTrip(signal: AbortSignal): Promise<Trip> {
    const today = new Date();
    const quotesUrl = getQuotesUrl(today);
    const quotesRes = await fetch(quotesUrl, { signal });
    if (!quotesRes.ok) {
        throw new Error(`Quotes request failed ${quotesRes.status}`);
    }

    const quotesJson: QuotesRes = await quotesRes.json();
    if (quotesJson.quotes.length === 0 || quotesJson.quotes[0].legs.length === 0) {
        throw new Error('No trips found');
    }

    const tripUid = quotesJson.quotes[0].legs[0].trip_uid;
    const tripsRes = await fetch(getTripUrl(tripUid), { signal });
    if (!tripsRes.ok) {
        throw new Error(`Trip request failed ${tripsRes.status}`);
    }

    const tripJson: Trip = await tripsRes.json();
    if (tripJson.route.length === 0) {
        throw new Error('Trip has no route');
    }

    return tripJson;
}

