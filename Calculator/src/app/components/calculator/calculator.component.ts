import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CalculatorService } from "../../services/calculator.service"
import {history} from "../../histroy"
@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
  
export class CalculatorComponent implements OnInit {
  histories: any = []
  
  history: string = ''
  currentNumber = '0';
  result:any 
  firstOperand: any = null;
  secondOp:any = null
  operator = '';
  value: string = '' 
  waitForSecondNumber = false;
  showHistory = false
  constructor(private calculatorService: CalculatorService) { }
  ngOnInit(): void {
    this.calculatorService.getHistory().subscribe(history => this.histories.data = history)
   
  }
  pressBtn() {
    this.showHistory = true
  }
  
  hideHistory() {
    this.showHistory = false
  }

  

  clearAll() {
    this.calculatorService.deleteHistory().subscribe()
  }
  public getNumber(v = this.value) {
  
    if(this.waitForSecondNumber)
    {
      this.currentNumber = v;
      this.waitForSecondNumber = false;
    }else{
      this.currentNumber === '0'? this.currentNumber = v: this.currentNumber += v;
    }
  }


  private doCalculation(op: string, sOp:number) {
    this.secondOp = (sOp);
    switch (op){
      case '+':
        return this.firstOperand +=sOp; 
      case '-': 
        return this.firstOperand -= sOp; 
      case '*': 
        return this.firstOperand *= sOp; 
      case '/': 
        return this.firstOperand /= sOp; 
      case '=':
        return sOp;
      default:
        return this.firstOperand
    }
  }


  public getOperation(op: string) {
    
    if (this.operator) {
      
      const str1 = this.firstOperand
      this.result = this.doCalculation(this.operator , Number(this.currentNumber))
      const str2 = this.secondOp
      const str = `${str1} ${this.operator} ${str2} = ${this.result}`
      this.calculatorService.postHistory(str).subscribe(history => this.histories.data.histories(str))
      this.currentNumber = String(this.result);
      this.firstOperand = this.result;
       
    }else if (this.firstOperand === null) {
      this.firstOperand = Number(this.currentNumber);     
    }
    this.operator = op;
  this.waitForSecondNumber = true;
    
  }

  public clear(){
    this.currentNumber = '0';
    this.firstOperand = null;
    this.operator = '';
    this.waitForSecondNumber = false;
  }
}
