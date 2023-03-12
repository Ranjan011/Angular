angular
    .module("toDoApp", [])
    .run(function ($rootScope) {
        $rootScope.taskList = [];
        let list = localStorage.getItem('taskList');

        if (list == null) {
            $rootScope.taskList = []
        } else {
            $rootScope.taskList = JSON.parse(list);
        }
    })
    .controller("toDoContr", function ($rootScope, $scope) {
        $scope.taskDesc = '';

        $rootScope.addTask = function () {
            console.log("task added")
            let task = { text: $scope.taskDesc, status: false };
            $rootScope.taskList.push(task);
            localStorage.setItem('taskList', JSON.stringify($rootScope.taskList));
            $scope.taskDesc = '';
        }

        $scope.remainingCount = function () {
            let remainingCount = 0;
            $rootScope.taskList.forEach(element => {
                if (element.status === false) {
                    remainingCount++;
                }
            });
            return remainingCount;
        }

        $scope.statusChange = function($index){
            let task = {text:$scope.taskDesc, status:false}
            if(task.status == false){
                task.status = true;
            }else{
                task.status = false;
            }
            localStorage.setItem('taskList',JSON.stringify($rootScope.taskList))
        }

        $scope.clearAll = function () {
            $rootScope.taskList = [];
            localStorage.setItem('taskList', JSON.stringify($rootScope.taskList));
        }


        $scope.clearSingle = function ($index) {
            $rootScope.taskList.splice($index, 1);
            localStorage.setItem('taskList', JSON.stringify($rootScope.taskList))
        }

        $scope.clearCompleted = function () {
            console.log("button clicked")
            $rootScope.taskList = $rootScope.taskList.filter((element) => {
                if (element.status) {
                    return !element.status;
                }
                return !element.status;
            })
            localStorage.setItem('taskList', JSON.stringify($rootScope.taskList))
        }
    }
)