import{c as U,e as K,d as Q}from"../chunks/customerOrder.js";import{useState as J,useEffect as X}from"@dropins/tools/preact-hooks.js";import{classes as y,getFormValues as Y}from"@dropins/tools/lib.js";import{jsx as r,jsxs as d,Fragment as C}from"@dropins/tools/preact-jsx-runtime.js";import{Icon as Z,Skeleton as k,SkeletonRow as l,Card as I,InLineAlert as rr,Field as z,Input as M,Button as D,Price as v,Divider as R,CartItem as er,Image as nr,CartItemSkeleton as w}from"@dropins/tools/components.js";import*as h from"@dropins/tools/preact-compat.js";import{useReducer as ar,useState as ir,useCallback as F,useEffect as H}from"@dropins/tools/preact-compat.js";import{Text as m,useText as V}from"@dropins/tools/i18n.js";import{events as tr}from"@dropins/tools/event-bus.js";import"@dropins/tools/fetch-graphql.js";const or=()=>{const n=()=>window.innerWidth>=1920?"xxlarge":window.innerWidth>=1366?"xlarge":window.innerWidth>=1024?"large":window.innerWidth>=768?"medium":"small",[e,i]=J(n());return X(()=>{let a;const o=()=>{a&&clearTimeout(a),a=setTimeout(()=>i(n()),50)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o),a&&clearTimeout(a)}},[]),e};var S=(n=>(n.ADD_ORDER_REFERENCE="ADD_ORDER_REFERENCE",n.LOADING="LOADING",n.SET_DETAILS="SET_DETAILS",n.ALERT="ALERT",n.DISMISS_ALERT="DISMISS_ALERT",n))(S||{}),W=(n=>(n.ERROR="error",n.WARNING="warning",n.SUCCESS="success",n))(W||{}),L=(n=>(n.INVALID_ORDER="invalid_order",n.INVALID_SEARCH="invalid_search",n.UNKNOWN="unknown_error",n))(L||{});function cr(n,e){switch(e.type){case"LOADING":return{...n,isLoading:!0};case"SET_DETAILS":return{...n,isLoading:!1,details:e.details,alert:e.alert};case"ALERT":return{...n,isLoading:!1,alert:e.alert};case"DISMISS_ALERT":return{...n,alert:void 0};default:return n}}const $=({children:n,className:e})=>or()!=="small"?r("div",{className:e,children:n}):r(C,{children:n});function dr(n){const e=n==null?void 0:n.total,i=n==null?void 0:n.is_virtual;if(!e)return;const a=e==null?void 0:e.grand_total,o=e==null?void 0:e.subtotal,t=e==null?void 0:e.total_shipping,s=e==null?void 0:e.total_tax;return{total:{inclTax:{amount:(a==null?void 0:a.value)||0,currency:(a==null?void 0:a.currency)||""}},subtotal:{amount:(o==null?void 0:o.value)||0,currency:(o==null?void 0:o.currency)||"",isTaxIncl:!1},shipping:{amount:(t==null?void 0:t.value)||0,currency:(t==null?void 0:t.currency)||"",isVirtual:i},tax:{amount:(s==null?void 0:s.value)||0,currency:(s==null?void 0:s.currency)||""}}}const sr=({state:n})=>{const{isLoading:e,details:i}=n,a=dr(i);return d(C,{children:[r(Er,{isLoading:e,summary:a}),r(Ir,{isLoading:e,details:i})]})},mr=({state:n})=>r($,{className:"order-confirmation__aside",children:r(sr,{state:n})}),lr=({state:n,routeHome:e,routeSupport:i})=>{const{details:a,isLoading:o}=n,t=a==null?void 0:a.billing_address,s=(t==null?void 0:t.firstname)||"",c=(a==null?void 0:a.number)||"",f=(a==null?void 0:a.status)||"";return d(C,{children:[(o||!o&&(!!s&&!!c))&&r(_r,{isLoading:o,customerName:s,orderNumber:c,orderStatus:f}),r(gr,{isLoading:o,orderDetails:a}),r(Nr,{isLoading:o,routeHome:e,routeSupport:i})]})},ur=({state:n,routeHome:e,routeSupport:i,dismissAlert:a,onOrderSearch:o})=>r($,{className:"order-confirmation__main",children:r(lr,{state:n,routeHome:e,routeSupport:i,dismissAlert:a,onOrderSearch:o})}),fr=({className:n,state:e,dismissAlert:i,routeHome:a,routeSupport:o,onOrderSearch:t})=>{const{details:s,alert:c,isLoading:f}=e,E=!!(s!=null&&s.number),g=c&&c.code===L.INVALID_ORDER,u=c&&c.code===L.INVALID_SEARCH;return!f&&!E?r("div",{className:y(["order-confirmation",n]),children:r(vr,{alert:g||u?{heading:c.message,description:"",type:c.type,onDismiss:i}:void 0,onOrderSearch:t})}):d("div",{className:y(["order-confirmation",n]),children:[r(ur,{state:e,dismissAlert:i,routeHome:a,routeSupport:o,onOrderSearch:t}),r(mr,{state:e})]})},hr=n=>h.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},h.createElement("g",{clipPath:"url(#clip0_4797_15077)"},h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M10.15 20.85L1.5 17.53V6.63L10.15 10V20.85Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M1.5 6.63001L10.15 3.20001L18.8 6.63001L10.15 10L1.5 6.63001Z",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M6.17969 4.77002L14.8297 8.15002V11.47",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"}),h.createElement("path",{vectorEffect:"non-scaling-stroke",d:"M18.7896 12.64V6.63L10.1396 10V20.85L14.8296 19.05",stroke:"currentColor",strokeLinejoin:"round"}),h.createElement("path",{className:"success-icon",vectorEffect:"non-scaling-stroke",d:"M15.71 17.26C15.71 15.38 17.23 13.86 19.11 13.86C20.99 13.86 22.51 15.38 22.51 17.26C22.51 19.14 20.99 20.66 19.11 20.66C17.23 20.66 15.71 19.14 15.71 17.26Z",stroke:"currentColor"}),h.createElement("path",{className:"success-icon",vectorEffect:"non-scaling-stroke",d:"M17.4805 17.49L18.5605 18.41L20.7205 16.33",stroke:"currentColor",strokeLinecap:"square",strokeLinejoin:"round"})),h.createElement("defs",null,h.createElement("clipPath",{id:"clip0_4797_15077"},h.createElement("rect",{width:22,height:18.65,fill:"white",transform:"translate(1 2.70001)"})))),pr=n=>h.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...n},h.createElement("path",{vectorEffect:"non-scaling-stroke",fillRule:"evenodd",clipRule:"evenodd",d:"M1 20.8953L12.1922 1.5L23.395 20.8953H1ZM13.0278 13.9638L13.25 10.0377V9H11.25V10.0377L11.4722 13.9638H13.0278ZM11.2994 16V17.7509H13.2253V16H11.2994Z",fill:"currentColor"})),_r=({isLoading:n,customerName:e,orderNumber:i,orderStatus:a})=>n?r(yr,{}):d("div",{className:"order-confirmation-header order-confirmation__card",children:[r(Z,{source:hr,size:"64",className:"order-confirmation-header__icon"}),r("h1",{className:"order-confirmation-header__title",children:e?r(m,{id:"OrderConfirmation.Header.title",fields:{name:e}}):r(m,{id:"OrderConfirmation.Header.defaultTitle"})}),i&&d("p",{children:[r(m,{id:"OrderConfirmation.Header.order",fields:{order:i}}),a!==void 0&&a!==""&&d("span",{className:"order-confirmation-header__status",children:[" ","(",a,")"]})]})]}),yr=()=>d(k,{"data-testid":"order-confirmation-header-skeleton",className:"order-confirmation-header",children:[r(l,{variant:"empty",size:"xlarge",fullWidth:!0}),r(l,{variant:"empty",size:"medium"}),r(l,{variant:"empty",size:"medium"}),r(l,{variant:"empty",size:"medium"}),r(l,{variant:"empty",size:"medium"}),r(l,{variant:"empty",size:"medium"}),r(l,{size:"small",fullWidth:!0}),r(l,{variant:"heading",size:"xsmall",fullWidth:!0})]}),vr=({alert:n,onOrderSearch:e})=>{const i=V({email:"OrderConfirmation.OrderSearchForm.email",postcode:"OrderConfirmation.OrderSearchForm.postcode",number:"OrderConfirmation.OrderSearchForm.orderNumber"}),a=o=>{o.preventDefault();const t=Y(o.target);e==null||e(t)};return d(I,{variant:"secondary",className:"order-confirmation-order-search-form order-confirmation__card",children:[r("h2",{className:"order-confirmation-order-search-form__title",children:r(m,{id:"OrderConfirmation.OrderSearchForm.title"})}),r("p",{children:r(m,{id:"OrderConfirmation.OrderSearchForm.description"})}),n&&r(rr,{className:"order-confirmation-order-search-form__alert","data-testid":"order-confirmation-alert",icon:r(Z,{source:pr}),...n}),d("form",{className:"order-confirmation-order-search-form__fields",onSubmit:a,children:[d("div",{className:"order-confirmation-order-search-form__fields-columns",children:[r(z,{children:r(M,{id:"order-email",name:"email",type:"email",autocomplete:"email",placeholder:i.email,floatingLabel:i.email,required:!0,"aria-label":i.email,"aria-required":!0})}),r(z,{children:r(M,{id:"postcode",name:"postcode",type:"text",autocomplete:"postal-code",placeholder:i.postcode,floatingLabel:i.postcode,required:!1,"aria-label":i.postcode,"aria-required":!0})})]}),r(z,{children:r(M,{id:"order-number",name:"number",type:"text",placeholder:i.number,floatingLabel:i.number,required:!0,"aria-label":i.number,"aria-required":!0})}),r(D,{className:"order-confirmation-order-search-form__button",size:"medium",variant:"primary",type:"submit",children:r(m,{id:"OrderConfirmation.OrderSearchForm.button"})},"logIn")]})]})},gr=({isLoading:n,orderDetails:e})=>{var G,A,P,B,j;if(n)return r(Or,{});const i=e&&(e==null?void 0:e.number),a=(e==null?void 0:e.email)||"",o=e&&a!=="",t=e==null?void 0:e.shipping_address,s=e&&t!==null,c=e==null?void 0:e.billing_address,f=e&&c!==null,E=e==null?void 0:e.shipping_method,g=(A=(G=e==null?void 0:e.total)==null?void 0:G.total_shipping)==null?void 0:A.value,u=(B=(P=e==null?void 0:e.total)==null?void 0:P.total_shipping)==null?void 0:B.currency,p=e&&E&&u&&g!=null,_=e==null?void 0:e.payment_methods,O=_&&_.length>0,x=O?(j=_[0])==null?void 0:j.name:"",q=e&&O&&x!=="";return d(I,{variant:"secondary",className:"order-confirmation-details order-confirmation__card",children:[r("div",{className:"order-confirmation-details__header",children:r("h2",{className:"order-confirmation-details__title",children:r(m,{id:"OrderConfirmation.Details.title"})})}),d("div",{className:"order-confirmation-details__contact",children:[(!e||o)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.contact"})}),o&&r("p",{children:a}),!i&&r(N,{rows:1,"data-testid":"order-confirmation-details-contact-skeleton"})]}),d("div",{className:"order-confirmation-details__information",children:[d("div",{className:"order-confirmation-details__shipping_address",children:[(!i||s)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.shippingAddress"})}),s&&d(C,{children:[d("p",{children:[t==null?void 0:t.firstname," ",t==null?void 0:t.lastname]}),t==null?void 0:t.street.map((T,b)=>r("p",{children:T},b)),d("p",{children:[t==null?void 0:t.city," ",t==null?void 0:t.region," ",t==null?void 0:t.postcode,", ",t==null?void 0:t.country_code]})]}),!i&&r(N,{rows:3,"data-testid":"order-confirmation-shipping-address-skeleton"})]}),d("div",{className:"order-confirmation-details__billing_address",children:[(!i||f)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.billingAddress"})}),f&&d(C,{children:[d("p",{children:[c==null?void 0:c.firstname," ",c==null?void 0:c.lastname]}),c==null?void 0:c.street.map((T,b)=>r("p",{children:T},b)),d("p",{children:[c==null?void 0:c.city," ",c==null?void 0:c.region," ",c==null?void 0:c.postcode,", ",c==null?void 0:c.country_code]})]}),!i&&r(N,{rows:3,"data-testid":"order-confirmation-billing-address-skeleton"})]}),d("div",{className:"order-confirmation-details__shipping-method",children:[(!i||p)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.shippingMethod"})}),p&&r(C,{children:g===0?r("p",{className:"order-confirmation-order-summary__price",children:r(m,{id:"OrderConfirmation.Details.freeShipping"})}):d("p",{children:[r(v,{amount:g,currency:u})," ",E]})}),!i&&r(N,{rows:1,"data-testid":"order-confirmation-details-shipping-method-skeleton"})]}),d("div",{className:"order-confirmation-details__payment-method",children:[(!i||q)&&r("h3",{children:r(m,{id:"OrderConfirmation.Details.paymentMethod"})}),q&&r("p",{children:x}),!i&&r(N,{rows:1,"data-testid":"order-confirmation-details-payment-method-skeleton"})]})]})]})},Or=()=>r(I,{variant:"secondary",className:"order-confirmation-details",children:d(k,{"data-testid":"order-confirmation-details-skeleton",children:[r(l,{variant:"heading",size:"medium",fullWidth:!0}),r(l,{size:"medium"}),r(l,{variant:"empty",size:"medium"}),r(l,{size:"xlarge"}),r(l,{size:"xlarge"}),r(l,{size:"xlarge"}),r(l,{size:"xlarge"})]})}),Nr=({isLoading:n,className:e,routeHome:i,routeSupport:a,...o})=>n?r(Cr,{}):d("div",{className:y(["order-confirmation-footer",e]),...o,children:[(i==null?void 0:i())&&r(D,{"data-testid":"order-confirmation-footer__continue-button",className:"order-confirmation-footer__continue-button",size:"medium",variant:"primary",type:"submit",href:i==null?void 0:i(),children:r(m,{id:"OrderConfirmation.Footer.continueShopping"})},"continueShopping"),d("p",{className:"order-confirmation-footer__contact-support",children:[r(m,{id:"OrderConfirmation.Footer.help"})," ",(a==null?void 0:a())&&r("a",{href:a==null?void 0:a(),rel:"noreferrer",className:"order-confirmation-footer__contact-support-link","data-testid":"order-confirmation-footer__contact-support-link",children:r(m,{id:"OrderConfirmation.Footer.contactSupport"})})]})]}),Cr=()=>d(k,{className:"order-confirmation-footer",children:[r(l,{size:"small",fullWidth:!0}),r(l,{variant:"heading",size:"xsmall",fullWidth:!0})]}),N=({rows:n,size:e="xsmall",...i})=>r(k,{className:"static-skeleton",...i,children:Array.from(Array(n).keys()).map(a=>r(l,{variant:"heading",size:e,fullWidth:!0},a))}),Er=({className:n,isLoading:e,summary:i,variant:a="secondary"})=>{if(e)return r(Sr,{});const{total:o,subtotal:t,shipping:s,tax:c}=i??{};return d(I,{className:y(["order-confirmation-order-summary",n]),variant:a,children:[r("h2",{className:"order-confirmation-order-summary__title",children:r(m,{id:"OrderConfirmation.OrderSummary.title"})}),r(R,{variant:"primary"}),t!=null?d("div",{"data-testid":"order-summary-subtotal",className:"order-confirmation-order-summary__row",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.subtotal"})}),r(v,{amount:t==null?void 0:t.amount,currency:t==null?void 0:t.currency,className:y(["order-confirmation-order-summary__price",n])})]}):r(N,{rows:1,"data-testid":"order-confirmation-order-summary-subtotal-skeleton"}),(t==null?void 0:t.isTaxIncl)&&r("div",{"data-testid":"order-summary-subtotal-incl-tax",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",children:r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.includingTaxes"})})}),s!=null?s.isVirtual?null:d("div",{"data-testid":"order-summary-shipping",className:"order-confirmation-order-summary__row",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.shipping"})}),s.amount===0?r("p",{className:"order-confirmation-order-summary__price",children:r(m,{id:"OrderConfirmation.OrderSummary.freeShipping"})}):r(v,{amount:s.amount,currency:s.currency,className:y(["order-confirmation-order-summary__price",n])})]}):r(N,{rows:1,"data-testid":"order-confirmation-order-summary-shipping-skeleton"}),c!=null&&!c.breakdown&&d("div",{"data-testid":"order-summary-tax",className:"order-confirmation-order-summary__row",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.tax"})}),r(v,{amount:c.amount,currency:c.currency,className:y(["order-confirmation-order-summary__price",n])})]}),c!=null&&c.breakdown&&d(C,{children:[r(R,{variant:"secondary"}),r("div",{className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--margin-bottom",children:r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.taxBreakdown"})})}),c.breakdown.map(f=>d("div",{"data-testid":"order-summary-tax-breakdown",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",children:[r("p",{children:f.label}),r(v,{amount:f.amount.value,currency:f.amount.currency,className:y(["order-confirmation-order-summary__price",n])})]},f.label)),d("div",{"data-testid":"order-summary-tax-breakdown-total",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--strong order-confirmation-order-summary__row--margin-top",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.taxTotal"})}),r(v,{amount:c.amount,currency:c.currency,className:y(["order-confirmation-order-summary__price",n])})]}),r(R,{variant:"secondary"})]}),o!=null?d("div",{"data-testid":"order-summary-total-incl-tax",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--emphasized",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.total"})}),r(v,{amount:o==null?void 0:o.inclTax.amount,currency:o==null?void 0:o.inclTax.currency,className:y(["order-confirmation-order-summary__price",n])})]}):r(N,{rows:1,"data-testid":"order-confirmation-order-summary-total-skeleton"}),(o==null?void 0:o.exclTax)!=null&&d("div",{"data-testid":"order-summary-total-excl-tax",className:"order-confirmation-order-summary__row order-confirmation-order-summary__row--muted",children:[r("p",{children:r(m,{id:"OrderConfirmation.OrderSummary.totalExclTax"})}),r(v,{amount:o.exclTax.amount,currency:o.exclTax.currency,className:y(["order-confirmation-order-summary__price",n])})]})]})},Sr=()=>d(k,{"data-testid":"order-confirmation-order-summary-skeleton",className:"order-confirmation-order-summary",children:[r(l,{variant:"heading",size:"small"}),r(l,{variant:"empty",size:"small"}),r(l,{variant:"empty",size:"small"}),r(l,{variant:"empty",size:"small"}),r(l,{variant:"heading",size:"small",fullWidth:!0,lines:3})]}),kr=({className:n,item:e,taxIncluded:i=!1})=>{const a=V({Sender:"OrderConfirmation.CartSummary.GiftCard.sender",Recipient:"OrderConfirmation.CartSummary.GiftCard.recipient"});let o=e.regularPrice,t=e.total;i&&(o=e.priceInclTax,t=e.totalInclTax);const s={..."configurableOptions"in e?e.configurableOptions:{},..."senderName"in e&&e.senderName?{[a.Sender]:e.senderName}:{},..."senderEmail"in e&&e.senderEmail?{[a.Sender]:e.senderEmail}:{},..."recipientName"in e&&e.recipientName?{[a.Recipient]:e.recipientName}:{},..."recipientEmail"in e&&e.recipientEmail?{[a.Recipient]:e.recipientEmail}:{}};return r("div",{className:y(["order-confirmation-cart-summary-item",n]),children:r(er,{"data-testid":"cart-summary-item",taxIncluded:i,title:r("div",{"data-testid":"product-name",children:e.name}),sku:r("div",{children:e.sku}),quantity:e.quantity,image:r(nr,{src:e.image.src,alt:e.image.alt,loading:"lazy",width:"80",height:"80",params:{width:80}}),configurations:s,price:r(v,{amount:e.regularPrice.value,currency:o.currency,weight:"normal"}),total:d(C,{children:[r(v,{amount:e.regularPrice.value*e.quantity,currency:o.currency,variant:e.discounted?"strikethrough":"default"}),e.discounted&&r(v,{amount:t.value,currency:t.currency,sale:!0})]})},e.uid)})};function wr(n){return{uid:n.id,quantity:n.quantity_ordered,sku:n.product.sku,name:n.product.name,image:{src:n.product.thumbnail.url,alt:n.product.thumbnail.label},price:{value:n.product_sale_price.value,currency:n.product_sale_price.currency},priceInclTax:{value:n.product_sale_price.value,currency:n.product_sale_price.currency},total:{value:n.product_sale_price.value*n.quantity_ordered,currency:n.product_sale_price.currency},totalInclTax:{value:n.product_sale_price.value*n.quantity_ordered,currency:n.product_sale_price.currency},discount:{value:0,currency:n.product_sale_price.currency},regularPrice:{value:n.product.price_range.maximum_price.regular_price.value,currency:n.product.price_range.maximum_price.regular_price.currency},discounted:n.product.price_range.maximum_price.regular_price.value*n.quantity_ordered!==n.product_sale_price.value*n.quantity_ordered,configurableOptions:Lr(n),senderName:n.__typename==="GiftCardOrderItem"?n.gift_card.sender_name:void 0,senderEmail:n.__typename==="GiftCardOrderItem"?n.gift_card.sender_email:void 0,recipientEmail:n.__typename==="GiftCardOrderItem"?n.gift_card.recipient_email:void 0,recipientName:n.__typename==="GiftCardOrderItem"?n.gift_card.recipient_name:void 0}}function Lr(n){if(!("selected_options"in n))return;const e={};for(const i of n.selected_options)e[i.label]=i.value;return e}const Ir=({isLoading:n,details:e})=>{if(n)return r(xr,{});const i=!1,a=e.items,o=a.length;return r("div",{className:"order-confirmation-cart-summary",children:d(I,{variant:"secondary",children:[r("div",{className:"order-confirmation-cart-summary__heading",children:d("h2",{className:"order-confirmation-cart-summary__title",children:[r(m,{id:"OrderConfirmation.CartSummary.title"})," (",o,")"]})}),r(R,{className:"order-confirmation-cart-summary__divider-top",variant:"primary"}),r("div",{className:"order-confirmation-cart-summary__items",children:a==null?void 0:a.map(t=>{const s=wr(t);return r(kr,{item:s,taxIncluded:i},s==null?void 0:s.uid)})})]})})},xr=()=>d(k,{"data-testid":"cart-summary-skeleton",className:"order-confirmation-cart-summary",style:{gridTemplateColumns:"1fr"},children:[r(l,{variant:"heading",fullWidth:!0,size:"medium"}),r(w,{}),r(w,{}),r(w,{}),r(w,{}),r(w,{})]});function Rr(n){const[e,i]=ar(cr,{isLoading:!1,orderRef:n,details:null}),[a,o]=ir(),t=V({invalidOrder:"OrderConfirmation.Errors.invalidOrder",invalidSearch:"OrderConfirmation.Errors.invalidSearch",pageNotFound:"OrderConfirmation.Errors.pageNotFound",unknown:"OrderConfirmation.Errors.unknown"}),s=F(u=>{switch(u){case"Invalid order":case"Order not found":case"We couldn't locate an order with the information provided.":return{type:W.WARNING,code:L.INVALID_ORDER,message:t.invalidOrder};case"Invalid search":return{type:W.WARNING,code:L.INVALID_SEARCH,message:t.invalidSearch}}},[t.invalidOrder,t.invalidSearch]),c=()=>{i({type:S.DISMISS_ALERT})},f=function(u){E(u)};H(()=>{const u=tr.on("authenticated",p=>{o(p)},{eager:!0});return()=>{u==null||u.off()}},[a]);const E=F(u=>{U(u).then(p=>{const O=!!(p!=null&&p.number)?void 0:s("Invalid search");i({type:S.SET_DETAILS,details:p,alert:O})}).catch(()=>{const p=s("Invalid search");i({type:S.SET_DETAILS,details:null,alert:p})})},[s]),g=F(u=>{(a?K:Q)(u).then(_=>{const x=!!(_!=null&&_.number)?void 0:s("Invalid order");i({type:S.SET_DETAILS,details:_,alert:x})}).catch(_=>{const O=s(_.message);if(!O){console.error(_);return}i({type:S.ALERT,alert:O})})},[a,s]);return H(()=>{!e.orderRef||a===void 0||(i({type:S.LOADING}),g(e.orderRef))},[a,g,e.orderRef]),{state:e,authenticated:a,handleOrderSearch:f,dismissAlert:c}}const Ar=({orderRef:n,routeHome:e,routeSupport:i})=>{const{state:a,authenticated:o,handleOrderSearch:t,dismissAlert:s}=Rr(n);return o===void 0?null:r(fr,{state:a,dismissAlert:s,onOrderSearch:t,routeHome:e,routeSupport:i})};export{Ar as OrderConfirmation,Ar as default};
//# sourceMappingURL=OrderConfirmation.js.map