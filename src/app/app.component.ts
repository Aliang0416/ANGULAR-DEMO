import { Component } from '@angular/core';
import {Picture} from "./Picture";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'third-demo';
  time = 1675139055
  customeImgs:Array<Picture> = [
    {
    picName: '彭于晏',
    picUrl: 'https://hbimg.huabanimg.com/3420868118236c030b7a24405f29daae8a4715a09035-uLeI58_fw658'
  },
    {
      picName:'狗',
      picUrl: 'https://t7.baidu.com/it/u=4162611394,4275913936&fm=193&f=GIF',
      picWidth: 1200,
      picHeight: 801
    },
    {
      picName: '鸟',
      picUrl: 'https://t7.baidu.com/it/u=1831997705,836992814&fm=193&f=GIF',
      picWidth: 1200,
      picHeight: 853
    },];

  showImage($event: any) {
    console.log($event)
  }
}
