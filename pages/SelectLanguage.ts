import { Page, expect } from '@playwright/test';

export class SelectLanguage {
  constructor(private readonly page: Page){}
  async selectLanguage(language: string) {
  // открыть меню
    await this.page.getByRole('button', { name: /ру|kz|en/i }).click();

  // выбрать язык
    await this.page.getByText(language, { exact: true }).click();

  // проверить, что язык выбран
    await expect(
      this.page.getByRole('button', { name: new RegExp(language, 'i') })).toBeVisible();
}
  }