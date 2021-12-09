import { Component, Input, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import Chart from 'chart.js';
import { Util } from '../../util';

@Component({
    selector: 'relatorio-optimizacao-barras',
    templateUrl: './relatorio-optimizacao-barras.component.html',
    styles: [``],
})
export class RelatorioOptimizacaoBarrasComponent implements AfterViewInit {

    @Input()
    data: any;

    @ViewChild('vbar')
    verticalBarCanvas: ElementRef<HTMLCanvasElement>;

    public contextVBar: CanvasRenderingContext2D
    vbChart: any

    constructor(private cdref: ChangeDetectorRef) { }

    ngAfterViewInit() {
        console.log(this.data)
        this.contextVBar = this.verticalBarCanvas.nativeElement.getContext('2d');
        this.load()
    }

    load() {
        let vLabels = this.data.values.map(v => {
            return v.title
        })
        let vbDatasets = this.data.labels.map((label, i) => {
            return {
                label: label,
                data: this.data.values.map(v => v.data[i]),
                backgroundColor: Util.colorArray[i],
            }
        })

        this.vbChart = new Chart(this.contextVBar, {
            type: 'bar',
            data: {
                labels: vLabels,
                datasets: vbDatasets
                /*[{
                    barPercentage: 0.5,
                    barThickness: 6,
                    maxBarThickness: 8,
                    minBarLength: 2,
                    data: [10, 20, 30, 40, 50, 60, 70]
                }]*/
            },
            options: {
                legend: {
                    display: true
                },
                scales: {
                    xAxes: [{
                        stacked: false,
                        gridLines: {
                            display: false
                        }
                    }],
                    yAxes: [{
                        stacked: false,
                        ticks: {
                            reverse: true
                        },

                    }]
                }
            }
        });
        this.cdref.detectChanges();
    }

}