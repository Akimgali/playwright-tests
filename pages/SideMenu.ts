import { Page, expect } from '@playwright/test';
export class SideMenu{
    constructor (private readonly page:Page){}
    async goToBusinessRegistration(){
        await this.page.getByRole('link', { name: 'Регистрация бизнеса Регистрация бизнеса' }).click();
        await expect (this.page).toHaveURL('https://elf.rocketfirm.tech/sections/registraciya-biznesa');
    }
    async goToTypesOfActivities(){
        await this.page.getByRole('button', { name: 'Виды деятельности Виды деятельности' }).click();
        await expect (this.page).toHaveURL('https://elf.rocketfirm.tech/sections/vidy-deyatelnosti');
    }
    async goToBusinessFinancing(){
        await this.page.getByRole('link', { name: 'Финансирование бизнеса Финансирование бизнеса' }).click();
        await expect (this.page).toHaveURL('https://elf.rocketfirm.tech/sections/finansirovanie-biznesa');
    }
    async goTo(){
          await this.page.getByRole('link', { name: 'Регулирование бизнеса Регулирование бизнеса' }).click();
        await expect (this.page).toHaveURL('https://elf.rocketfirm.tech/sections/regulirovanie-biznesa');
    }
    async goToBusinessTaxation(){
        await this.page.getByRole('link', { name: 'Налогообложение бизнеса Налогообложение бизнеса' }).click();
        await expect (this.page).toHaveURL('https://elf.rocketfirm.tech/sections/nalogooblozhenie-biznesa');
    }
    async goToOperationalActivities(){
        await this.page.getByRole('link', { name: 'Операционная деятельность Операционная деятельность' }).click();
        await expect (this.page).toHaveURL('https://elf.rocketfirm.tech/sections/operacionnaya-deyatelnost');
    }
    async goToBusinessRestructuringAndLiquidation(){
        await this.page.getByRole('link', { name: 'Реструктуризация и ликвидация бизнеса Реструктуризация и ликвидация бизнеса' }).click();
        await expect (this.page).toHaveURL('https://elf.rocketfirm.tech/sections/restrukturizaciya-i-likvidaciya-biznesa');
    }
  
}