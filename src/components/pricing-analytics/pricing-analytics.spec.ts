import { newSpecPage } from '@stencil/core/testing';
import { MyComponent } from './pricing-analytics';

describe('pricing-analytics', () => {
  it('renders', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: '<pricing-analytics></pricing-analytics>',
    });
    expect(root).toEqualHtml(`
      <pricing-analytics>
        <mock:shadow-root>
          <div>
            Hello, World! I'm
          </div>
        </mock:shadow-root>
      </pricing-analytics>
    `);
  });

  it('renders with values', async () => {
    const { root } = await newSpecPage({
      components: [MyComponent],
      html: `<pricing-analytics first="Stencil" last="'Don't call me a framework' JS"></pricing-analytics>`,
    });
    expect(root).toEqualHtml(`
      <pricing-analytics first="Stencil" last="'Don't call me a framework' JS">
        <mock:shadow-root>
          <div>
            Hello, World! I'm Stencil 'Don't call me a framework' JS
          </div>
        </mock:shadow-root>
      </pricing-analytics>
    `);
  });
});
