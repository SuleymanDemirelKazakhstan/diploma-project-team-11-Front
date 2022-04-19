import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { NftComponent } from './nft.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CreateComponent } from './create/create.component';
import { ExploreComponent } from './explore/explore.component';
import { MainComponent } from './main/main.component';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NftComponent, NavbarComponent, CreateComponent, ExploreComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
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
