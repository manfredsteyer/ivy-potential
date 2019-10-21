import { Component, Injector, ComponentFactoryResolver, ViewChild, ViewContainerRef, Input, ɵdetectChanges, OnInit, ɵmarkDirty, OnChanges } from '@angular/core';

@Component({
	templateUrl: './dashboard-page.component.html',
	styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit, OnChanges {

	@Input() year = 2020;

	constructor(
		private injector: Injector,
		private cfr: ComponentFactoryResolver) { }

	@ViewChild('vc', {read: ViewContainerRef, static: true}) 
	viewContainer: ViewContainerRef;

	ngOnInit() {
		console.debug('init', this.year);
	}

	ngOnChanges() {
		console.debug('changes', this.year);
	}

	addTile(): void {
		this._add('dashboard-tile');
	}

	private _add(elementName: string): void {

		const data =	[
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100),
			Math.round(Math.random() * 100)
		];
		
		import('../dashboard-tile/dashboard-tile.component').then(m => {
			const comp = m.DashboardTileComponent;

			// Only b/c of compatability; will not be needed in future!
			const factory = this.cfr.resolveComponentFactory(comp);
			
			const compRef = this.viewContainer.createComponent(factory, null, this.injector);
			const compInstance = compRef.instance;
			
			compInstance.a = data[0];
			compInstance.b = data[1];
			compInstance.c = data[2];
			compInstance.ngOnChanges();
		});


	}

}
