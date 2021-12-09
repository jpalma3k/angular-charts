import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'relatorio-optimizacao-exposicao',
    templateUrl: './relatorio-optimizacao-exposicao.component.html',
    styles: [``],
})
export class RelatorioOptimizacaoExposicaoComponent implements OnInit {

    @Input()
    data: any;

    exposicaoHeaders: any[] = []
    exposicaoValues: any
    
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
        this.exposicaoValues = this.data.values
    }

}