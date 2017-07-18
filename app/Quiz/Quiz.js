'use strict';
var app = angular.module('angular-seed.Quiz', ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
	$routeProvider.when('/Quiz', {
		templateUrl: 'Quiz/Quiz.html',
		controller: 'QuizCtrl'
	});
}])
app.controller('QuizCtrl', ['$scope', function($scope) {
			$scope.start = function() {
				$scope.id = 0;
				$scope.quizOver = false;
				$scope.inProgress = true;
				$scope.getQuestion();
			};

			$scope.reset = function() {
				$scope.inProgress = false;
				$scope.score = 0;
			};

			$scope.getQuestion = function() {
				var q =$scope.id;
				if(q< questions.length) {
					$scope.question = questions[q].question;
					$scope.options = questions[q].options;
					$scope.answer = questions[q].answer;
					$scope.answerMode = true;
				} else {
					$scope.quizOver = true;
				}
			};

			$scope.checkAnswer = function() {
				if(!$('input[name=answer]:checked').length) return;

				var ans = $('input[name=answer]:checked').val();

				if(ans == $scope.options[$scope.answer]) {
					$scope.score++;
					$scope.correctAns = true;
				} else {
					$scope.correctAns = false;
				}

				$scope.answerMode = false;
			};

			$scope.nextQuestion = function() {
				$scope.id++;
				$scope.getQuestion();
			};

			$scope.reset();

	var questions = [
		{
			question: "Which is the largest country in the world by population?",
			options: ["India", "USA", "China", "Russia"],
			answer: 2
		},
		{
			question: "When did the second world war end?",
			options: ["1945", "1939", "1944", "1942"],
			answer: 0
		},
		{
			question: "Which was the first country to issue paper currency?",
			options: ["USA", "France", "Italy", "China"],
			answer: 3
		},
		{
			question: "Which city hosted the 1996 Summer Olympics?",
			options: ["Atlanta", "Sydney", "Athens", "Beijing"],
			answer: 0
		},
		{	
			question: "Who invented telephone?",
			options: ["Albert Einstein", "Alexander Graham Bell", "Isaac Newton", "Marie Curie"],
			answer: 1
		}
	];
	}]);

	
