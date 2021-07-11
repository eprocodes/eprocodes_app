import { Component } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private camera: Camera,private DomSanitizer: DomSanitizer) {}
 
  image: any;
 
  file:any;

  width: any = '200';

  height: any = '200';

  takePic() {
  // const options: CameraOptions = {
  //     quality: 100,
  //     destinationType: this.camera.DestinationType.FILE_URI,
  //     encodingType: this.camera.EncodingType.JPEG,
  //     mediaType: this.camera.MediaType.PICTURE
  //   }
  // this.camera.getPicture(options).then((imageData) => {
  //  // imageData is either a base64 encoded string or a file URI
  //  // If it's base64 (DATA_URL):
  //  //let base64Image = 'data:image/jpeg;base64,' + imageData;
  //  this.image = imageData;
  //  alert(this.image);
  // }, (err) => {
  //  // Handle error
  // });

  const options: CameraOptions = {
    quality: 100,
    allowEdit: true,
    saveToPhotoAlbum: true,
    correctOrientation: true,
    encodingType: this.camera.EncodingType.JPEG,
    destinationType: this.camera.DestinationType.FILE_URI
    }
    
    this.camera.getPicture(options).then((imageData) => {
       let imageUrl;
        //needs to import file plugin
        //split the file and the path from FILE_URI result
        let filename = imageData.substring(imageData.lastIndexOf('/')+1);
        let path =  imageData.substring(0,imageData.lastIndexOf('/')+1);
             //then use the method reasDataURL  btw. var_picture is ur image variable
             this.file.readAsDataURL(path, filename).then(res=> imageUrl = res  );
             this.image = imageUrl;
    })
}

resizeBox(mode){

  let x = document.getElementById('currentBox');
    if( mode === 'zoomin') {
      this.width = this.width -1;
      this.height = this.height -1;
      x.setAttribute('style','width:'+this.width+'px;height:'+this.height+'px')
    } else {
      this.width = this.width +1;
      this.height = this.height +1;
      x.setAttribute('style','width:'+this.width+'px;height:'+this.height+'px')
    }
}

}
