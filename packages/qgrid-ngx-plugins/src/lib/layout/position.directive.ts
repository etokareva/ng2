import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { Disposable } from '@qgrid/ngx';
import { PositionPlugin } from '@qgrid/plugins';

@Directive({
	selector: '[q-grid-position]',
	providers: [Disposable]
})
export class PositionDirective implements OnInit {
	@Input('q-grid-position') target = '';

	constructor(
		private elementRef: ElementRef,
		private disposable: Disposable
	) {
	}

	ngOnInit() {
		const position = new PositionPlugin({
			element: this.elementRef.nativeElement,
			targetName: this.target,
		},
			this.disposable
		);

		position.invalidate();
	}
}
