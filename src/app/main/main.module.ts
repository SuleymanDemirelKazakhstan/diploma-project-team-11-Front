import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainRoutingModule } from './main-routing.module';

import { CdkTableModule } from '@angular/cdk/table';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';

import { TableComponent } from './container/table/table.component';
import { MainComponent } from './main.component';

@NgModule({
  declarations: [MainComponent, TableComponent],
  imports: [CommonModule, MainRoutingModule, MatTableModule, CdkTableModule, MatIconModule]
})
export class MainModule {}
