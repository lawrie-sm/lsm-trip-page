# LSM Trip Page

## Usage
- `npm install`
- `npm run dev`
- Open `http://localhost:5173`.
- By default, it will use the API, but it supports mock data and localisation with query strings. Try `?data=moving&lang=fr` for example
- For tests, run `npm test`

## Core requirements
"As a passenger I want to see..."
- The time, origin and destination of the trip, this is an intercity service so I think this should be super clear
- The current location of the bus on some kind of stepper showing past and future stops
- The bus's next stop prominently highlighted, or the current stop if it's boarding
- Show estimated arrival or departure times in a context-sensitive way
Timeboxed to ~6hrs

## Feature list
- Route timeline with context-sensitive labelling for past, current, next, and future stops. Avoids overloading the user with all six arrival/departure times
- Header with origin, destination and route number
- Hand-rolled localisation, i18n-style without the full dependency
- Accessibility basics, semantic HTML and aria attrs in the timeline component
- Some basic integration and unit tests where appropriate

## Tech decisions
- I used clientside rendered React page with Vite. Simple and I'm familiar with it. Also assumed something like this would need to slot into a larger React-y codebase with a shared component library etc. Normally for a task like this a basic MVC-style server-rendered app would be fine
- Grabbed the API data and hardcoded it alongside generated types for quick dev without constantly hitting the API itself. I didn't focus on writing an extensive API client in this exercise. I've left notes instead on this in the api.ts file
- CSS was kept vanilla for the sake of time
- Most of the time was spent handling edge cases and polishing the timeline. I used spare time to add tests and localisation since these were low hanging fruit

## Considered but not implemented
- Cancelled trip handling, we would not want to ship without this. But it's a simple check so I skipped it here
- SSR, progressive enhancement, <14kb initial pageload, text message embeds etc. All quite good if the plan is to text direct links to passengers who might have spotty data
- A map element with the bus location, stops etc.
- Vehicle info (WiFi, toilets etc.)
- Clear information about the nearest stop, e.g directions, stop URL, or a streeview-style image, could be user location aware
