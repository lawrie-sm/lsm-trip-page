import { useStrings } from "../../strings";
import { toLocalDisplayTime } from "../../time";
import type { LocationTime } from "../../types";
import { buildLocationItems } from "./buildLocationItems";

export type LocationItemStatus = 'scheduled' | 'arrived' | 'departed' | 'skipped' | 'next' | 'unknown';

export interface LocationItem {
    id: number;
    name: string;
    status: LocationItemStatus;
    timeIso: string;
    timeEstimateIso?: string;
    timezone?: string;
}


interface LocationItemProps {
    name: string;
    status: LocationItemStatus;
    timeIso: string;
    timeEstimateIso?: string;
    timezone?: string;
}

function LocationItem(props: LocationItemProps) {
    const {
        name,
        status,
        timeIso,
        timeEstimateIso,
        timezone,
    } = props;

    const isCurrent = status === 'next' || status === 'arrived';
    const { strings, locale } = useStrings();

    return (
        <li
            className="location-item"
            data-status={status}
            aria-current={isCurrent ? 'step' : undefined}
        >
            <div className="location-status-icon" aria-hidden="true" />

            <div className="location-details">
                <p className="location-name">{name}</p>

                {strings.status[status].label && (
                    <p className="location-time">
                        <span className="location-label">
                            {strings.status[status].label}
                        </span>
                        {' '}
                        <time dateTime={timeIso}>
                            {toLocalDisplayTime(timeIso, timezone, locale)}
                        </time>

                        {timeEstimateIso && (
                            <span className="time-estimate">
                                {' '}
                                (
                                {strings.estimate.label}
                                {' '}
                                <time dateTime={timeEstimateIso}>
                                    {toLocalDisplayTime(timeEstimateIso, timezone, locale)}
                                </time>
                                )
                            </span>
                        )}
                    </p>
                )}

                {strings.status[status].extra && (
                    <p className="location-additional">
                        {strings.status[status].extra}
                    </p>
                )}
            </div>
        </li>
    );
}

interface RouteTimelineProps {
    route: LocationTime[];
}

function RouteTimeline(props: RouteTimelineProps) {
    const { route } = props;

    const { strings } = useStrings();

    // We might want to memoize this, probably overkill
    const locationItems = buildLocationItems(route);

    return (
        <ol className="route-timeline" aria-label={strings.tripProgress.label}>
            {locationItems.map((loc) => {
                return (
                    <LocationItem
                        key={loc.id}
                        name={loc.name}
                        status={loc.status}
                        timeIso={loc.timeIso}
                        timeEstimateIso={loc.timeEstimateIso}
                        timezone={loc.timezone}
                    />
                )
            })
            }
        </ol>
    );
}

export default RouteTimeline;
