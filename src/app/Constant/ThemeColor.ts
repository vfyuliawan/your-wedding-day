
export class ThemeColorClass {
  private themeName: string;
  public color!: {
    primary: string,
    secondary: string,
    textColor: string,
    textColor2: string,
  };

  constructor(themeName: string) {
    this.themeName = themeName;
    this.initializeColor();
  }

  private initializeColor(): void {
    if (this.themeName === "GreenFloral") {
      this.color = {
        primary: "#5F7161",
        secondary: "#845A27",
        textColor: "#85865F",
        textColor2: "#8FA6AC",
      };
    }else if (this.themeName === "DarkGreenFloral") {
      this.color = {
        primary: "#5F7161",
        secondary: "#647352",
        textColor: "#85865F",
        textColor2: "#8FA6AC",
      };
    }else if (this.themeName === "BlueFloral") {
      this.color = {
        primary: "#AFAFAF",
        secondary: "#4392d7",
        textColor: "#4392d7",
        textColor2: "#4392d7",
      };
    }  else {
      this.color = {
        primary: "#000000",
        secondary: "#000000",
        textColor: "#000000",
        textColor2: "#000000",
      };
    }
  }
}