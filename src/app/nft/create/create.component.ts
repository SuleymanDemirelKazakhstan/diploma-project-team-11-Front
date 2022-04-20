import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FileValidator } from 'src/app/providers/fileValidator';

@Component({
  selector: 'nft-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {
  createForm!: FormGroup;
  blockChainName = 'ETH';

  constructor(private _fb: FormBuilder) {}

  ngOnInit() {
    this._initializeCreateForm();
  }

  fileHandler(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    let file: File | null = null;
    if (files && files.length > 0) {
      file = files[0];
    }
    this.createForm.patchValue({ file: file });
    this.createForm.updateValueAndValidity();
    // console.log(this.createForm.controls['file'].value);
  }

  private _initializeCreateForm() {
    this.createForm = this._fb.group({
      file: ['', [Validators.required, FileValidator]],
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      externalLink: [
        '',
        [
          Validators.pattern(
            new RegExp(
              '^(http[s]?:\\/\\/(www\\.)?|ftp:\\/\\/(www\\.)?|www\\.){1}([0-9A-Za-z-\\.@:%_+~#=]+)+((\\.[a-zA-Z]{2,3})+)(/(.)*)?(\\?(.)*)?'
            )
          )
        ]
      ]
    });
  }

  submitCreateForm() {
    console.log('submit form');
    console.log(this.createForm.controls['externalLink'].errors);

    if (this.createForm.valid && this.blockChainName === 'ETH') {
    } else {
    }
  }
}
