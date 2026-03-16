import { Page, expect } from '@playwright/test';
export class Article{
    constructor (private readonly page:Page){}
    async openArticle(title: string) {
    // 1. Находим статью по названию (частичное совпадение допустимо)
    const articleLink = this.page.getByRole('link', {
      name: new RegExp(title, 'i'),
    });

    await expect(articleLink).toBeVisible();

    // 2. Кликаем
    await articleLink.click();

    // 3. Проверяем что статья открылась
    // Обычно заголовок на странице совпадает с названием
    await expect(
      this.page.getByRole('heading', { name: new RegExp(title, 'i') })
    ).toBeVisible();
  }
}