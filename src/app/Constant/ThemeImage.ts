export class ThemeImageClass {
  private themeName: string;
  public image!: {
    cover: string;
    hero: string;
    home: string;
    maleFemale: string;
    topRight?: string;
    topLeft?: string;
    bottomRight?: string;
    bottomLeft?: string;
  };

  constructor(themeName: string) {
    this.themeName = themeName;
    this.initializeColor();
  }

  private initializeColor(): void {
    if (this.themeName === "GreenFloral") {
      this.image = {
        cover: "image/background/floralVertical.jpg",
        hero: "image/background/floralVertical.jpg",
        home: "string",
        maleFemale: "/image/background/artPaper.jpg",
      };
    } else if (this.themeName === "DarkGreenFloral") {
      this.image = {
        cover: "image/background/floralVertical.jpg",
        hero: "image/background/floralVertical.jpg",
        home: "string",
        maleFemale: "/image/background/artPaper.jpg",
      };
    } else if (this.themeName === "BlueFloral") {
      this.image = {
        cover: "image/background/BlueFloral.jpg",
        hero: "image/background/BlueFloral.jpg",
        home: "string",
        maleFemale: "/image/background/artPaper4.jpg",
      };
    } else if (this.themeName === "BluePastel") {
      this.image = {
        cover: "image/background/artPaper6.jpg",
        hero: "image/background/artPaper5.jpg",
        home: "string",
        maleFemale: "/image/background/flowerGreenIcon2.jpg",
        topRight: "/image/background/frame-tr.jpg",
        topLeft: "",
        bottomRight: "",
        bottomLeft: "/image/background/frame-bl.jpg",
      };
    } else if (this.themeName === "BlueAnimatedFloral") {
      this.image = {
        cover: "image/background/artPaper7.jpg",
        hero: "image/background/artPaper5.jpg",
        home: "string",
        maleFemale: "/image/background/blueAnimatedInfo.png",
        topRight: "",
        topLeft: "/image/background/blueAnimatedFrame-tl.png",
        bottomRight: "/image/background/blueAnimatedFrame-br.png",
        bottomLeft: "",
      };
    } else if (this.themeName === "CoklatAnimatedFloral") {
      this.image = {
        cover: "image/background/artPaper8.jpg",
        hero: "image/background/artPaper5.jpg",
        home: "string",
        maleFemale: "/image/background/CoklatAnimatedInfo.png",
        topRight: "",
        topLeft: "/image/background/CoklatAnimateFrame-tl.png",
        bottomRight: "/image/background/CoklatAnimateFrame-br.png",
        bottomLeft: "",
      };
    }else if (this.themeName === "JavaStyle1") {
      this.image = {
        cover: "image/background/artPaper10.jpg",
        hero: "image/background/artPaper5.jpg",
        home: "string",
        maleFemale: "/image/background/JavaStyle1-info.png",
        topLeft: "/image/background/JavaStyle1-tl1.png",
        topRight: "/image/background/JavaStyle1-tr1.png",
        bottomRight: "/image/background/JavaStyle1-br1.png",
        bottomLeft: "/image/background/JavaStyle1-bl1.png",
      };
    }else {
      this.image = {
        cover: "string",
        hero: "string",
        home: "string",
        maleFemale: "/image/background/artPaper.jpg",
      };
    }
  }
}
