# LSM Trip Page

## Usage
- `npm install`
- `npm run dev`
- Open `http://localhost:5173`. This will return the trip associated with the first leg of the first quote from the API. If the API request fails, it will use mock data
- Mock data can also be manually selected to demonstrate different states. Try `?data=moving`, `stopped`, and `scheduled`.
- French localisation can be demoed by adding `&lang=fr`, (`lang=en-GB` also works but it's the default)
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
- Client-rendered React, built with Vite and Vitest for testing. Simple and I'm familiar with it. Also assumed something like this would need to slot into a larger React-y codebase with a shared component library etc. Normally for a task like this a basic MVC-style server-rendered app would be fine
- I didn't focus on writing an extensive API client in this exercise. I've left notes instead on this in the api.ts file. Most dev work was done against mock data to avoid hitting the real API repeatedly
- CSS was kept vanilla for the sake of time
- Most of my time was spent handling edge cases on time displays and polishing the timeline. Also added tests and localisation since these were low hanging fruit

## Considered but not implemented
- Cancelled trip handling. We would not want to ship without this. But it's such a simple addition and probably not interesting to discuss
- SSR, progressive enhancement, <14kb initial pageload, text message embeds etc. All quite good if the plan is to text direct links to passengers who might have spotty data
- A map element with the bus location, stops etc. Fast to add with a mapping library since we have coords, but I wouldn't be able to polish it
- Vehicle info (WiFi, toilets etc.)
- Clear information about the nearest stop, e.g directions, stop URL, or a streeview-style image, could be user location aware
