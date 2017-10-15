/**const text1 = "teksten her";
const text2 = "tekst 2";
const text3 = "tekst 3";
export {text2,text3};
export default text1;*/

export default class MyClass{
    constructor(){
        console.log("objektet er instansieret");
        //super();
        this._persons=["Hans","Grethe","Poul"];
    }

    get persons(){
        return this._persons;
    }
    set persons(value){
        this._persons = value;
    }
}
