import { Component, Input, AfterViewInit, ViewChild, ElementRef, ChangeDetectorRef } from '@angular/core';
import Chart from 'chart.js';

@Component({
    selector: 'relatorio-optimizacao-diferencial',
    templateUrl: './relatorio-optimizacao-diferencial.component.html',
    styles: [``],
})
export class RelatorioOptimizacaoDiferencialComponent implements AfterViewInit {

    @Input()
    data: any;

    @ViewChild('hbar')
    horizontalBarCanvas: ElementRef<HTMLCanvasElement>;

    public contextBar: CanvasRenderingContext2D;
    hbChart: any

    constructor(private cdref: ChangeDetectorRef) { }

    ngAfterViewInit() {
        this.contextBar = this.horizontalBarCanvas.nativeElement.getContext('2d');
        this.load()
    }

    load() {
        let horizontalDatasetRiscoMinimo = []
        let horizontalDatasetCoberturaDelta = []
        for (let i = 0; i < this.data.length; i++) {
            const e = this.data[i]
            horizontalDatasetCoberturaDelta.push(
                e.data[1].cobertura_delta
            )
            horizontalDatasetRiscoMinimo.push(
                e.data[0].risco_minimo
            )
        }
        let horizontalLabels = this.data.map(v => {
            return v.title
        })

        let maxTick = [].concat(horizontalDatasetRiscoMinimo, horizontalDatasetCoberturaDelta)
            .map(v => Math.abs(v)).reduce(function (a, b) {
                return Math.max(a, b)
            })
        maxTick = Math.ceil(maxTick)
        //não é possivel por defeito mostrar os vaiores dentro das barras.
        //Existe um plugin a explorar se necessario que permite isto com o datajs
        //https://v1_0_0--chartjs-plugin-datalabels.netlify.app/guide/labels.html
        //importante obter a versao mais recente mas compativel com a versao datajs em uso.
        this.hbChart = new Chart(this.contextBar, {
            type: 'horizontalBar',
            data: {
                labels: horizontalLabels,
                datasets: [{
                    label: 'Cobertura Delta',
                    data: horizontalDatasetCoberturaDelta,
                    backgroundColor: '#a7abb0',
                },
                {
                    label: 'Risco Mínimo',
                    data: horizontalDatasetRiscoMinimo,
                    backgroundColor: '#4287f5',
                }],
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
                        ticks: {
                            min: -1 * maxTick,
                            max: maxTick,
                        },
                    }],
                    yAxes: [{
                        stacked: false,
                        gridLines: {
                            display: false
                        }
                    }]
                }
            }
        });
        this.cdref.detectChanges();
    }

}