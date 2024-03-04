export class ThemeColorClass {
  private themeName: string;
  public color!: {
    primary: string;
    secondary: string;
    textColor: string;
    textColor2: string;
  };

  constructor(themeName: string) {
    this.themeName = themeName;
    this.initializeColor();
  }

  private initializeColor(): void {
    // console.log(this.themeName);

    if (this.themeName === "GreenFloral") {
      this.color = {
        primary: "#5F7161",
        secondary: "#845A27",
        textColor: "#85865F",
        textColor2: "#8FA6AC",
      };
    } else if (this.themeName === "DarkGreenFloral") {
      this.color = {
        primary: "#5F7161",
        secondary: "#647352",
        textColor: "#85865F",
        textColor2: "#8FA6AC",
      };
    } else if (this.themeName === "BlueFloral") {
      this.color = {
        primary: "#AFAFAF",
        secondary: "#4392d7",
        textColor: "#4392d7",
        textColor2: "#4392d7",
      };
    } else if (this.themeName === "BluePastel") {      
      this.color = {
        primary: "#fcf4e8",
        secondary: "#116A7B",
        textColor: "#ffff",
        textColor2: "#fcf4e8",
      };
    }else if (this.themeName === "BlueAnimatedFloral") {      
      this.color = {
        primary: "#fcf4e8",
        secondary: "#2b3c5a",
        textColor: "#ffff",
        textColor2: "#fcf4e8",
      };
    } else {
      this.color = {
        primary: "#000000",
        secondary: "#000000",
        textColor: "#000000",
        textColor2: "#000000",
      };
    }
  }
}
