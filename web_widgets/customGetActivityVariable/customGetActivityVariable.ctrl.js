/**
 * The controller is a JavaScript function that augments the AngularJS scope and exposes functions that can be used in the custom widget template
 * 
 * Custom widget properties defined on the right can be used as variables in a controller with $scope.properties
 * To use AngularJS standard services, you must declare them in the main function arguments.
 * 
 * You can leave the controller empty if you do not need it.
 */
function ($scope, $http) {
    //  call the bonita API
    $scope.theResult = '';
    $scope.properties.resultingVariable = $scope.theResult;
    $http.get($scope.properties.APIUrl+$scope.properties.activityId+'/'+$scope.properties.variableName).then( 
                function successCallback(response) {
                    if ($scope.properties.showTheResult == "Yes")
                        $scope.theResult = response.data[$scope.properties.propertyToDisplay];
                    console.log('hello');
                    $scope.properties.resultingVariable = response.data;
                }
            );
    
}