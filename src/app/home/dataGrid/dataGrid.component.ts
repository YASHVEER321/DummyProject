import { Component,OnInit } from '@angular/core';


import {Message} from './message.component';
import {MenuItem} from './menuItem.component';

// import {Header} from 'primeng/primeng';
// import {Footer} from 'primeng/primeng';

@Component({
  selector: 'news-root',
  templateUrl: './dataGrid.component.html',
  //styleUrls:  ['./footer.component.css']
})

 

export class dataGridComponent implements OnInit  {

msgs: Message[] = [];
    
    items: MenuItem[];
    
    ngOnInit() {
        this.items = [
            {label: 'Update', icon: 'fa-refresh', command: () => {
                this.update();
            }},
            {label: 'Delete', icon: 'fa-close', command: () => {
                this.delete();
            }},
            {label: 'Angular.io', icon: 'fa-link', url: 'http://angular.io'},
            {label: 'Theming', icon: 'fa-paint-brush', routerLink: ['/theming']}
        ];
    }

    save() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Data Saved'});
    }

    update() {
        this.msgs = [];
        this.msgs.push({severity:'info', summary:'Success', detail:'Data Updated'});
    }

    delete() {
        this.msgs = [];
this.msgs.push({severity:'info', summary:'Success', detail:'Data Deleted'});
    }


}


