import {
    ɵɵdefineComponent,
    ɵɵdirectiveInject,
    ɵComponentDef,
    ChangeDetectionStrategy,
    ɵɵelement,
    OnInit,
    ɵɵproperty,
    Type,
    ɵComponentType,
    ɵRenderFlags
} from '@angular/core';

import { ActivatedRoute } from '@angular/router';

export function withRoute(inner: Type<any>) {

    const ngComponent = inner as ɵComponentType<any>;

    const compDef = ngComponent.ngComponentDef as ɵComponentDef<any>;
    const elementName = compDef.selectors[0][0] as string;

    class HigherOrderComponent implements OnInit {

        static ngComponentDef: ɵComponentDef<HigherOrderComponent>;

        params: any = {};

        constructor(private route: ActivatedRoute) {
        }

        ngOnInit() {
            this.route.params.subscribe(params => {
              this.params = params;
            });
        }
    }

    (HigherOrderComponent as any).ngFactoryDef = () => new HigherOrderComponent(ɵɵdirectiveInject(ActivatedRoute));

    HigherOrderComponent.ngComponentDef = ɵɵdefineComponent({
        consts: 1,
        vars: 1,
        directives: [
            inner
        ],
        changeDetection: ChangeDetectionStrategy.Default,
        selectors: [[]],
        template: (rf, ctx) => {

            if (rf & ɵRenderFlags.Create) {
               ɵɵelement(0, elementName, null, ['wrapped', '']);
            }
            if (rf & ɵRenderFlags.Update) {
                for (const prop in ctx.params) {
                    const compProp = compDef.inputs[prop];
                    if (compProp) {
                       ɵɵproperty(prop, ctx.params[compProp]);
                       //         ^--- year input   ^---- year in url
                    }
                }
            }
        },
        type: HigherOrderComponent,
    });

    return HigherOrderComponent;
}