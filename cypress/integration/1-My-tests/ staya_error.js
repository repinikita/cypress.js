describe('Тестирование формы авторизации', function () {
	it ('авторизация на сайте с верным email и неверным паролем ' ,function(){
		cy.visit('https://staya.dog');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('nikitarepin93@gmail.com');
		cy.get('.auth-form > form > [type="password"]').type('iLoveqa2');
		cy.get('.auth-form__submit > .s-button__content').click();
		cy.contains('Невозможно войти с предоставленными учетными данными');
	})

})	