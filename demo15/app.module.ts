// Angular v13 框架核心模块
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// 项目自定义视图组件
import { AppComponent } from './app.component';

@NgModule({
  // 该 NgModule 所依赖的视图组件
  declarations: [
    AppComponent
  ],
  // 该 NgModule 所依赖的其它 NgModule
  imports: [
    BrowserModule
  ],
  providers: [],
  // 应用的根视图组件，只有根 NgModule 需要设置
  bootstrap: [AppComponent]
})
export class AppModule { }
