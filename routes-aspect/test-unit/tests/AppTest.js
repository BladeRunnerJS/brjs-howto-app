var AppTest = TestCase("AppTest");

var App = require("demo/App");

AppTest.prototype.testSomething = function() {
	assertEquals( "hello world!", App.getHello() );
};
