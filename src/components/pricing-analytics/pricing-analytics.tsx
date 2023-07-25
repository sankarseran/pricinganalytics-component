import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'pricing-analytics',
  styleUrl: 'pricing-analytics.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  /**
 * The last name
 */
  @Prop() pKey: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div>
        <p> Hello, World! I'm {this.getText()} </p>
        { this.pKey }
        {this.pKey === 'jwt-token' ? 
          (
            <div>
              <div class="columns">
                <ul class="price">
                  <li class="header">Basic</li>
                  <li class="grey">$ 9.99 / year</li>
                  <li>10GB Storage</li>
                  <li>10 Emails</li>
                  <li>10 Domains</li>
                  <li>1GB Bandwidth</li>
                  <li class="grey"><a href="#" class="button">Sign Up</a></li>
                </ul>
              </div>

              <div class="columns">
                <ul class="price">
                  <li class="header center">Pro</li>
                  <li class="grey">$ 24.99 / year</li>
                  <li>25GB Storage</li>
                  <li>25 Emails</li>
                  <li>25 Domains</li>
                  <li>2GB Bandwidth</li>
                  <li class="grey"><a href="#" class="button">Sign Up</a></li>
                </ul>
              </div>                          

              <div class="columns">
                <ul class="price">
                  <li class="header">Premium</li>
                  <li class="grey">$ 49.99 / year</li>
                  <li>50GB Storage</li>
                  <li>50 Emails</li>
                  <li>50 Domains</li>
                  <li>5GB Bandwidth</li>
                  <li class="grey"><a href="#" class="button">Sign Up</a></li>
                </ul>
              </div> 
            </div>
          ) : ''
        } 
      </div>
    );
  }
}
