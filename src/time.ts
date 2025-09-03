export function toLocalDisplayTime(timeIso: string, timezone: string, locale: string): string {
    return new Intl.DateTimeFormat(
        locale,
        {
            hour: '2-digit',
            minute: '2-digit',
            hourCycle: 'h23',
            timeZone: timezone
        })
        .format(new Date(timeIso));
}
