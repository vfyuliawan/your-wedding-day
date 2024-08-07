interface KeyValueTheme {
  key: string;
  val: string;
}

// "RedEssence",
// "BluePremium",
// "LuxuryCream",
// "LuxuryGreen",
// "LuxuryPink",
// "GreenFloral",
// "DarkGreenFloral",
// "BlueFloral",
// "BluePastel",
// "BlueAnimatedFloral",
// "CoklatAnimatedFloral",
// "JavaStyle1"

class Constanta {
  constructor() {}

  public listTheme: KeyValueTheme[] = [
    {
      key: "RedEssence",
      val: "Red Essence",
    },
    {
      key: "BluePremium",
      val: "Blue Essence",
    },
    {
      key: "LuxuryCream",
      val: "Luxury Cream",
    },
    {
      key: "LuxuryGreen",
      val: "Luxury Green",
    },

    {
      key: "LuxuryPink",
      val: "Luxury Pink",
    },
    {
      key: "GreenFloral",
      val: "Green Floral",
    },
    {
      key: "DarkGreenFloral",
      val: "Dark Green Floral",
    },
    {
      key: "BlueFloral",
      val: "Blue Floral",
    },
    {
      key: "BluePastel",
      val: "BluePastel",
    },
    {
      key: "BlueAnimatedFloral",
      val: "Blue Animated Floral",
    },
    {
      key: "CoklatAnimatedFloral",
      val: "Coklat Animated Floral",
    },
    {
      key: "JavaStyle1",
      val: "Java Style 1",
    },
  ];
}

export default new Constanta();
