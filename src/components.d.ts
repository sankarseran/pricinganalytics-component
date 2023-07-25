/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface PricingAnalytics {
        /**
          * The code to show pricing
         */
        "code": string;
        /**
          * The first name
         */
        "first": string;
        /**
          * The last name
         */
        "last": string;
        /**
          * The middle name
         */
        "middle": string;
    }
}
declare global {
    interface HTMLPricingAnalyticsElement extends Components.PricingAnalytics, HTMLStencilElement {
    }
    var HTMLPricingAnalyticsElement: {
        prototype: HTMLPricingAnalyticsElement;
        new (): HTMLPricingAnalyticsElement;
    };
    interface HTMLElementTagNameMap {
        "pricing-analytics": HTMLPricingAnalyticsElement;
    }
}
declare namespace LocalJSX {
    interface PricingAnalytics {
        /**
          * The code to show pricing
         */
        "code"?: string;
        /**
          * The first name
         */
        "first"?: string;
        /**
          * The last name
         */
        "last"?: string;
        /**
          * The middle name
         */
        "middle"?: string;
    }
    interface IntrinsicElements {
        "pricing-analytics": PricingAnalytics;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "pricing-analytics": LocalJSX.PricingAnalytics & JSXBase.HTMLAttributes<HTMLPricingAnalyticsElement>;
        }
    }
}
