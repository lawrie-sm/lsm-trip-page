export function toLocalDisplayTime(timeIso: string, timezone?: string): string {
    return new Intl.DateTimeFormat([], { hour: '2-digit', minute: '2-digit', timeZone: timezone })
        .format(new Date(timeIso));
}
