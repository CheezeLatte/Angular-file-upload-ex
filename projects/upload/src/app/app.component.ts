import { Component } from '@angular/core';
import { UploadService } from './services/upload.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  disabled = false;
  image: string;

  constructor(private uploadService: UploadService) { }

  handleFiles(files: File[]): void {
    const file = files[0];

    this.uploadService.upload(file).subscribe(res => {
      console.log(res);
      this.image = res.url;
    });
  }

  removeImage(e: MouseEvent): void {
    this.image = null;
    e.stopPropagation();
  }
}
