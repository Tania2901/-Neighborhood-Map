# Bucharest City Museum Map
# Udacity - FEND Neighborhood Map Project

Bucharest City Museum Map is a single page application build with react featuring a map of a neighborhood. 
You can highlight locations in the map by selecting one of the locations from a predefined list. 
Clicking a location on the list displays unique information about the location, and animates its associated map marker. 
You can use a filter as well to filter the locations.

## Code

JS 
- `Head.js` (Contains the Header)
- `App.js` (Main application file)
- `Data.js` (Contains Locations to populate the map)
- `Draw.js` (Contains the Side and Search bar components)
- `Place.js` (Contains Locations info fetched from Wikipedia)
- `Map.js` (Asynchronously load the Google Maps script)

HTML - `Index.html` is where all the magic happens and all the data is binded.

## Installation

You must have npm installed to build and run the app.

git clone

Go to the folder where you cloned the repository.

Start your GIT bash or CMD :

npm install 

Then npm start 

You should be able to see the app running on your default browser: http://localhost:3000/


## Production mode

If you like to run the app in production mode you should run the following commands:

npm run build && serve -s build

And then visit localhost:5000.

## Third Libarary
- [material ui](http://www.material-ui.com/#/) 
- [Fetch JSONP](https://github.com/camsong/fetch-jsonp)
