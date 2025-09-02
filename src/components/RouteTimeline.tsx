import type { LocationTime } from "../types";

type LocationItemStatus = 'scheduled' | 'arrived' | 'departed' | 'skipped' | 'next' | 'unknown';

interface LocationItem {
    id: number;
    name: string;
    status: LocationItemStatus;
    timeIso: string;
    timeEstimateIso?: string;
    timeZone?: string;
}

interface RouteTimelineProps {
    route: LocationTime[];
}

function toLocalDisplayTime(timeIso: string, timeZone?: string): string {
    return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', timeZone: timeZone })
        .format(new Date(timeIso));
}

function timeIsoToMinute(s?: string) {
    return s ? Math.floor(new Date(s).getTime() / 60000) : undefined;
}

// NOTE_LSM: Builds input props, only walks the route once but assumes the route is in order
function buildLocationItems(route: LocationTime[]): LocationItem[] {
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

interface LocationItemProps {
    name: string;
    status: LocationItemStatus;
    displayTime: string;
    displayTimeEstimate?: string;
}

function LocationItem(props: LocationItemProps) {
    const { name, status, displayTime: time, displayTimeEstimate: timeEstimate } = props;

    return (
        <li className="location-item">
            <div className={`location-status-icon ${status}`} />
            <div className="location-details">
                <p className="location-name">{name}</p>
                <p className="location-time">
                    {time}
                    {timeEstimate && <span className="time-estimate"> (Est: {timeEstimate})</span>}
                </p>
                <p className="location-additional">
                    {status === 'skipped' && <span className="skipped-label">Skipped</span>}
                </p>
            </div>
        </li>
    );
}

function RouteTimeline(props: RouteTimelineProps) {
    const { route } = props;

    const locationItems = buildLocationItems(route);

    return (
        <div>
            <h2>Route Timeline</h2>
            <ul className="route-timeline">
            {locationItems.map((loc) => (
                    <LocationItem
                        key={loc.id}
                        name={loc.name}
                        status={loc.status}
                        displayTime={toLocalDisplayTime(loc.timeIso, loc.timeZone)}
                        displayTimeEstimate={loc.timeEstimateIso ? toLocalDisplayTime(loc.timeEstimateIso, loc.timeZone) : undefined}
                    />
                ))
            }
            </ul>
        </div>
    );
}

export default RouteTimeline;
