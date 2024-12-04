import { Component, h } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

function Attributes(product) {
  const { attributes } = product.product;
  if (!attributes) {
    return null;
  }
  // eslint-disable-next-line max-len
  // <sup>${attribute.roles.includes('visible_in_pdp') ? html`<span>visible_in_pdp</span>` : 'false'}</sup>
  return html`
    ${attributes.map((attribute) => html`
    <div class="product-details-attribute">
      <dl class="description-list" key=${attribute.name}>
        ${attribute.value ? html`
        <dt class="description-term">${attribute.label}</dt>
        <dd class="description-details">${Array.isArray(attribute.value) ? attribute.value.join(', ') : attribute.value}</dd>
        ` : ''}
      </dl>
    </div>
  `)}`;
}

export default class ProductDetailsAttribute extends Component {
  render() {
    const { product, loading } = this.props;
    if (loading) {
      return html`<div class="sidebar shimmer"></div>`;
    }
    return html`<${Attributes} product=${product} />`;
  }
}
