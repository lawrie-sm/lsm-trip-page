import { useEffect, useState } from "react";
import TripOverview from "./components/TripOverview";
import { mockDundeeTrip, mockDundeeTripScheduled, mockDundeeTripStopped } from "./data";
import { fetchTrip } from "./api";
import type { Trip } from "./types";
import { StringsProvider } from "./strings";

type DataSource = "api" | "moving" | "stopped" | "scheduled";

function App() {
    // Hacky URL param to switch between data sources and locales for easy testing.
    const url = new URL(window.location.href);
    const dataSource = url.searchParams.get('data') as DataSource | null;
    const [trip, setTrip] = useState<Trip | null>(null);

    const locale = url.searchParams.get("lang") ?? navigator.language;

    // I prefer to avoid useEffect + useState combos, but it's necessary here due to the async fetch.
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

        // Default to live API if no query params, falls back to mock data on error
        const controller = new AbortController();
        (async () => {
            try {
                const t = await fetchTrip(controller.signal);
                if (controller.signal.aborted) return;
                setTrip(t);
            } catch (err) {
                if (controller.signal.aborted) return;
                console.error("Failed to fetch trip data. Using mock data. Error: ", err);
                setTrip(mockDundeeTrip);

                const redirectUrl = new URL(window.location.href);
                redirectUrl.searchParams.set("data", "moving");
                if (!redirectUrl.searchParams.get("lang")) {
                    redirectUrl.searchParams.set("lang", "en-GB");
                }
                window.history.replaceState(null, "", redirectUrl.toString());
            }
        })();

        return () => {
            controller.abort();
        };
    }, [dataSource]);

    if (!trip) {
        return <div className="loader">...</div>;
    }

    return (
        <StringsProvider locale={locale}>
            <TripOverview trip={trip} />
        </StringsProvider>
    )
}

export default App
