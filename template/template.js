import { LightningElement, track } from 'lwc';

export default class App extends LightningElement {
    @track accounts = [];

    @track AccountName = "";
    @track AccountIndustry = "";
    @track AccountSector = "";
    @track AccountPhone = "";
    @track idGenerator = "";

handleChange(event){
if(event.target.label === "Account Name"){
    this.AccountName = event.target.value;
}else if(event.target.label === "Account Industry"){
    this.AccountIndustry = event.target.value;
}else if(event.target.label === "Account Sector"){
    this.AccountSector = event.target.value;
}else if(event.target.label === "Account Phone"){
    this.AccountPhone = event.target.value;
    }
}
handleKeyPress(event){
    var cid = this.idGenerator;
    // This is used for the enter key. code for enter is 13
    if(event.keyCode === 13){
        this.accounts.push(
        {
            id : cid,
            Name : this.AccountName,
            Industry : this.AccountIndustry,
            Sector : this.AccountSector,
            Phone : this.AccountPhone
        }
    );
    this.idGenerator++;
    this.AccountName = '';
    this.AccountIndustry = '';
    this.AccountSector = '';
    this.AccountPhone = '';
   }
 }
}

