var MybladeViewModelTest = TestCase( 'MybladeViewModelTest' );

var MybladeViewModel = require( 'demo/blades/myblade/MybladeViewModel' );

MybladeViewModelTest.prototype.testSomething = function() {
  var model = new MybladeViewModel();
  assertTrue( model.message().indexOf("The epoch date was ") === 0 );
};
