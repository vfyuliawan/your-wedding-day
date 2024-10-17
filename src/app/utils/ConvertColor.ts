export const convertColor = (hex: any) => {
    // Convert 0xFF8E0707 (ARGB) to #RRGGBB format
    const argb = hex.toString(16).slice(2); // Remove the '0x'
    const rgb = `#${argb.substring(2)}`; // Extract RRGGBB from AARRGGBB
    console.log(rgb, "cek color");
    
    return rgb;
  };
  