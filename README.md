# React Native Restaurant Search

## MAD9135 Final Project

### TO DO:

- [x] use expo location module to get users location
- [ ] when the user clicks on the flat list display the venue selected in the FoodVenueDetailsScreen
- [ ] show restaurant distance in the flat list
- [ ] order list by increasing distance
- [ ] update location.service.js to reverse geocode and get the users city/ suburb location to be displayed in the app

## Bugs:

- [x] need to look at how helpers is exported, have to use function as getGeolocation.getGeolocation or getVenues.getVenues | solution forgot to default export and also did improt \* (all) as getVenues isntead of just import getVenues
- [x] data is being fetched from the yelp api but it is not being displayed in the flat list for some reason? | SOLUTION: Forgot to set styles on the FlatList to display itself like flex: 1

## Background

You will build a simple app to look-up nearby restaurants using the Yelp Fusion API - Business Search. You may choose to target either iOS or Android for your app design, but it should be consistent with Yelp's Mobile Style Guide
and Brand Guidelines

## Core Requirements

- [ ] When initially opened, the application only displays a button for the user to click in order to download the list of restaurants nearby.
- [x] While the application is fetching that data, a spinner should be displayed indicating to the user that something is happening.
- [ ] The search that you will implement will need to use the native GPS in order to provide a list to the user based on his coordinates. Remember, you will need to ask the user's permission to use their current location.
- [ ] The list of restaurants will show the names as well as the distance from the user's location displayed in kilometres (with 2 decimals).
- [ ] The list should be ordered by increasing distance.
- [ ] Clicking on one of the list items should show the details for that place.
- [ ] Those restaurant details should include at least: name, phone, distance, price and rating.
- [ ] Please format the information display and include an image inside the view.
- [ ] Think about what other features you can add to improve the app.

## Bonus Marks

- In addition to the mandatory requirements above, you may earn up to 10% in extra credit on your final grade for correctly implementing these bonus features.

* [ ] In addition to the list view, allow the user to display the search results on a map. The map should be centred on the user's current position. 5%
* [x] Add a bottom tab navigator to filter the results. Tabs should include: Restaurants, Coffee, Bakeries, Food Trucks. 2%
* [ ] Add a search bar to the Restaurant result list to allow the user to filter the list by a particular type of restaurant. e.g. Mexican, Italian, Fish 3%

## Submission

- [ ] Create a private repo on GitHub with the name mad9135-f20-p2-react-native-yelp.
- [x] ~~Your pair programming partner should be a collaborator on your repo~~ solo project.
- [ ] There should be commits to this project repo from ~~BOTH partners~~ solo final.
- [ ] Invite GitHub user rlmckenney as a collaborator on your private repo.
- [ ] Install your app on one of the phones from the lab cabinet and demo it to your teacher.
- [ ] Submit both the URL of the GitHub code repo and the Expo public link to the Brightspace assignment folder.

## Helpful Docs:

- https://reactnative.dev/docs/network (look at the function componenet, similar standard but a location.service.js and yelp.service.js will need to be defined in order to repeat the fetch in multiple files or pass down the results as a prop?)
