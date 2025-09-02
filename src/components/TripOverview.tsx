import RouteTimeline from './RouteTimeLine/RouteTimeline';
import type { Trip } from "../types";
import TripHeader from './TripHeader/TripHeader';

interface TripOverviewProps {
    trip: Trip;
}

function TripOverview(props: TripOverviewProps) {
    const { trip } = props;

    return (
        <div className="main-container">
            <TripHeader trip={trip} />
            <RouteTimeline route={trip.route} />
        </div>
    );
}

export default TripOverview;
