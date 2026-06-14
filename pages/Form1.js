

export class MyFormPageObject{

    constructor(page){
        this.page = page;
        this.h1 = page.locator("h1");
        this.txt_username = page.getByPlaceholder("Enter username");
        this.txt_password = page.locator("[id='password']");
        this.checkbox10 = page.getByLabel("10th");
        this.language = page.locator("//label[text()='Languages']/..").getByLabel("English")
    }

    async login(username, password){
         await this.txt_username.fill(username);
            await this.txt_password.fill(password);
            await this.checkbox10.click();
            await this.language.click(); 
    }
    
}