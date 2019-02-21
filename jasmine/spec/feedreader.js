/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', () => {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('ensure allFeeds are defined', () => {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
        /* loop through each feed in allFeeds object and ensures
         * it has a URL definedand not empty.
         */
         it('ensure that all feeds objects has URL defined and not empty', () => {
           for(let obj of allFeeds) {
            expect(obj.url).toBeDefined();
            expect(obj.url.length).toBeGreaterThan(0);
           }
         });
        /* loop through each feed in the allFeeds object and
         * ensures it has a name defined and not empty.
         */
         it('ensure that all feeds objects has name defined and not empty', () => {
           for(let obj of allFeeds) {
            expect(obj.name).toBeDefined();
            expect(obj.name.length).toBeGreaterThan(0);
           }
         });
    });


    //  The menu test suite
describe('The menu' , () => {
         it('ensures the menu element is hidden by default' , () => {
           expect($('body').hasClass('menu-hidden')).toBeTruthy();
         })

          it('ensures the menu changes visibility when the menu icon is clicked' , () => {
            // using trigger to check clicks in the menu-icon
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeFalsy();
            $('.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBeTruthy();
          });
   });

    // Initial Entries test suite
    describe('Initial Entries', () => {
        /*loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
         beforeEach((done) => {
           loadFeed(0,done);
         });
         it('ensures there is at least a single entry element when the loadFeed is called',(done) => {
           //specify the .entry class
           expect($('.feed .entry').length).toBeGreaterThan(0);
           done();
         });
      });

    // New Feed Selection test suite
    describe('New Feed Selection',() => {
      let firstFeed , secondFeed;
      beforeEach((done) => {
        //load feed with id 1 to get inner html in firstFeed
         loadFeed(1, () => firstFeed=$('.feed').html());
         //diffrent feed id store inner html into secondFeed variable
         loadFeed(0,()=>{
          secondFeed = $('.feed').html();
         done()});
      });
         it('when a new feed is loaded the content actually changes',(done) => {
           expect(firstFeed != secondFeed).toBe(true);
           done();
         });
      });
}());
