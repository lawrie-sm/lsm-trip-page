import { toLocalDisplayTime } from "../../time";
import type { Trip } from "../../types";

interface TripHeaderProps {
    trip: Trip;
}

function TripHeader(props: TripHeaderProps) {
    const { trip } = props;

    const scheduledDepartureTime = toLocalDisplayTime(trip.route[0].departure.scheduled, trip.route[0].location.timezone);
    const origin = trip.route[0].location.region_name;
    const destination = trip.route[trip.route.length - 1].location.region_name;
    const tripDisplayTitle = `${scheduledDepartureTime} ${origin} to ${destination}`;

    const routeDisplayTitle = `Route ${trip.description.route_number}`;

    return (
        <>
            <h1 className="trip-header">{tripDisplayTitle}</h1>
            <h2 className="trip-subheader">{routeDisplayTitle}</h2>
        </>
    );
}

export default TripHeader;
