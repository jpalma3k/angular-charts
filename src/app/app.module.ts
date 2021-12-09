import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ClarityModule } from '@clr/angular';

import {TableModule} from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import {CalendarModule} from 'primeng/calendar';
import {SliderModule} from 'primeng/slider';
import {MultiSelectModule} from 'primeng/multiselect';
import {ContextMenuModule} from 'primeng/contextmenu';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
import {InputNumberModule} from 'primeng/inputnumber';
import {CarouselModule} from 'primeng/carousel';
import {StepsModule} from 'primeng/steps';
import {MessagesModule} from 'primeng/messages';
import {TabViewModule} from 'primeng/tabview';
import {CheckboxModule} from 'primeng/checkbox';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './core/components/homepage/homepage.component';
import { BadResponseComponent } from './core/components/badresponse/badresponse.component';
import { PersistentService } from './core/services/persistence.service';
import { AuthService } from './core/services/auth.service';
import { UserProfileComponent } from './core/components/userprofile/user-profile.component';
import { DetalheOptimizacaoComponent } from './modules/optimizacao/components/detalhe-pedido/detalhe-pedido.component';
import { AnaliseOptimizacaoComponent } from './modules/optimizacao/components/analise-optimizacoes/analise-optimizacoes.component';
import { OptimizacaoCoberturasService } from './modules/optimizacao/services/optimizacao.service';
import { RelatorioOptimizacaoComponent } from './modules/optimizacao/components/relatorio-optimizacao/relatorio-optimizacao.component';
import { RelatorioOptimizacaoScatterComponent } from './modules/optimizacao/components/relatorio-optimizacao/relatorio-optimizacao-scatter/relatorio-optimizacao-scatter.component';
import { RelatorioOptimizacaoDiferencialComponent } from './modules/optimizacao/components/relatorio-optimizacao/relatorio-optimizacao-diferencial/relatorio-optimizacao-diferencial.component';
import { RelatorioOptimizacaoTableComponent } from './modules/optimizacao/components/relatorio-optimizacao/relatorio-optimizacao-table/relatorio-optimizacao-table.component';
import { RelatorioOptimizacaoBarrasComponent } from './modules/optimizacao/components/relatorio-optimizacao/relatorio-optimizacao-barras/relatorio-optimizacao-barras.component';
import { RelatorioOptimizacaoExposicaoComponent } from './modules/optimizacao/components/relatorio-optimizacao/relatorio-optimizacao-exposicao/relatorio-optimizacao-exposicao.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    BadResponseComponent,
    UserProfileComponent,
    DetalheOptimizacaoComponent,
    AnaliseOptimizacaoComponent,
    RelatorioOptimizacaoComponent,
    RelatorioOptimizacaoScatterComponent,
    RelatorioOptimizacaoDiferencialComponent,
    RelatorioOptimizacaoBarrasComponent,
    RelatorioOptimizacaoExposicaoComponent,
    RelatorioOptimizacaoTableComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    ConfirmDialogModule,
    TableModule,
    CheckboxModule,
    CalendarModule,
		SliderModule,
		DialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
    ToastModule,
    ProgressBarModule,
    InputTextModule,
    ProgressSpinnerModule,
    InputNumberModule,
    CarouselModule,
    StepsModule,
    MessagesModule,
    TabViewModule,
  ],
  exports:[
    AppRoutingModule
  ],
  providers: [
    ConfirmationService,
    AuthService,
    PersistentService,
    OptimizacaoCoberturasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
