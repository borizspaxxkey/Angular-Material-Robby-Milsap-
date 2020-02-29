import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageNewComponent } from './message-new/message-new.component';

@NgModule({
  imports: [
    CommonModule,
    MessagesRoutingModule
  ],
  declarations: [MessageListComponent, MessageNewComponent]
})
export class MessagesModule { }
