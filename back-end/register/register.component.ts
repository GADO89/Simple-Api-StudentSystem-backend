import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-regiser',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegiserComponent implements OnInit {

   logInFormGroup!: FormGroup;
  

  constructor(private formBuilder:FormBuilder) { 
  
  }
                                                                                                                                                                
  ngOnInit(): void {
    this.logInFormGroup = this.formBuilder.group({
      admin: this.formBuilder.group({
        userName: [''],
        password: ['']
      })
    });
  }

     OnSubmit() {
    console.log(this.logInFormGroup('admin').value.userName)
    console.log(this.logInFormGroup('admin').value.password)

  }   
}


/* import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  logInFormGroup:FormGroup | undefined ;

  constructor(private formBuilder:FormBuilder){}

  ngOnInit():void{
  this.logInFormGroup=this.formBuilder.group({
    admin:this.formBuilder.group({
      userName:[''],
      password['']
    }),
    address:this.formBuilder.group({
      
    })
  });
  }
}
 */