# LSM Trip Page

## Core Requirements
"As a passenger I want to see..."
- The origin and destination of the trip, this is an intercity service so I think this should be super clear
- The current location of the bus - potentially on-map - but mainly on some kind of stepper or progress bar
- The bus's next stop prominently highlighted
- Any delays, and estimated arrival times if it differs from the schedule
Timeboxed to ~6hrs

## Stretch goals
- SVG line, skipped stops are visually skipped
- SSR, progressive enhancement, <14kb initial pageload, text message embeds
- Map with the bus location and stops
- Vehicle info (WiFi, toilets etc.)
- Clear information about the nearest stop, e.g directions, stop URL, or a streeview-style image, could be user location aware

## Best practices
- Should work on mobile, and ideally also on landscape tablets with touch interfaces (this combo is often missed)
- Localisation is probably not needed, but styling and string handling should have localisation in mind (i.e no excessive interpolation, avoid hardcoded left or right margins for text layout purposes)
- Fewer dependencies is better
- Some basic accessibility practices in place
- SEO probably not needed for these, as ephemeral per-trip pages we likely don't care about indexing / marketing

## Performance & Failures
- We assume our users are mostly on mobile and mostly travelling. We want to minimise page sizes, large assets and reduce roundtrips - which is just good practice anyway. We can probably make the entire thing a server component, to avoid shipping the runtime on initial load.
- We'd like to know the freshness of the GPS data and status of the user's network connection, so we can show a warning toast that the information may be out of date. We can display the last update time.
- We should be able to show any API errors in a clear, user friendly way. Usually a human readable / non-technical error screen, with the option to fold out detailed error information if needed for support.
- If we have time, we can do exponential backoff, caching etc. - Tanstacks Query makes this easier

## Implementation notes
- Starting with a clientside rendered React page with Vite. Simple and I'm familiar with it. Also assumed something like this
would need to slot into a larger React-y codebase with a shared component library etc.
- Grabbed the API data and hardcoded it alongside generated types for quick dev without constantly hitting the API itself
- Focus on getting key information in first, then some styling, then nice-to-haves
- Judicious, integration-style testing on the DOM only

## TODOs
- Debug dropdown to demo different route states
- Live polling of API w/ react-query
- Handling of old data, errors and disconnects
- Stretch goals
