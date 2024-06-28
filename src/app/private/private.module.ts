import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';

import { TooltipModule } from 'primeng/tooltip';
import { ChartModule } from 'primeng/chart';
import { AvatarModule } from 'primeng/avatar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { MenuModule } from 'primeng/menu';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { SelectButtonModule } from 'primeng/selectbutton';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { InputSwitchModule } from 'primeng/inputswitch';

@NgModule({
  declarations: [
    PrivateComponent,
  ],
  imports: [
    CommonModule, 
    PrivateRoutingModule,
    TooltipModule,
    ChartModule,
    AvatarModule,
    DialogModule,
    ButtonModule,
    OverlayPanelModule, 
    MenuModule,
    DropdownModule,
    TableModule,
    TagModule,
    SelectButtonModule,
    InputTextModule,
    PasswordModule,
    InputSwitchModule
  ]
})
export class PrivateModule { }
