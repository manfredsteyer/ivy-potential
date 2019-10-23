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
    const innerCompDef = ngComponent.ɵcmp as ɵComponentDef<any>;
    const elementName = innerCompDef.selectors[0][0] as string;
    
    class HigherOrderComponent implements OnInit {

        static ɵcmp: ɵComponentDef<HigherOrderComponent>;

        params: any = {};

        constructor(private route: ActivatedRoute) {
        }

        ngOnInit() {
            this.route.params.subscribe(params => {
              this.params = params;
            });
        }
    }

    (HigherOrderComponent as any).ɵfac = () => new HigherOrderComponent(ɵɵdirectiveInject(ActivatedRoute));

    HigherOrderComponent.ɵcmp = ɵɵdefineComponent({
        consts: [[]],
        vars: 1,
        decls: 1,
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
                for (const routingParam in ctx.params) {
                    const propName = innerCompDef.inputs[routingParam];
                    if (propName) {
                       ɵɵproperty(routingParam, ctx.params[propName]);
                    }
                }
            }
        },
        type: HigherOrderComponent,
    });

    return HigherOrderComponent;
}