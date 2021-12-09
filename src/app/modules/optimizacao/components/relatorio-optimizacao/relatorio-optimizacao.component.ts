import { Component, Input } from '@angular/core';

@Component({
    selector: 'relatorio-optimizacao',
    templateUrl: './relatorio-optimizacao.component.html',
    styles: [``],
})
export class RelatorioOptimizacaoComponent {

    @Input()
    reports: any;
    @Input()
    simulacao: any;

    constructor() {}

}