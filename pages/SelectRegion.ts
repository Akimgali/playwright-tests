import { Page, expect } from '@playwright/test';

export class SelectRegion {
  constructor(private readonly page: Page) {}

  async goHome() {
    await this.page.getByRole('link', { name: /logotype/i }).click();
    await expect(this.page).toHaveURL('https://elf.rocketfirm.tech/');
  }

  async selectRegion(region: string) {
    // 1️⃣ Кликаем по кнопке смены региона
    await this.page.getByRole('button', { name: /language/i }).click();

    // 2️⃣ Выбираем нужный регион в выпадающем меню
    await this.page.getByText(region, { exact: true }).click();

    // 3️⃣ Проверяем, что теперь активная кнопка действительно показывает выбранный регион
    await expect(
      this.page.getByRole('button', { name: new RegExp(region, 'i') })
    ).toBeVisible();
  }
}