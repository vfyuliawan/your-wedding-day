export const convertColor = (hex: any) => {
    // Convert 0xFF8E0707 (ARGB) to #RRGGBB format
    const argb = hex.toString(16).slice(2); // Remove the '0x'
    const rgb = `#${argb.substring(2)}`; // Extract RRGGBB from AARRGGBB
    console.log(rgb, "cek color");
    
    return rgb;
  };

 export function hexToRgba(hex:any, alpha : number) {
    // Remove the hash at the start if it's there
    hex = hex.replace(/^#/, '');
  
    // Parse the r, g, b values from the hex string
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
  
    // Return the rgba string
    console.log( `rgba(${r}, ${g}, ${b}, ${alpha})`);
    
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }
  