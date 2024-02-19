import { forwardRef } from "react";

interface HeaderViewInterface {
  themeName :string;
}

const HeaderView = (props : HeaderViewInterface) => {
  return (
    <>
      <meta charSet="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Fulan &amp; Fulana Weding</title>
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
      <link rel="stylesheet" href={`/ThemeStyle/${props.themeName}/assets/css/style.css`} />
    </>
  );
};

export default HeaderView;
