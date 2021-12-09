import { Router } from '@angular/router';
import { Observable } from 'rxjs';

export class Util {

    static handleError(error: Response | any, router:Router) {
        let errMsg: string;
        if (error instanceof Response) {
            const err = error || JSON.stringify(error);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        router.navigate(['500']);
        return Observable.throw(errMsg);
    }

}