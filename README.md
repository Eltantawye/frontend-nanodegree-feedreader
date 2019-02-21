# Feed Reader Testing

[UDACITY](http://udacity.com) FEND project, given a web-based application that reads RSS feeds , Using [Jasmine](http://jasmine.github.io/) to test our project and JQuery .

## Installing 
* Clone or Download this repository and load `index.html` .
* You will find all tests in `jasmine/spec/feedreader.js` .

![screensho](https://user-images.githubusercontent.com/26147983/53139113-43785380-3591-11e9-942e-f66421a884c8.png)
## Applied Tests
### RSS Feeds
- ensure `allFeeds` are defined and not empty .
- ensure that all feeds objects has `URL` defined and not empty .
- ensure that all feeds objects has `name` defined and not empty .

### The menu
- ensures the `menu element` is hidden by default
- ensures the `menu` changes visibility when the `menu icon` is clicked

### Initial Entries
- ensures there is at least a single entry element when the `loadFeed` is called

### New Feed Selection
- when a new feed is loaded the `content` actually changes
