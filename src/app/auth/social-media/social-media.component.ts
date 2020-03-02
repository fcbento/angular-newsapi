import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  constructor(public service: AuthService) { }

  ngOnInit(): void {
  }

  public authSocial(socialMedia: string) {
    switch (socialMedia) {
      case 'GOOGLE':
        return this.service.socialMediaAuth('GOOGLE');
      case 'FACEBOOK':
        return this.service.socialMediaAuth('FACEBOOK');
      case 'TWITTER':
        return this.service.socialMediaAuth('TWITTER');
      case 'GITHUB':
        return this.service.socialMediaAuth('GITHUB');
      default:
        break;
    }

  }

}
