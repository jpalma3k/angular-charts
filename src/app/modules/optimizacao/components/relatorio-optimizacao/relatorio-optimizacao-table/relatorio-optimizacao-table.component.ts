import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'relatorio-optimizacao-table',
    templateUrl: './relatorio-optimizacao-table.component.html',
    styles: [``],
})
export class RelatorioOptimizacaoTableComponent implements OnInit {

    @Input()
    data: any;
    @Input()
    tipo: string;

    exposicaoHeaders: any[] = []
    exposicaoValues: any
    quarters = [0,1,2,3,4]
    
    constructor() {}

    ngOnInit() {
        //console.log(this.data)
        this.load()
    }

    load() {
        this.exposicaoHeaders = this.data.header.map((v, i) => {
            return {
                header: v,
                width: i == 0 ? '75px' : '50px'
            }
        })
        this.exposicaoHeaders.splice(1, 0, { header: '', width: '50px' })
        this.exposicaoValues = this.data.values
    }

}