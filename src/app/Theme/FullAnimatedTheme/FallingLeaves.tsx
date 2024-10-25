import React from 'react';

const FallingLeaves = () => {
  const numLeaves = 30; // Jumlah total daun
  const leaves = [];

  // Generate daun dengan posisi dan penundaan acak
  for (let i = 1; i <= numLeaves; i++) {
    const style = {
      left: `${Math.random() * 100}%`, // Posisi horizontal acak
      animationDelay: `-${Math.random() * 20}s`, // Penundaan animasi acak
    };
    leaves.push(<div key={i} className={`leaf leaf${i}`} style={style}></div>);
  }

  return <div className="falling-leaves-container" style={{opacity:0.7}}>{leaves}</div>;
};

export default FallingLeaves;
