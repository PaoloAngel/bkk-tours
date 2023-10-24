import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<xng-breadcrumb class="text-gray-600 space-x-2">
      <ng-template let-breadcrumbs="breadcrumbs">
        {{ breadcrumbs | json }}
      </ng-template>
    </xng-breadcrumb>

    <router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'vit';
}
