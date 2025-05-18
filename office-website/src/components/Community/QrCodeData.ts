export interface QrCodeCardData {
  imageUrl: string;
  imageAlt: string;
  text: string;
  linkUrl?: string;
  linkText?: string;
}

export const qrCodes: QrCodeCardData[] = [
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016230653669.png",
    imageAlt: "微信交流群二维码",
    text: "扫码加入逆向技术微信交流群"
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20231030132026541-7614065.png",
    imageAlt: "个人微信二维码",
    text: "如群二维码过期，可以加我个人微信，发送【逆向群】拉你进群"
  },
  {
    imageUrl: "https://cdn.jsdelivr.net/gh/JSREI/.github/profile/README.assets/image-20241016231143315.png",
    imageAlt: "TG交流群二维码",
    text: "扫码加入TG交流群",
    linkUrl: "https://t.me/jsreijsrei",
    linkText: "点此"
  }
]; 