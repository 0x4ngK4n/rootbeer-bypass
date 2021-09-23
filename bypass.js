Java.perform(function(){
    // Create an instance of the RootBeer class
    var RootBeer = Java.use("com.scottyab.rootbeer.RootBeer");
    
    // Hook the checkForRWPaths() function
    RootBeer.checkForRWPaths.overload().implementation = function(){
        // Change the return value to "false"
	console.log("called");
        return false
    };
    RootBeer.checkForRootNative.overload().implementation = function(){
	console.log("root native called");
	return false;
    };
    RootBeer.checkForBinary.overload('java.lang.String').implementation = function(){
        console.log("checkforBinary called");
        return false;
    };
    RootBeer.checkSuExists.overload().implementation = function(){
        console.log("checkSuExists called");
        return false;
    };
});
