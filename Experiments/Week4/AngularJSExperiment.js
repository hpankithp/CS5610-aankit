var app = angular.module("DataBinding", []);

app.controller("DataBindingController",
function ($scope) {

    $scope.data = "This data is coming from the Controller";

    $scope.actualValue = { firstName: "Ankit", lastName: "Agrawal" };
    $scope.reset = function () {
        $scope.modifiedvalue = angular.copy($scope.actualValue);
    };
    $scope.reset();
});