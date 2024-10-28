import { IConstantFont } from "@/app/Utils/ConstantFont";
import React, { useEffect, useRef, useState } from "react";

const CustomNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<any>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event:any) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav
    ref={navRef}
      className="navbar navbar-expand-md sticky-top mynavbar"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "1rem 0.5rem",
        backgroundColor: "red",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
      }}
    >
      {/* Logo */}
      <div style={{display:"flex", flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
      <div
        style={{
          height: 35,
          width: 35,
          borderRadius: 8,
          backgroundColor: "#E3B480",
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontFamily: "cursive",
          fontWeight:"bold"
        }}
      >
        Nm<br/>
        {/* <span style={{fontSize:2, fontFamily:"serif"}}>Digital Wedding</span> */}
      </div>
      <a
        style={{
          fontFamily: "Maven Pro",
          fontWeight: "bold",
          fontSize:24,
          marginLeft:8,
          color: "var(--main)",
        }}
        href="/"
        className="navbar-brand"
      >
        Nvite Me
      </a>
      </div>
   

      {/* Menu items */}
      <div
        style={{
          display: "flex",
          gap: "1rem",
          alignItems: "center",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: isOpen ? "flex" : "none",
            flexDirection: "column",
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            opacity:0.9,
            backgroundColor: "var(--main)",
            padding: "1rem 0",
            zIndex: 1,
          }}
        >
           <a
           onClick={()=>{
            setIsOpen(false)
           }}
            href="#home"
            style={{
              padding: "0.5rem 2rem",
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Home
          </a>
          <div style={{width:"100%", height:1, backgroundColor:"white", opacity:0.3}}/>
          <a
          onClick={()=>{
            setIsOpen(false)
          }}
            href="#design"
            style={{
              padding: "0.5rem 2rem",
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Preset/Design
          </a>
          <div style={{width:"100%", height:1, backgroundColor:"white", opacity:0.3}}/>
          
          <a
          onClick={()=>{
            setIsOpen(false)
          }}
            href="#testimoni"
            style={{
              padding: "0.5rem 2rem",
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Testimoni
          </a>
          <div style={{width:"100%", height:1, backgroundColor:"white", opacity:0.3}}/>

          <a
          onClick={()=>{
            setIsOpen(false)
          }}
            href="#fiture"
            style={{
              padding: "0.5rem 2rem",
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Fiture
          </a>
          <div style={{width:"100%", height:1, backgroundColor:"white", opacity:0.3}}/>

          <a
          onClick={()=>{
            setIsOpen(false)
          }}
            href="#tutorial"
            style={{
              padding: "0.5rem 2rem",
              color: "white",
              textDecoration: "none",
              fontSize: "1rem",
            }}
          >
            Cara Order
          </a>
        </div>
      </div>

      {/* Menu icon for mobile */}
      <div
        onClick={toggleMenu}
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-around",
          width: "24px",
          height: "24px",
          cursor: "pointer",
          alignItems: "center",
          padding: "0.25rem",
          marginRight: "1rem",
        }}
      >
        <span
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "black",
          }}
        />
        <span
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "black",
          }}
        />
        <span
          style={{
            width: "100%",
            height: "2px",
            backgroundColor: "black",
          }}
        />
      </div>
    </nav>
  );
};

export default CustomNavbar;
