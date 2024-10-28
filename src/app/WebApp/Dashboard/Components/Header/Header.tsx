import React, { MutableRefObject } from "react";
import { forwardRef } from "react";
import Head from "next/head";

const HeaderDashboard = () => {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Invite Me Wedding</title> {/* Favicon Link */}
        <link rel="icon" type="image/x-icon" href="/LogoNM.png" />
        <meta name="description" content="Create beautiful, personalized digital wedding invitations effortlessly with our web application. Customize designs, manage RSVPs, and share your special day with friends and family in a modern, eco-friendly way." />
        <meta name="keywords" content="nvite-me, invite me, digital wedding invitations, online wedding invitations, wedding e-invitations, digital RSVP, personalized wedding invites, eco-friendly wedding invitations, wedding invitation maker, custom wedding invitations, RSVP management, digital save the date, virtual wedding invitations, nvite-me app, wedding invite designer" />
        <link rel="canonical" href="https://nvite-me.com/" />
      </Head>

      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"
        crossOrigin="anonymous"
      />
      {/* FONT */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        href="https://fonts.googleapis.com/css2?family=Sacramento&family=Work+Sans:ital,wght@0,100;0,300;0,600;1,100;1,600&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Belleza&family=Delius+Swash+Caps&family=Forum&family=Homemade+Apple&family=Lavishly+Yours&family=Monsieur+La+Doulaise&family=Parisienne&family=Playwrite+GB+S:ital,wght@0,100..400;1,100..400&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      {/* FONT */}
      {/* simplycountdown */}
      <link
        rel="stylesheet"
        href="/pink-essence/assets/css/simplyCountdown.theme.default.css"
      />
      <script src="/pink-essence/assets/js"></script>
      {/* icon bootstarap */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
      {/* AOS */}
      {/* <link rel="stylesheet" href="/pink-essence/assets/css/style.css" /> */}
      {/* <link rel="stylesheet" href="/pink-essence/assets/css/style.css" /> */}
      {/* <link rel="stylesheet" href={`/ThemeStyle/${props.themeName}/assets/css/style.css`} /> */}
      <link rel="stylesheet" href={`/Global/style-v2.css`} />
    </>
  );
};

export default HeaderDashboard;
