import { Page, expect } from '@playwright/test';
export class HeaderNavigation {
  constructor(private readonly page:Page){}
  async goToActuals(){
    await this.page.getByRole('link', { name: 'Актуальное' }).click();
    await expect(this.page.getByRole('heading', { name: 'Актуальное' })).toBeVisible();
  }
  async goToExperts(){
    await this.page.getByRole('link', { name: 'Экспертное мнение' }).click();
    await expect(this.page.getByRole('heading',{ name:'Экспертное мнение'})).toBeVisible();
  }
  async goToLasts(){
    await this.page.getByRole('link', { name: 'Последние' }).click();
    await expect(this.page.getByRole('heading',{ name:'Последние публикации'})).toBeVisible();
  }
  async goToAboutProject(){
    await this.page.getByRole('link', { name: 'О проекте' }).click();
    await expect(this.page.getByRole('heading',{ name:'О проекте ELF Solutions'})).toBeVisible();
  }
}