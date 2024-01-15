import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speaker-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speaker-form.component.html',
  styleUrl: './speaker-form.component.scss'
})
export class SpeakerFormComponent implements OnInit {

  @Input() userId!: string;
  @Input() title!: string;
  @Input() IsEdit!: boolean;
  @Input() IsDelete!: boolean;

  @Output() OnDelete: EventEmitter<any> = new EventEmitter();
  @Output() OnSave: EventEmitter<any> = new EventEmitter();

  ngOnInit() {

    // if (this.userId != null && this.userId != undefined) this.LoadUser();
    // //Disabled the from when in in Delete
    // if (this.IsDelete) this.ReactiveForm.disable();
    // //Disabled the from when in in Detail
    // if (this.IsDelete == false && this.IsEdit == false)
    //   this.ReactiveForm.disable();
    
  }


}
