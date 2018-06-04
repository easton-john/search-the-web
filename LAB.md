Search The Web
===

Use `fetch` and VueJS to read data from a third-party API.

## Choose an API

This lab will have you evaluate an API and read the docs to deduce what is required to display data.

Possible API choices:
* https://newsapi.org/
* https://developers.google.com/books/
* https://swapi.co/
* https://pokeapi.co/api/v2/
* https://www.goodreads.com/api

API Requirements:
* Has to support CORS (search from AJAX call) verify [here](test-cors.org)
* Supports searching or some type of parameter
* You most likely will need to sign up for an API "key"

## App Requirements

### Part 1

Use a default `GET` (or hard-code a query parameter) and display data.

#### Model

1. Encapsulate API call to service in a module
1. Import module to (`App`) component. Use the `create` life-cycle method to initiate the search, _but do the actual work in a `method`.
1. Set the data when returned from the callback

#### View

1. Create a component for the list of results and a component for each list item

### Part 2

Instead of data search functionality being initiated by component loading, use the method directly. You will need to add a parameter that takes the search term. Pass the method to the child component.

## Rubric

* Expose API via service module (`fetch`, async callback, etc.) **3pts**
* Display Results **4pts**
* Implement Search **3pts**