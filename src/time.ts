export function toLocalDisplayTime(timeIso: string, timeZone?: string): string {
    return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', timeZone: timeZone })
        .format(new Date(timeIso));
}
