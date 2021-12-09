import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'badresponse',
    templateUrl: 'badresponse.component.html',
    styleUrls: ['badresponse.component.css']
})
export class BadResponseComponent {

    url: string;

    constructor(private router: Router) { }

    ngOnInit(): void {
        this.url = this.router.url;
        console.log(this.url);
    }


}



