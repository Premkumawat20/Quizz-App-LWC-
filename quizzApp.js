import { LightningElement } from 'lwc';

export default class QuizzApp extends LightningElement {
    selected={}
    correctans=0
    submitted=false;
    get NotAllSelected(){
       
         return !(Object.keys(this.selected).length === this.Questions.length);
    }
     get isscoredfull(){
        return `slds-text-heading_large slds-text-align_center ${this.correctans===this.Questions.length?'slds-text-color_success':'slds-text-color_error'}`
     }
  Questions=[
    {
      Id:'Question-1',
      question:'What is the capital of France?',
      options:{
        a:'Paris',
        b:'London',
        c:'Berlin',
        d:'Madrid'
      },
      answer:'a'
    },
    {
      Id:'Question-2',
      question:'What is the capital of Germany?',
      options:{
        a:'Paris',
        b:'London',
        c:'Berlin',
        d:'Madrid'
      },
      answer:'c'
    },]

    onchangeHandler(event){
      console.log('Target'+ event.target.value);
      console.log('Name'+event.target.name)
      const{name,value}=event.target;
      this.selected={...this.selected,[name]:value}
    }
    submitHandler(event){
       this.submitted=true;
       console.log('test')
       event.preventDefault();
       console.log( 'in selection'+this.selected);
       let correct=this.Questions.filter(item=>this.selected[item.Id]===item.answer);
       console.log(this.correct);
       this.correctans=correct.length
       console.log('Correct'+this.correctans);
    }
    resethandler(){
      this.submitted=false;
      this.selected={}
      this.correctans=0
    }
}




