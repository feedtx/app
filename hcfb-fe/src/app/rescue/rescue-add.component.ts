import { Component, OnInit } from '@angular/core';
import { Rescue } from './Rescue';
import { Subscription } from 'rxjs/Subscription';
import { RescueService } from './rescue.service';
import { Router } from '@angular/router';

@Component({
    selector: 'rescue-add',
    templateUrl: './rescue-add.component.ts'
})

export class RescueAddComponenet implements OnInit {
    rescueSub: Subscription;
    test : Date;
    ngOnInit(){
        
    }
    data : Rescue = { 

    }
    newRescue: Rescue = {
        store_name: "testHEB",
        store_number: "121234321",
        district: "Buda",
        location: "2442 developer lane",
        meat_temp_pick_up: "",
        meat_temp_drop_off: "",
        produce_temp_pick_up:"",
        produce_temp_drop_off:"",
        created_at: this.test,
        updated_at: this.test,
        last_updated_by: " "
    }

    constructor(private rescueService: RescueService, private router: Router) {};

    getLocation(): void {
         this.rescueSub = this.rescueService
            .getRescueLocation()
            .subscribe( res => {
                this.newRescue = res;
                console.log("AS INTENDED");
            },
                console.error,
                () => {console.log("NOT AS INTENDED");
            }
                  
            );
        
    }
    updateRescue(event: any){
        this.newRescue.store_name = event.target.value;
    }

    
}