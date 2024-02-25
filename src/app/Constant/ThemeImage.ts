
export class ThemeImageClass {
    private themeName: string;
    public image!: {
      cover: string,
      hero: string,
      home: string,
      maleFemale: string,
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
            cover: "image/background/artPaper5.jpg",
            hero: "image/background/artPaper4.jpg",
            home: "string",
            maleFemale:"/image/background/artPaper4.jpg"
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
  