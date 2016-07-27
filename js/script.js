var test = {
	testTitle: 'Тест по программированию',
	btnTestResult: 'Проверить мои результаты',
	testQuestions: [
		{
			title: 'Вопрос №1',
			answer: [
				{
					value: 'Вариант ответа №1',
					correct: true
				},
				{
					value: 'Вариант ответа №2',
					correct: false 
				},
				{
					value: 'Вариант ответа №3',
					correct: false 
				}
			]
		},
		{
			title: 'Вопрос №2',
			answer: [
				{
					value: 'Вариант ответа №1',
					correct: true
				},
				{
					value: 'Вариант ответа №2',
					correct: false 
				},
				{
					value: 'Вариант ответа №3',
					correct: false 
				}
			]
		},
		{
			title: 'Вопрос №3',
			answer: [
				{
					value: 'Вариант ответа №1',
					correct: true
				},
				{
					value: 'Вариант ответа №2',
					correct: false 
				},
				{
					value: 'Вариант ответа №3',
					correct: false 
				}
			]
		}
	],
	createElement: function (tagName, className, innerHtml) {
		var element = document.createElement(tagName);
		element.className = className;
		element.innerHTML = innerHtml;

		return element;
	},
	addElement: function (element, parentElement) {
		parentElement.appendChild(element);
	},
	addElementFirst: function (element, parentElement) {
		parentElement.insertBefore(element, parentElement.firstChild);
	},
	generateWrapper: function () {
		var element = this.createElement('div', 'wrapper container', '');

		this.addElementFirst(element, document.body);
	},
	generateForm: function () {
		var element = this.createElement('form', 'test-form row', '');
		var parent = document.body.querySelector('div.wrapper');

		element.setAttribute('action', '#');
		this.addElement(element, parent)
	},
	generateFormTitle: function () {
		var element = this.createElement('h2', 'test-title col-md-12', this.testTitle);

		this.addElementFirst( element, document.body.querySelector('form.test-form') ); 
	},
	generatetestQuestions: function() {
		for (var i = 0; i < this.testQuestions.length; i++) {
			var question = this.testQuestions[i];
			var wrapp = this.createElement('div', 'question-box col-md-12', '');
			var element = this.createElement('h3', 'box-title', i+1 + '. ' + question.title);
			
			this.addElement( wrapp, document.body.querySelector('form.test-form') );
			this.addElement(element, wrapp);

			for (var j = 0; j < question.answer.length; j++) {
				var answer = question.answer[j];
				var label = this.createElement('label', 'answer-label', ' ' + answer.value);
				var answerVar = this.createElement('input', 'answer-checkbox', '');

				answerVar.setAttribute('type', 'checkbox');
				this.addElement(label, wrapp);
				this.addElementFirst(answerVar, label);
			}
		}
	},
	generateBtn: function () {
		var element = this.createElement('input', 'test-result-btn btn btn-primary btn-lg col-md-offset-3 col-md-6', '');

		element.setAttribute('type', 'submit');
		element.setAttribute('value', this.btnTestResult);
		this.addElement( element, document.body.querySelector('form.test-form') );
	},
	generateTestPage: function () {
		this.generateWrapper();
		this.generateForm();
		this.generateFormTitle();
		this.generatetestQuestions();
		this.generateBtn();
	}
};

test.generateTestPage();