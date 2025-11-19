import { Page, expect } from '@playwright/test';
export class RegistrationPage {
  constructor(private readonly page:Page){}
  async goto(){
    await this.page.goto('https://elf-api.rocketfirm.tech/admin/login')
  }
  async loginAsAdmin(){
    await this.page.getByRole('textbox', { name: 'Адрес электронной почты*' }).fill('admin@rocket.tech');
    await this.page.getByRole('textbox', { name: 'Пароль*' }).fill('fT;>2z8y5~P*');
    await this.page.getByRole('button', { name: 'Войти' }).click();
  }
  async openUsersSection() {
    await this.page.getByRole('link', { name: 'Раздел - Пользователи' }).click();
  }
    async createUser(type: 'ФизЛицо' | 'ЮрЛицо', index: number) {
    await this.page.getByRole('link', { name: 'Создать' }).click();

    // Имя и Email
    const name = type === 'ФизЛицо' ? `ФизЛицо${index}` : `ЮрЛицо${index}`;
    const email =
      type === 'ФизЛицо'
        ? `Individual${index}@mail.com`
        : `Legal_Entity${index}@mail.com`;

    await this.page.getByRole('textbox', { name: 'Имя*' }).fill(name);
    await this.page.getByRole('textbox', { name: 'Email*' }).fill(email);
    await this.page.getByRole('textbox', { name: 'Пароль*' }).fill('Password1!');

    // Если юрлицо — включаем свитч
    if (type === 'ЮрЛицо') {
      await this.page.getByRole('switch', { name: 'Юр. лицо*' }).click();
    }

    await this.page.getByRole('button', { name: 'Создать', exact: true }).click();

    return { name, email };
  }
    async expectUserCreated(email: string) {
    await this.page.getByRole('link', { name: 'Раздел - Пользователи' }).click();
   await this.page.getByPlaceholder('Поиск').fill(email);
   
  await this.page.keyboard.press('Enter');

  // Находим конкретного юзера в результатах
  const userLink = this.page.getByRole('link', { name: email });

  // Проверяем, что он появился
  await expect(userLink).toBeVisible({ timeout: 5000 });
}
}