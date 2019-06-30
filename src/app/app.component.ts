import { Component } from '@angular/core';
import { HttpClient,  HttpParams } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'outlet-identifier';
    baseUrl = 'http://localhost:1234';
    output = '';
	constructor(private httpClient: HttpClient){}

    get_outlet(addr){
    	this.output = 'Please wait...';
    	let params = new HttpParams();
	    params = params.append('address', addr);

	    this.httpClient.get(this.baseUrl + '/outlet', {params: params}).subscribe((res: any)=>{
	        console.log(res);
	        if(res.data){
		    	this.output = res.data;
	        }
	    },
	    err => {
	    	console.log('HTTP Error', err);
	    	alert('Something went wrong');
	    	this.output = '';
	    });
	}
}
