import type { LocationTime } from "../types";

export function makeMockLocationTime(ltPartial: Partial<LocationTime> & {
    id?: number;
    timezone?: string;
} = {}): LocationTime {
    const id = ltPartial.id ?? 1;
    const timezone = ltPartial.timezone ?? 'UTC';

    return {
        id,
        skipped: false,
        location: {
            id,
            name: `Stop ${id}`,
            timezone,
            type: 'STOP_POINT',
            region_name: '',
            code: '',
            code_detail: '',
            detailed_name: '',
            lon: 0,
            lat: 0,
            atco_code: '',
            has_future_activity: false,
            zone: [],
            heading: 0,
            area_id: 0,
        },
        allow_boarding: true,
        allow_drop_off: true,
        booking_cut_off_mins: 0,
        pre_booked_only: false,
        ...(ltPartial as object),
        arrival: {
            scheduled: '2025-09-02T10:00:00Z',
            actual: undefined,
            estimated: undefined,
            ...(ltPartial.arrival ?? {}),
        },
        departure: {
            scheduled: '2025-09-02T10:05:00Z',
            actual: undefined,
            estimated: undefined,
            ...(ltPartial.departure ?? {}),
        },
    };
}

