import type { LocationTime } from "../../types";
import type { LocationItem, LocationItemStatus } from "./RouteTimeline";

function timeIsoToMinute(s?: string) {
    return s ? Math.floor(new Date(s).getTime() / 60000) : undefined;
}

// NOTE_LSM: Builds input props, only walks the route once but assumes the route is in order
export function buildLocationItems(route: LocationTime[]): LocationItem[] {
    const locationItems: LocationItem[] = [];

    // NOTE_LSM: Determines whether we show the next stop as 'next' or 'scheduled'. Disabled if bus is stopped
    let showNext = true;

    for (const locationTime of route) {
        if (locationTime.skipped) {
            locationItems.push({
                id: locationTime.id,
                name: locationTime.location.name,
                status: 'skipped' as LocationItemStatus,
                timeIso: locationTime.arrival.scheduled,
                timeZone: locationTime.location.timezone
            })
            continue;
        }

        if (locationTime.departure.actual) {
            locationItems.push({
                id: locationTime.id,
                name: locationTime.location.name,
                status: 'departed' as LocationItemStatus,
                timeIso: locationTime.departure.actual,
                timeZone: locationTime.location.timezone
            });
            continue;
        }

        if (locationTime.arrival.actual) {
            showNext = false;

            const scheduled = locationTime.departure.scheduled;
            const estimated = locationTime.departure.estimated;
            const timesAreDifferent = estimated && timeIsoToMinute(scheduled) !== timeIsoToMinute(estimated);
            locationItems.push({
                id: locationTime.id,
                name: locationTime.location.name,
                status: 'arrived' as LocationItemStatus,
                timeIso: locationTime.departure.scheduled,
                timeEstimateIso: timesAreDifferent ? locationTime.departure.estimated : undefined,
                timeZone: locationTime.location.timezone
            });
            continue;
        }
        
        let status = 'scheduled' as LocationItemStatus;
        if (showNext) {
            showNext = false;
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
            timeZone: locationTime.location.timezone
        });
    };

    return locationItems;
}
