import { Page, expect } from '@playwright/test';
export class SearchBar {
  constructor(private readonly page:Page){}
  async clickToSearch(){ 
    await this.page.getByRole('button', { name: 'Поиск' }).click();
    await expect(this.page.getByRole('textbox',{name: 'Поиск по статьям'})).toBeVisible();
}
    async searchSomeText(string:string){
        await this.page.getByRole('textbox', { name: 'Поиск по статьям' }).fill(string);
        await expect(this.page).toHaveURL('https://elf.rocketfirm.tech/articles/registraciya-biznesa-v-kazahstane-osobennosti-ot-kgd-mf-rk');
    }
}