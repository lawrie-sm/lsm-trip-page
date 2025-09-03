import { useEffect, useState } from "react";
import TripOverview from "./components/TripOverview";
import { mockDundeeTrip, mockDundeeTripScheduled, mockDundeeTripStopped } from "./data";
import { fetchTrip } from "./api";
import type { Trip } from "./types";
import { StringsProvider } from "./strings";

type DataSource = "api" | "moving" | "stopped" | "scheduled";

function App() {
    // Hacky URL param to switch between data sources and locales for easy testing. We only need the effect due to the fetch
    const url = new URL(window.location.href);
    const dataSource = url.searchParams.get('data') as DataSource | null;
    const [trip, setTrip] = useState<Trip | null>(null);

    const locale = url.searchParams.get("lang") ?? navigator.language;

    useEffect(() => {
        if (dataSource === "moving") {
            setTrip(mockDundeeTrip);
            return;
        }

        if (dataSource === "stopped") {
            setTrip(mockDundeeTripStopped);
            return;
        }

        if (dataSource === "scheduled") {
            setTrip(mockDundeeTripScheduled);
            return;
        }

        fetchTrip().then((trip) => {
            setTrip(trip);
        });
    }, [dataSource]);

    if (!trip) {
        return <div className="loader">...</div>;
    }

    return (
        <StringsProvider locale={locale}>
            <TripOverview trip={trip} />)
        </StringsProvider>
    )
}

export default App
