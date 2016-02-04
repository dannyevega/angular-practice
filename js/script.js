(function(){
	var app = angular.module('store', []);

	app.controller('StoreController', function(){
		this.products = gems;
	});

	var gems	= [
		{
			name: 'Dodecahedron',
			price: 2.95,
			description: 'amazing...',
			canPurchase: true
		},
		{
			name: 'Pentagonal Gem',
			price: 5.95,
			description: 'hella crazy in da light fam...',
			canPurchase: false
		}		
	]

})();

// DIRECTIVES is a marker on an HTML tag	that tells Angular to run or reference some JS code 
// (i.e. using ng-controller to name a controller)
// ng-show will only show the expression on the page if it evaluates to true
// ng-hide will hide if the expression on the page evaluates to true

// MODULES are where we write pieces of our Angular app 
// EX: var app = angular.module('store', []);
// makes our code more maintainable, testable, and readable 
// where we define dependencies for our app

// EXPRESSIONS allow you to insert dynamic values into HTML
// EX: I am {{4 + 6}} --> I am 10 

// CONTROLLERS are where we define our apps behavior by defining functions and values
// EX: 	app.controller('StoreController', function(){ code goes here });
// ng-controller="StoreController as store"
// directive is ng-controller
// StoreController is name of controller
// store is alias given to access this controller in the HTML document i.e. store.product.name