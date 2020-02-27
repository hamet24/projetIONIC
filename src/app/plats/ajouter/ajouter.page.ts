import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {PlatService} from 'src/app/service/plat.service'
import { Plat } from 'src/app/Models/plat';
import { Router } from '@angular/router';
import { UtilsService } from 'src/app/prerequis/utils.service';


@Component({
  selector: "app-ajouter",
  templateUrl: "./ajouter.page.html",
  styleUrls: ["./ajouter.page.scss"]
})


export class AjouterPage implements OnInit {
  registeForm: FormGroup;

 ngOnInit(){
     /*this.registeForm = this.formBuilder.group({
      'nom': [null, [Validators.required, Validators.minLength(3)]],
      'prix': [null, [Validators.required]],
       'description': [null, [Validators.required]]
    });*/ 
  }
  
  constructor(
    
    private route: Router,
    private platservice: PlatService,
    private actionplat: UtilsService
  /*  private platservice: PlatService,
    private formBuilder: FormBuilder,
    private plat: Plat,
    private route: Router,
    private actionplat: UtilsService*/
  ) {}

  async Ajouter(form) {
    this.platservice.postPlat(form.value).subscribe((res) => {
      this.route.navigateByUrl('tabs/plats');
      this.actionplat.presentToast("ajout avec succes veuillez actualiser ", "success");
      
    });
  }
  
/*
  ajoutplat(platinfo: any) {
    this.platservice.postPlat(platinfo).subscribe(
      data => {
        this.actionplat.presentToast("ajout avec succes", "success");
          this.route.navigateByUrl("tabs/plats");
      }
    );
  }*/
}
