// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import type { LocationTime } from '../../types';
import RouteTimeline from './RouteTimeline';

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
        allow_boarding: true,
        allow_drop_off: true,
        booking_cut_off_mins: 0,
        pre_booked_only: false,
        ...(ltPartial as object),
    };
}

describe('RouteTimeline render smoke', () => {
    it('renders items, marks exactly one next, shows Skipped and Est labels', () => {
        const route: LocationTime[] = [
            // Departed
            makeMockLocationTime({
                id: 1,
                departure: { scheduled: '2025-09-02T09:00:00Z', actual: '2025-09-02T09:02:00Z' },
            }),

            // Next with estimate
            makeMockLocationTime({
                id: 2,
                arrival: { scheduled: '2025-09-02T11:10:00Z', estimated: '2025-09-02T11:11:00Z' },
            }),

            // Skipped
            makeMockLocationTime({ id: 3, skipped: true }),
        ];

        const { container } = render(<RouteTimeline route={route} />);

        expect(container.querySelectorAll('li.location-item')).toHaveLength(3);
        expect(container.querySelectorAll('[data-status="next"]')).toHaveLength(1);
        expect(screen.getByText('Stop 2')).toBeInTheDocument();
        expect(screen.getByText('Skipped')).toBeInTheDocument();
        expect(screen.getByText(/\(Est:/)).toBeInTheDocument();
    });
});
