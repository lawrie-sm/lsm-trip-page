import { createContext, useContext } from "react";

// We would normally use i18n for this. Also we probably want screen reader specific labels

type Locale = 'en-GB' | 'fr';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const strings: Record<Locale, any> = {
    'en-GB': {
        status: {
            scheduled: { label: "Scheduled:" },
            arrived: { label: "Arrival:", extra: "Boarding" },
            departed: { label: "Departed:" },
            skipped: { extra: "Skipped" },
            next: { label: "Next stop:" },
            unknown: { label: "Time:" },
        },
        estimate: { label: "Est:" },
        header: { to: "to", route: "Route" },
    },
    fr: {
        status: {
            scheduled: { label: "Prévu :" },
            departed: { label: "Départ :" },
            arrived: { label: "Départ :", extra: "Embarquement" },
            skipped: { extra: "Non desservi" },
            next: { label: "Prochain arrêt :" },
            unknown: { label: "Heure :" },
        },
        estimate: { label: "Est. :" },
        header: { to: "à", route: "Ligne" },
    },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const StringsContext = createContext<Record<string, any>>(strings['en-GB']);

// eslint-disable-next-line react-refresh/only-export-components
export const useStrings = () => useContext(StringsContext);

export function StringsProvider({ locale, children }: { locale: string | null; children: React.ReactNode; }) {
    const loc: Locale = /^fr/i.test(locale ?? "") ? "fr" : "en-GB";
    const value = strings[loc];
    return (
        <StringsContext.Provider value={value}>
            {children}
        </StringsContext.Provider>
    )
}
