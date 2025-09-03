import type { LocationTime } from "../../types";
import type { LocationItem, LocationItemStatus } from "./RouteTimeline";

function timeIsoToMinute(s?: string) {
    return s ? Math.floor(new Date(s).getTime() / 60000) : undefined;
}

/*
    Converts the API route to a user-friendly list of LocationItems with status and times
    Assumes the route is in order, that the first stop is the origin, and the last is the destination,
    Pure, and only walks the route once.
*/
export function buildLocationItems(route: LocationTime[]): LocationItem[] {
    const locationItems: LocationItem[] = [];

    // These flags track state for showing the onroute "next" status
    let isStopped = false;
    let hasNext = false;
    let hasStarted = false;

    for (const locationTime of route) {
        // Skipped stops pre-empt everything else
        if (locationTime.skipped) {
            locationItems.push({
                id: locationTime.id,
                name: locationTime.location.name,
                status: 'skipped' as LocationItemStatus,
                timeIso: locationTime.arrival.scheduled,
                timezone: locationTime.location.timezone
            })
            continue;
        }

        // Bus has departed this stop, and is beyond the origin so journey has started
        if (locationTime.departure.actual) {
            hasStarted = true;

            locationItems.push({
                id: locationTime.id,
                name: locationTime.location.name,
                status: 'departed' as LocationItemStatus,
                timeIso: locationTime.departure.actual,
                timezone: locationTime.location.timezone
            });
            continue;
        }

        // Bus has arrived at a stop but not departed
        if (locationTime.arrival.actual) {
            isStopped = true;

            const scheduled = locationTime.departure.scheduled;
            const estimated = locationTime.departure.estimated;
            const timesAreDifferent = estimated && timeIsoToMinute(scheduled) !== timeIsoToMinute(estimated);

            locationItems.push({
                id: locationTime.id,
                name: locationTime.location.name,
                status: 'arrived' as LocationItemStatus,
                timeIso: locationTime.departure.scheduled,
                timeEstimateIso: timesAreDifferent ? locationTime.departure.estimated : undefined,
                timezone: locationTime.location.timezone
            });
            continue;
        }

        // Future stops, including potentially a "next" stop
        let status = 'scheduled' as LocationItemStatus;
        if (hasStarted && !hasNext && !isStopped) {
            hasNext = true;
            status = 'next';
        }

        const scheduled = locationTime.arrival.scheduled;
        const estimated = locationTime.arrival.estimated;
        const timesAreDifferent = estimated && timeIsoToMinute(scheduled) !== timeIsoToMinute(estimated);

        locationItems.push({
            id: locationTime.id,
            name: locationTime.location.name,
            status: status,
            timeIso: locationTime.arrival.scheduled,
            timeEstimateIso: timesAreDifferent ? locationTime.arrival.estimated : undefined,
            timezone: locationTime.location.timezone
        });
    };

    return locationItems;
}
