
export class ThemeImageClass {
    private themeName: string;
    public image!: {
      cover: string,
      hero: string,
      home: string,
      maleFemale: string,
      top?:string,
      bottom?:string,
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
            maleFemale:"/image/background/artPaper.jpg"
        };
      }else if (this.themeName === "DarkGreenFloral") {
        this.image = {
            cover: "image/background/floralVertical.jpg",
            hero: "image/background/floralVertical.jpg",
            home: "string",
            maleFemale:"/image/background/artPaper.jpg"

        };
      }else if (this.themeName === "BlueFloral") {
        this.image = {
            cover: "image/background/BlueFloral.jpg",
            hero: "image/background/BlueFloral.jpg",
            home: "string",
            maleFemale:"/image/background/artPaper4.jpg"
        };
      }else if (this.themeName === "BluePastel") {
        this.image = {
            cover: "image/background/artPaper6.jpg",
            hero: "image/background/artPaper5.jpg",
            home: "string",
            maleFemale:"/image/background/flowerGreenIcon2.jpg",
            top:'/image/background/frame-tr.jpg',
            bottom:'/image/background/frame-bl.jpg'
        };
      } else {
        this.image = {
            cover: "string",
            hero: "string",
            home: "string",
            maleFemale:"/image/background/artPaper.jpg"

        };
      }
    }
  }
  