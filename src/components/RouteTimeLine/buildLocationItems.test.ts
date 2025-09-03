import { describe, it, expect } from 'vitest';
import { buildLocationItems } from './buildLocationItems';
import { makeMockLocationTime } from '../../test/helpers';

describe('buildLocationItems', () => {
    it('returns [] when route is empty', () => {
        expect(buildLocationItems([])).toEqual([]);
    });

    it('marks first untouched stop as next and others as scheduled, if we have departed origin', () => {
        const route = [
            makeMockLocationTime({ id: 1, departure: { scheduled: '2025-09-02T09:00:00Z', actual: '2025-09-02T09:02:00Z' } }),
            makeMockLocationTime({ id: 2 }),
            makeMockLocationTime({ id: 3 }),
        ];

        const out = buildLocationItems(route);
        expect(out.map(x => [x.id, x.status])).toEqual([
            [1, 'departed'],
            [2, 'next'],
            [3, 'scheduled'],
        ]);
    });

    it('when bus is stopped (arrival.actual present but no departure), disables next for subsequent stops', () => {
        const route = [
            makeMockLocationTime({
                id: 1,
                arrival: { scheduled: '2025-09-02T09:50:00Z', actual: '2025-09-02T09:51:00Z' },
                departure: { scheduled: '2025-09-02T09:55:00Z' }
            }),

            makeMockLocationTime({ id: 2 }),
            makeMockLocationTime({ id: 3 }),
        ];

        const out = buildLocationItems(route);
        expect(out[0].status).toBe('arrived');
        expect(out.slice(1).every(x => x.status === 'scheduled')).toBe(true);
        expect(out.some(x => x.status === 'next')).toBe(false);
    });

    it('when bus has not started route (no arrival.actual on origin), disables next for subsequent stops', () => {
        const route = [
            makeMockLocationTime({ id: 1 }),
            makeMockLocationTime({ id: 2 }),
        ];

        const out = buildLocationItems(route);
        expect(out.some(x => x.status === 'next')).toBe(false);
    });

    it('skipped uses arrival.scheduled as time and status skipped', () => {
        const route = [makeMockLocationTime({ id: 1, skipped: true, arrival: { scheduled: '2025-09-02T08:00:00Z' } })];

        const out = buildLocationItems(route);
        expect(out[0]).toMatchObject({
            id: 1,
            status: 'skipped',
            timeIso: '2025-09-02T08:00:00Z',
        });
    });

    it('departed uses departure.actual as time', () => {
        const route = [makeMockLocationTime({ id: 1, departure: { scheduled: '2025-09-02T09:00:00Z', actual: '2025-09-02T09:03:00Z' } })];

        const out = buildLocationItems(route);
        expect(out[0]).toMatchObject({
            id: 1,
            status: 'departed',
            timeIso: '2025-09-02T09:03:00Z',
        });
    });

    it('arrived displays departure.scheduled as time, shows estimate only if minute is different', () => {
        const route = [

            // Estimate is same minute, so not displayed
            makeMockLocationTime({
                id: 1,
                arrival: { scheduled: '2025-09-02T10:00:00Z', actual: '2025-09-02T10:00:30Z' },
                departure: { scheduled: '2025-09-02T10:05:00Z', estimated: '2025-09-02T10:05:45Z' }, // same minute 10:05
            }),

            // Estimate is a different minute, so is displayed
            makeMockLocationTime({
                id: 2,
                arrival: { scheduled: '2025-09-02T10:10:00Z', actual: '2025-09-02T10:10:00Z' },
                departure: { scheduled: '2025-09-02T10:15:00Z', estimated: '2025-09-02T10:16:00Z' },
            }),
        ];

        const out = buildLocationItems(route);
        expect(out[0]).toMatchObject({
            id: 1,
            status: 'arrived',
            timeIso: '2025-09-02T10:05:00Z',
            timeEstimateIso: undefined,
        });
        expect(out[1]).toMatchObject({
            id: 2,
            status: 'arrived',
            timeIso: '2025-09-02T10:15:00Z',
            timeEstimateIso: '2025-09-02T10:16:00Z',
        });
    });

    it('scheduled shows arrival.scheduled as time, displays estimate only if minute changes', () => {
        const route = [

            // Minutes are the same, so estimate not shown
            makeMockLocationTime({
                id: 1,
                arrival: { scheduled: '2025-09-02T11:00:00Z', estimated: '2025-09-02T11:00:59Z' }, 
            }),

            // Minutes differ, so estimate is shown
            makeMockLocationTime({
                id: 2,
                arrival: { scheduled: '2025-09-02T11:10:00Z', estimated: '2025-09-02T11:11:00Z' },
            }),
        ];

        const out = buildLocationItems(route);
        expect(out[0]).toMatchObject({ id: 1, status: 'scheduled', timeEstimateIso: undefined });
        expect(out[1]).toMatchObject({ id: 2, status: 'scheduled', timeEstimateIso: '2025-09-02T11:11:00Z' });
    });

    it('passes through per-stop timezone', () => {
        const route = [
            makeMockLocationTime({ id: 1, timezone: 'Europe/London' }),
            makeMockLocationTime({ id: 2, timezone: 'Europe/Berlin' }),
        ];

        const out = buildLocationItems(route);
        expect(out[0].timezone).toBe('Europe/London');
        expect(out[1].timezone).toBe('Europe/Berlin');
    });
});
