import { Component, OnInit } from '@angular/core';
import { OptimizacaoCoberturasService } from '../../services/optimizacao.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './detalhe-pedido.component.html',
    styles: [``],
})
export class DetalheOptimizacaoComponent implements OnInit {

    tabs: any[]
    loading: boolean;
    data: any
    id: number;
    subscription: any;
    simulacao: any;

    constructor(private coberturas: OptimizacaoCoberturasService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.subscription = this.route.params.subscribe(params => {
            this.id = params['id'];
            this.reload();
        });
    }

    reload() {
        this.loading = true;
        if (this.id === undefined || this.id == null) {
            this.loading = false;
        }
        const requestPromises = [];
        if (this.id) {
            requestPromises.push(this.coberturas.getSimulacao(this.id))
        }
        Promise.all(requestPromises).then((data: any[]) => {
            this.data = data[0]
            this.tabs = this.data.reports
            this.simulacao = this.data.simulacao
            this.loading = false;
        }).catch((error) => {
            console.log(error)
            this.loading = false;
            this.router.navigate(['500']);
        });
    }

}