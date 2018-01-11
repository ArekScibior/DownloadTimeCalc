app.controller('downloadCtrl',['$scope', 'growl', function($scope, growl){
    $scope.sizeList = ["KB", "MB", "GB", "TB"];
    $scope.unitSize = $scope.sizeList[2];
    $scope.speedList = ["Mbps"];
    $scope.unitSpeed = $scope.speedList[0];
    $scope.typeList = ["Downloading Speed", "Internet Speed"];
    $scope.typeSpeed = $scope.typeList[1];

     $scope.chooseType = function() {
        if($scope.typeSpeed === $scope.typeList[1]) {
            $scope.speedList = ["Mbps"];
            $scope.unitSpeed = $scope.speedList[0];

        } else if ($scope.typeSpeed === $scope.typeList[0]) {
            $scope.speedList = ["KB/s","MB/s"];
            $scope.unitSpeed = $scope.speedList[1];
        }
    }

    var basicUsage = function () {
        var config = {};
        return growl.error("Ups, dane są niepoprawne!", config);
    };
    //$scope.size = inputSize
    //$scope.speed = inputSpeed
    
    //From sec to hh:mm:ss
    function secondsToTime(secs){
        var hours = Math.floor(secs / (60 * 60));
        if(hours < 10) {
            hours = "0" + Math.floor(secs / (60 * 60));
        }
        var divisorMin = secs % (60 * 60);
        var minutes = Math.floor(divisorMin / 60);
    if(minutes < 10) {
            minutes = "0" + Math.floor(divisorMin / 60);
        }
        var divisorSec = divisorMin % 60;
        var seconds = Math.ceil(divisorSec);
        if(seconds < 10) {
            seconds = "0" + Math.ceil(divisorSec);
        }
        return hours + ":" + minutes + ":" + seconds + " s"; 
    }

    var res;
    $scope.showResult = false;
    //result
    $scope.result = function () {
        //Internet speed
        if($scope.typeSpeed === $scope.typeList[1]) {
            //Mbps
            if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[0] && $scope.unitSpeed === $scope.speedList[0] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round($scope.size / ($scope.speed * 122.07))
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[1] && $scope.unitSpeed === $scope.speedList[0] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round(($scope.size * 1024) / ($scope.speed * 122.07))
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[2] && $scope.unitSpeed === $scope.speedList[0] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round($scope.size * 1048576 / ($scope.speed * 122.07))
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[3] && $scope.unitSpeed === $scope.speedList[0] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round($scope.size * 1073741824 / ($scope.speed * 122.07))
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else {
                console.warn("something wrong")
                $scope.showResult = false;
                basicUsage();
            }
        //Download Speed
        } else if ($scope.typeSpeed === $scope.typeList[0]) {
            //MB/s
            if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[0] && $scope.unitSpeed === $scope.speedList[1] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round($scope.size / $scope.speed / 1024)
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[1] && $scope.unitSpeed === $scope.speedList[1] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round(($scope.size * 1024) / $scope.speed / 1024)
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[2] && $scope.unitSpeed === $scope.speedList[1] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round($scope.size * 1048576 / $scope.speed / 1024)
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[3] && $scope.unitSpeed === $scope.speedList[1] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round($scope.size * 1073741824 / $scope.speed / 1024)
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;          
            //KB/s
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[0] && $scope.unitSpeed === $scope.speedList[0] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round($scope.size / $scope.speed)
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[1] && $scope.unitSpeed === $scope.speedList[0] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round(($scope.size * 1024) / $scope.speed)
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[2] && $scope.unitSpeed === $scope.speedList[0] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round($scope.size * 1048576 / $scope.speed)
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else if($scope.speed > 0 && $scope.size > 0 && $scope.unitSize === $scope.sizeList[3] && $scope.unitSpeed === $scope.speedList[0] && typeof $scope.size === "number" && $scope.size !== "") {
                res = Math.round($scope.size * 1073741824 / $scope.speed)
                $scope.result1 = secondsToTime(res)
                $scope.showResult = true;
            } else {
                console.warn("something wrong")
                $scope.showResult = false;
                basicUsage();
            }
        }  else {
            console.warn("something wrong")
            $scope.showResult = false;
            basicUsage();
        }
    }
}]);