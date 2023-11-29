## S7 Airline Test
*тестовое задание компании
<br/>
Deploy:
<a href="https://s7airlines-test-h2en.vercel.app/">s7 airline</a>

## Getting Started

First, run the development server:
The project built with <code>bun</code>. You must intall it before running dev server.
Install bun:
<code>curl -fsSL https://bun.sh/install | bash</code>

```bash
bun run dev
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Stack
<ol>
    <li>NextJS</li>
    <li>Typescript</li>
    <li>Redux Toolkit</li>
    <li>Tailwind CSS</li>
    <li>Shadcn ui</li>
    <li>React icons</li>
</ol>

## Features
You can shoose departure and arrival places. Set available dates for fly.
Calendars are in sync, you can't fly back before departure.
There is default inputs validaty check.
All submited data will be stored in Redux store and local storage for
keeping data in case of page refresh.

Fly back date is optional.

