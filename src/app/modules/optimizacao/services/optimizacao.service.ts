import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Util } from 'src/app/core/util';
import * as sim1data from 'src/assets/sim_1.json';
import * as sim4data from 'src/assets/sim_4.json';

@Injectable()
export class OptimizacaoCoberturasService {

    constructor(private http: HttpClient, private router: Router) { }

    private async request(urlSuffix: string, data:any = null){
        try {
            const endpoint = environment.server_url + '/optimizacao' + urlSuffix;  
            const requestMethod = data? this.http.post(endpoint, data) : this.http.get(endpoint);
            const response: any = await requestMethod.toPromise();
            return response;
        }
        catch (error) {
            Util.handleError(error, this.router);
        }
    }

    async getSimulacoes(): Promise<any[]> {
        return this.request('/simulacoes');
    }

    getSimulacao(id: number): any {
        if(id < 4)
            return (sim1data as any).default;
        else
            return (sim4data as any).default;
    }

    /*
    async getSimulacao(id: number): Promise<any[]> {
        return this.request('/simulacao?id=' + encodeURIComponent(id))
    }
    */

}