import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';

import { SafeHtml } from './safe_html';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/shared/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/shared/sidebar-item/sidebar-item.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

import { appReducer } from './store/app.state';
import { AvatarComponent } from './components/shared/avatar/avatar.component';
import { IndexPageFormComponent } from './components/index-page-form/index-page-form.component';
import { PostComponent } from './components/shared/post/post.component';
import { IconComponent } from './components/shared/icon/icon.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SidebarItemComponent,
    SafeHtml,
    IndexPageComponent,
    PostPageComponent,
    AvatarComponent,
    IndexPageFormComponent,
    PostComponent,
    IconComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    StoreModule.forRoot(appReducer),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
