
describe('YATDA E2E Tests', function () {

  let expectedMsg = 'Yet Another To Do App';


  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });

});
