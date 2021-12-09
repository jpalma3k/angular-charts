import { Component, Input, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import Chart from 'chart.js';
import { Util } from '../../util';

@Component({
    selector: 'relatorio-optimizacao-scatter',
    templateUrl: './relatorio-optimizacao-scatter.component.html',
    styles: [``],
})
export class RelatorioOptimizacaoScatterComponent implements AfterViewInit {

    @Input()
    data: any;

    @ViewChild('scatter')
    myCanvas: ElementRef<HTMLCanvasElement>;

    public context: CanvasRenderingContext2D;
    myChart: any

    constructor(private cdref: ChangeDetectorRef) { }

    ngAfterViewInit() {
        console.log(this.data)
        this.context = this.myCanvas.nativeElement.getContext('2d');
        this.load()
    }

    load() {
        let datasets = this.data.values.pontos.map((e, i) => {
            return {
                type: 'scatter',
                label: e[2],
                data: [{
                    x: e[0],
                    y: e[1]
                }],
                fill: true,
                backgroundColor: Util.colorArray[i],
            }
        })
        datasets.push(
            {
                type: 'line',
                label: 'Curva',
                data: this.data.values.curva.map(v => {
                    return {
                        x: v[0],
                        y: v[1]
                    }
                }),
                fill: true,
                pointRadius: 2,
                showLine: false,
                backgroundColor: Util.colorArray[Util.colorArray.length],
            }
        )

        this.myChart = new Chart(this.context, {
            type: 'scatter',
            data: { datasets: datasets },
            options: {
                responsive: true,
                scales: {
                    xAxes: [{
                        scaleLabel: {
                            labelString: 'Margem (M€)',
                            display: true
                        },
                    }],
                    yAxes: [{
                        scaleLabel: {
                            labelString: 'P@R (M€)',
                            display: true

                        },
                    }]
                },
                layout: {
                    padding: {
                        left: 10,
                        right: 10,
                        top: 10,
                        bottom: 10
                    }
                }
            }
        })
        this.cdref.detectChanges();
    }

}