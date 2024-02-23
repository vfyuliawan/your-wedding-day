
export class ThemeImageClass {
    private themeName: string;
    public image!: {
      cover: string,
      hero: string,
      home: string,
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
        };
      }else if (this.themeName === "DarkGreenFloral") {
        this.image = {
            cover: "image/background/floralVertical.jpg",
            hero: "image/background/floralVertical.jpg",
            home: "string",
        };
      }else if (this.themeName === "BlueFloral") {
        this.image = {
            cover: "image/background/BlueFloral.jpg",
            hero: "image/background/BlueFloral.jpg",
            home: "string",
        };
      } else {
        this.image = {
            cover: "string",
            hero: "string",
            home: "string",
        };
      }
    }
  }
  