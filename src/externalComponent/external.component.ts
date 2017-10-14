import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'external-component',
    template: `<div class="content"><h3>I am external!</h3></div>`
})
export class ExternalComponent {}
