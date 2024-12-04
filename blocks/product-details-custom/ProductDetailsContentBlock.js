import { h } from '../../scripts/preact.js';
import htm from '../../scripts/htm.js';

const html = htm.bind(h);

export default function ProductDetailsContentBlock() {
  return html`
    <div class="pb-0 w-full overflow-hidden">
      <div class="dkv-fuel-stations">
        <div class="fuel-stations content px-12 pt-8 pb-6 w-full">
          <div class="text-base font-medium text-center mb-4">
              <p>Wir bieten Ihnen das größte Tankstellennetz in Europa mit 68.000 Tankstellen und rund 827.000 öffentlich zugänglichen Ladepunkten.</p>
              <img src="https://power-pack-az5hjaa-bm5l4hpp6cb3s.eu-4.magentosite.cloud/media/.renditions/wysiwyg/img-400x400.png" alt="" width="100" height="100" style="width: 100px;"/>
              <img src="https://power-pack-az5hjaa-bm5l4hpp6cb3s.eu-4.magentosite.cloud/media/.renditions/wysiwyg/img-400x400.png" alt="" width="100" height="100" style="width: 100px;"/>
          </div>
        </div>
      </div>
    </div>
  `;
}

// export default class ProductDetailsContentBlock extends Component {
//   render() {
//     const { content } = this.props;
//     console.log(this);
//     return html`<div>ProductDetailsContentBlock</div> ${content}`;
//   }
// }
