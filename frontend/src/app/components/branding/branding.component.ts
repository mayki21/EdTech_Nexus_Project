import { Component } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-branding',
  templateUrl: './branding.component.html',
  styleUrls: ['./branding.component.css']
})
export class BrandingComponent {
  text_h2: string =
  'Discover how professionals at leading companies are excelling in sought-after skills';
text_anchor = 'Learn more about LearnHub for Business';
image_text =
  'https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera_assets.s3.amazonaws.com/images/74c8747e8210831049cf88dd4eefe26c.png?auto=format%2Ccompress&dpr=1&w=320&h=70&q=40';

}
