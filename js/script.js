var myApp = angular
			.module('myApp',[])
			.controller('myController',function($scope){
				
				$scope.message = "angularjs sucks right now";
				
				var employee = {
					firstName : "navneet",
					lastName  : "priya",
					gender    : "female"
				};
				$scope.employee = employee;

				var country = {
					image : "images/blog-1.jpg",
					name : "india"
				};
				$scope.country = country;

				var employees = [
					{ firstName : "navneet", lastName : "priya", gender : "female", salary : 10000},
					{ firstName : "navneet", lastName : "priya", gender : "female", salary : 10000},
					{ firstName : "navneet", lastName : "priya", gender : "female", salary : 10000},
					{ firstName : "navneet", lastName : "priya", gender : "female", salary : 10000},
					{ firstName : "navneet", lastName : "priya", gender : "female", salary : 10000}
				];
				$scope.employees = employees;

				var countries = [
					{	
						name: "India",
						cities: [
							{name: "Delhi"},
							{name: "Mumbai"},
							{name: "Chennai"}
						]
					},
					{	
						name: "India",
						cities: [
							{name: "Delhi"},
							{name: "Mumbai"},
							{name: "Chennai"}
						]
					},
					{	
						name: "India",
						cities: [
							{name: "Delhi"},
							{name: "Mumbai"},
							{name: "Chennai"}
						]
					}
				];
				$scope.countries = countries;

				var technologies = [
					{name: "C" ,likes : 0, dislikes : 0},
					{name: "C++" ,likes : 0, dislikes : 0},
					{name: "HTML" ,likes : 0, dislikes : 0},
					{name: "CSS" ,likes : 0, dislikes : 0},
				];
				$scope.technologies = technologies;
				$scope.incrementLikes = function(technology){
					technology.likes++;
				}
				$scope.incrementDislikes = function(technology){
					technology.dislikes++;
				}

				// filter
				// var emps = [
				// 	{name: "navneet" , dob: new Date("June 15,1996") , gender: "female" , salary: 10000.456 , salary: 10000.235},
				// 	{name: "priya" , dob: new Date("June 15,1996") , gender: "female" , salary: 20000.456 , salary: 20000.235},
				// 	{name: "ashu" , dob: new Date("May 20,1996") , gender: "male" , salary: 80000.456 , salary: 80000.235},
				// 	{name: "arghya" , dob: new Date("Nov 8,1996") , gender: "male" , salary: 75000.456 , salary: 75000.235},
				// 	{name: "oggy" , dob: new Date("Nov 8,1996") , gender: "male" , salary: 57000.456 , salary: 57000.235},
				// ];
				// $scope.emps = emps;
				// $scope.rowLimit = 3;

				var emps = [
					{name: "navneet" , dob: new Date("June 15,1996") , gender: "female" , salary: 10000.456 },
					{name: "priya" , dob: new Date("June 15,1996") , gender: "female" , salary: 20000.456 },
					{name: "ashu" , dob: new Date("May 20,1996") , gender: "male" , salary: 80000.456 },
					{name: "arghya" , dob: new Date("Nov 8,1996") , gender: "male" , salary: 75000.456 },
					{name: "oggy" , dob: new Date("Nov 8,1996") , gender: "male" , salary: 57000.456 },
				];
				$scope.emps = emps;
				$scope.sortColumn = "name";
				$scope.reverseSort = false;

				$scope.sortData = function(column){
					$scope.reverseSort = ($scope.sortColumn == column) ? !$scope.reverseSort : false;
					$scope.sortColumn = column;
				}

				$scope.getSortData = function(column){
					if ($scope.sortColumn == column) {
						return $scope.reverseSort ? "arrow-down" : "arrow-up"
					}
					return '';
				}

				// filter ends
			});

