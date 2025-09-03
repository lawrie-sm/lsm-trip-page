// @vitest-environment jsdom

import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { makeMockLocationTime } from '../../test/helpers';
import type { LocationTime } from '../../types';
import { StringsProvider } from '../../strings';
import RouteTimeline from './RouteTimeline';

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

        const { container } = render(
            <StringsProvider locale={'en-GB'}>
                <RouteTimeline route={route} />
            </StringsProvider>
        );

        expect(container.querySelectorAll('li.location-item')).toHaveLength(3);
        expect(container.querySelectorAll('[data-status="next"]')).toHaveLength(1);
        expect(screen.getByText('Stop 2')).toBeInTheDocument();
        expect(screen.getByText('Skipped')).toBeInTheDocument();
        expect(screen.getByText(/\(Est:/)).toBeInTheDocument();
    });
});
