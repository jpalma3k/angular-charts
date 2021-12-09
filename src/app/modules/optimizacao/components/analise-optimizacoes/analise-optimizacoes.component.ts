import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ConfirmationService } from 'primeng/api';
import { FilterUtils } from 'primeng/utils';
import { OptimizacaoCoberturasService } from '../../services/optimizacao.service';
import { Router, NavigationExtras } from '@angular/router';
import { Util } from '../util';
import { AuthService } from 'src/app/core/services/auth.service';
import { PersistentService } from 'src/app/core/services/persistence.service';

@Component({
    templateUrl: './analise-optimizacoes.component.html',
    animations: [
        trigger('rowExpansionTrigger', [
            state('void', style({
                transform: 'translateX(-10%)',
                opacity: 0
            })),
            state('active', style({
                transform: 'translateX(0)',
                opacity: 1
            })),
            transition('* <=> *', animate('400ms cubic-bezier(0.86, 0, 0.07, 1)'))
        ])
    ]
})
export class AnaliseOptimizacaoComponent implements OnInit {

    cols: any[] = Util.pedidosDefaultCols;
    public expandedRows = {};
    pedidos: any[];
    pedidoSelect: any;
    estados = Util.listaEstados;
    expandCollumnWidth: string = Util.expandCollumnWidth;
    loading: boolean;
    response: string;

    constructor(private coberturas: OptimizacaoCoberturasService, private confirmationService: ConfirmationService, private authService: AuthService, private router: Router) { }

    ngOnInit() {
        FilterUtils['custom'] = Util.customFilter;
        this.reload();
    }

    async reload() {
        this.loading = true;
        const user = PersistentService.get();
        Promise.all([
            this.coberturas.getSimulacoes(),
        ]).then(async data => {
            this.pedidos = data[0];
            this.loading = false;
        });
    }

    onRowClick(event, rowData) {
        //console.log(event,rowData)
        //console.log(this.expandedRows)
        if (this.pedidoSelect != null) {
            if (this.pedidoSelect.id == rowData.id) {
                this.pedidoSelect = null;
            }
            else {
                this.pedidoSelect = rowData;
            }
        }
        else {
            this.pedidoSelect = rowData;
        }
    }

    goToDetalhePedido(){
        this.router.navigate(['optimizacao/detalhe_pedido/'+this.pedidoSelect.id]);
    }

}