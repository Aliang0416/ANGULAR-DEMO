import {Component, OnInit, AfterViewInit, Output, EventEmitter, Input} from '@angular/core';
import {Picture,ImageClickEvent} from "../../Picture";
import {PictureService} from "../../picture.service";
@Component({
  selector: 'app-show-picture',
  templateUrl: './show-picture.component.html',
  styleUrls: ['./show-picture.component.css']
})
export class ShowPictureComponent implements OnInit,AfterViewInit {
  @Input('imgs') imgs: Picture[] = []

  @Output('imgclicked') imgclicked = new EventEmitter<ImageClickEvent>()


  index: number = 0

  currentImg!: Picture;

  previousImage!: Picture

  showImg: Picture[] = []

  constructor(private pictureService: PictureService) { }

  ngOnInit(): void {
    if(!this.imgs.length)this.getPic()
  }

  getPic(): void {
    this.pictureService.getPictures().subscribe(picture => this.imgs = picture)
  }

  ngAfterViewInit(): void {
    this.showImg = this.imgs.slice(this.index,this.index+1)
  }

  changePic(e: MouseEvent): void {
    if(this.index === 4){
      this.index = -1
    }
    let pre=this.imgs[this.index++];
    this.showImg = this.imgs.slice(this.index,this.index+1)
    this.currentImg = this.showImg[0]
    const timestamp = new Date().getTime()
    const position = { x: e.clientX, y: e.clientY }
    this.imgclicked.emit({position,currentImage: this.currentImg,previousImage:pre,timestamp})
  }


}
