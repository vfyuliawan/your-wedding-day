'use client'

import { useAnimation } from "framer-motion";
import { LegacyRef, MutableRefObject, forwardRef, useRef } from "react";
import useIntersectionObserver from "../UseInterSectionObserver/UseInterSectionObserver";
import HeaderView from '../Header/HeaderView';
import { HeroViewInterface } from "./HeroModel";
import { TimeConversionTime, TimeConvertionDate, TimeConvertionInterface } from '../../../utils/TimeConvertion';


const HeroView = forwardRef<HTMLDivElement, HeroViewInterface>((props, ref) => {
  // const { headerProps } = props;

  return (
    <>
      <section
      ref={ref}
        id="hero"
        style={{height:'100vh'}}
        className="hero w-100 text-center d-flex justify-content-center align-items-center text-white position-relative"
      >
         <div
          className="background-overlay"
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            backgroundImage: `url(${props?.HeroDetail?.HeroImg})`,
            filter: 'grayscale(100%)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <main className="inside" style={{display:'flex', flexDirection:'column', position:'relative', bottom:-150}}>
          <h1 style={{fontFamily:'brilon'}}>{props.HeroDetail.HeroTittle}</h1>
          <h4>  {TimeConvertionDate(props?.HeroDetail?.HeroDate as TimeConvertionInterface).dateFull}</h4>
        </main>
        <div className="gradient-overlay" />

      </section>
    </>
  );
});

export default HeroView;
