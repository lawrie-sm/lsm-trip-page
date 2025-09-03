import { useStrings } from "../../strings";
import { toLocalDisplayTime } from "../../time";
import type { Trip } from "../../types";

interface TripHeaderProps {
    trip: Trip;
}

function TripHeader(props: TripHeaderProps) {
    const { trip } = props;

    const { strings, locale } = useStrings();

    const scheduledDepartureTime = toLocalDisplayTime(trip.route[0].departure.scheduled, trip.route[0].location.timezone, locale);
    const origin = trip.route[0].location.region_name;
    const destination = trip.route[trip.route.length - 1].location.region_name;
    const tripDisplayTitle = `${scheduledDepartureTime} ${origin} ${strings.header.to} ${destination}`;

    const routeDisplayTitle = `${strings.header.route} ${trip.description.route_number}`;

    return (
        <header>
            <h1 className="trip-header">{tripDisplayTitle}</h1>
            <h2 className="trip-subheader">{routeDisplayTitle}</h2>
        </header>
    );
}

export default TripHeader;
