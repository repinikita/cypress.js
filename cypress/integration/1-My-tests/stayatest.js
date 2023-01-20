describe('Тестирование формы авторизации staya.dog', function () {
	it ('авторизация на сайте с верным email и верным паролем и проверка что на странице есть слово Мои заказы ' ,function(){
		cy.visit('https://staya.dog');
		cy.get('.header-bottom__right--link').click();
		cy.get('.auth-form > form > [type="email"]').type('nikitarepin93@gmail.com');
		cy.get('.auth-form > form > [type="password"]').type('iLoveqa1');
		cy.get('.auth-form__submit > .s-button__content').click();
		cy.contains(' Мои заказы');
	})

})	