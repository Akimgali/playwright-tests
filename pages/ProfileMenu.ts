import { Page, expect } from '@playwright/test';
export class ProfileMenu {
    constructor(private readonly page:Page){}
    async Logout(){
        await this.page.getByRole('img', {name:'profile'}).click();
        await this.page.getByRole('button',{name:'Выйти'}).click();
        await this.page.waitForTimeout(500);
        const response = await this.page.request.get('https://elf-api.rocketfirm.tech/api/account/info');
        expect(response.status()).toBe(401);
    }
    async goToProfile(){
        await this.page.getByRole('img', {name:'profile'}).click();
        await this.page.getByRole('button',{name:'Личный кабинет'}).click();
    }
    async expectProfileOpened(){
        await expect(this.page).toHaveURL('https://elf.rocketfirm.tech/profile');
    }

}