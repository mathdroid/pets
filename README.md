# pets-remote

> A dog finder app that queries data from `https://petfinder.com`

## Routes

### Index

- `/` Index page, shows a list of pets and a search form

### Pet details

- `/pet/[id]` Details page for pet id === `[id]`

## Requirements

1. Node LTS

2. `yarn` (optional -- you may use `npm` which comes by default when you install Node)

3. A `Petfinder` account. You will need your [key and secret pair](https://www.petfinder.com/user/developer-settings/).

## Development

1. Git clone this repository

2. Install dependencies (preferably using `yarn install`)

3. Create a `.env` file at the root of the project (follow `.env.example` for structure), and fill with your Petfinder API key and secret.

4. `yarn dev` or `npm run dev`

## Production

1. `yarn build` or `npm run build`

2. `yarn start` or `npm start`

## License

Copyright 2020 [mathdroid](mailto:hello@mathdro.id)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
