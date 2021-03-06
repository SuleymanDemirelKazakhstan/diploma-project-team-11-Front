import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxFileDragDropModule } from 'ngx-file-drag-drop';

import { NftComponent } from './nft.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateComponent } from './create/create.component';
import { ExploreComponent } from './explore/explore.component';
import { MainComponent } from './main/main.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [NftComponent, NavbarComponent, CreateComponent, ExploreComponent, CardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    NgxFileDragDropModule,
    RouterModule.forChild([
      {
        path: '',
        component: NftComponent,

        children: [
          {
            path: '',
            component: MainComponent
          },
          {
            path: 'create',
            component: CreateComponent
          },
          {
            path: 'explore',
            component: ExploreComponent
          },
          {
            path: '**',
            redirectTo: ''
          }
        ]
      }
    ])
  ]
})
export class NftModule {}
