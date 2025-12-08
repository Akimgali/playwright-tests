import { Page, expect } from '@playwright/test';

export class LoginPage {
  constructor(private readonly page:Page){}
  async goto(){
    await this.page.goto('https://elf.rocketfirm.tech');
  }
  async login(email:string, password:string){
        await this.page.getByRole('button', {name: 'Авторизоваться' }).click();
        await this.page.getByRole('textbox', { name: 'Email' }).fill(email);
        await this.page.getByRole('textbox', { name: 'Пароль' }).fill(password);
        await this.page.getByRole('button', { name: 'Войти' }).nth(1).click();
  }
  async expectSuccess(){
    await expect (this.page).toHaveURL('https://elf.rocketfirm.tech/profile');
  }
  async expectError(){
    const response = await this.page.waitForResponse(resp=>resp.url().includes('https://elf-api.rocketfirm.tech/admin/auth/login') && resp.status() === 401);
    expect(response.status()).toBe(401);
  } //добавляю комментарий для того чтобы протестить
}