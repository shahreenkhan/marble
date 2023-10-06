import { Component ,OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { OtpService } from 'src/app/service/otp.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent  {
  res:any
  form:any
  verifyform:any
  showform: boolean = false;
  faucetform:boolean = false;
 
constructor(private os:OtpService, private route:Router) { }

  ngOnInit(): void {
    this.form=new FormGroup({
      countryCode:new FormControl('',[Validators.required]),
      // image:new FormControl('',[Validators.required]),
      phoneNumber:new FormControl('',[Validators.required]),
    })
  
    this.verifyform=new FormGroup({
      countryCode:new FormControl('',[Validators.required]),
      verifyOTP:new FormControl('',[Validators.required]),
      phoneNumber:new FormControl('',[Validators.required]),
  
    })
  
  }

  add(){
    if (this.form.valid) {
     this.os.insertdata(this.form.value).subscribe((res)=>{
       
       this.form.reset();
       console.log(res)
       this.route.navigate(['/sanitaryware/sanitaryware']);
     })
    }
   }
   
 
  
  verification(){
    if(this.verifyform.valid){
      this.os.verifyotp(this.verifyform.value).subscribe({
        next: (res) =>{
        
        console.log(res);
        this.verifyform.reset();
        this.route.navigate(['/sanitaryware/sanitaryware']);
        }
      
     
    })
   }
  
  }

  
  showEdit(){
    this.showform = !this.showform
  }
  showFaucet(){
    this.faucetform = !this.showform
  }
}
