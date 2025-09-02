import { toLocalDisplayTime } from "../../time";
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
                    {status === 'skipped' && <span className="location-extra-label">Skipped</span>}
                    {status === 'arrived' && <span className="location-extra-label">Stopped</span>}
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
    );
}

export default RouteTimeline;
