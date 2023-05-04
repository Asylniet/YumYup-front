import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { HttpClientModule } from '@angular/common/http';

import { SafeHtml } from './safe_html';
import { AppComponent } from './app.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { SidebarItemComponent } from './components/layout/sidebar-item/sidebar-item.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';
import { PostPageComponent } from './pages/post-page/post-page.component';

import { appReducer } from './store/app.state';
import { AvatarComponent } from './components/shared/avatar/avatar.component';
import { IndexPageFormComponent } from './components/index-page-form/index-page-form.component';
import { PostComponent } from './components/shared/post/post.component';
import { IconComponent } from './components/shared/icon/icon.component';
import { PostPageFormComponent } from './components/post-page-form/post-page-form.component';
import { PostLoaderComponent } from './components/loaders/post-loader/post-loader.component';
import { FlashcardComponent } from './components/shared/flashcard/flashcard.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { ProductComponent } from './components/shared/product/product.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';

import { httpInterceptorProviders } from './helpers/auth.interceptor';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

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
    PostPageFormComponent,
    PostLoaderComponent,
    FlashcardComponent,
    ExplorePageComponent,
    ProductComponent,
    LoginPageComponent,
    RegisterPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDropzoneModule,
    HttpClientModule,
    StoreModule.forRoot(appReducer),
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
