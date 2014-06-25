var MybladeViewModelTest = TestCase( 'MybladeViewModelTest' );

var MybladeViewModel = require( 'demo/blades/myblade/MybladeViewModel' );

MybladeViewModelTest.prototype.testSomething = function() {
  var model = new MybladeViewModel();
  assertEquals( 'Hello World!', model.message() );
};
