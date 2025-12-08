import {test, expect} from '@playwright/test';
import {RegistrationPage} from '../pages/RegistrationPage';
import {LoginPage} from '../pages/LoginPage';

test('Регистрация и авторизация нового пользователя', async({page}) => {
    const registration = new RegistrationPage(page);
    const login = new LoginPage(page);
    await registration.goto();
    await registration.loginAsAdmin();
    await registration.openUsersSection();
    const { email } = await registration.createUser('ФизЛицо', 103);
    await registration.expectUserCreated(email);
    await login.goto();
    await login.login(email, 'Password1!');
    await login.expectSuccess();
}); ///Comment here bro