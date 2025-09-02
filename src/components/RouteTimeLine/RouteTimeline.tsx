import type { LocationTime } from "../../types";
import { buildLocationItems } from "./buildLocationItems";

// Shared types

export type LocationItemStatus = 'scheduled' | 'arrived' | 'departed' | 'skipped' | 'next' | 'unknown';

export interface LocationItem {
    id: number;
    name: string;
    status: LocationItemStatus;
    timeIso: string;
    timeEstimateIso?: string;
    timeZone?: string;
}

// Util fn - This would likely moved in with other time display utils

function toLocalDisplayTime(timeIso: string, timeZone?: string): string {
    return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', timeZone: timeZone })
        .format(new Date(timeIso));
}

// Components

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

interface RouteTimelineProps {
    route: LocationTime[];
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
