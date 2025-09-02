import RouteTimeline from './RouteTimeline';
import type { Trip } from "../types";

interface TripOverviewProps {
    trip: Trip;
}

function TripOverview(props: TripOverviewProps) {
    const { trip } = props;
    console.log({ trip });
    return (
        <div className="main-container">
            <RouteTimeline route={trip.route} />
        </div>
    );
}

export default TripOverview;
