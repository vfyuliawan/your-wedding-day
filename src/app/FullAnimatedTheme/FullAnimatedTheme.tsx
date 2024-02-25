import ReactFullpage, { fullpageApi } from "@fullpage/react-fullpage";

import { useRef, useState } from "react";
import CoverView from "./Section/Cover/CoverView";
import { DocumentData } from "firebase/firestore";

interface FullPageInterface {
  details: DocumentData | undefined;
  getDetails: () => void;
  guest: string;
  idGuest: string;
}

const Fullpage = (props: FullPageInterface) => {
  const [enableVerticalScroll, setEnableVerticalScroll] = useState(true);

  const [coverVisible, setCoverVisible] = useState(true);
  const [visible, setVisible] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const handleCoverClick = () => {
    setCoverVisible(false);
    openInvitation();
    enableScroll();
  };
  const rootElement = (
    typeof window !== undefined ? document.documentElement : undefined
  ) as any;

  function enableScroll() {
    window.onscroll = function () {};
    rootElement.style.scrollBehavior = "smooth";
  }

  const openInvitation = () => {
    setVisible(true);
    setIsPlaying(true);
    audioRef?.current?.play().catch((error) => {
      console.error("Audio playback error:", error);
    });
  };

  const handleButtonClick = (fullpageApi: fullpageApi) => {
    if (enableVerticalScroll) {
      fullpageApi.moveSectionDown();
      // Disable vertical scrolling after the button is clicked
      setEnableVerticalScroll(false);
    }
  };

  return (
    <>
      <link
        rel="stylesheet"
        href={`/ThemeStyle/${props?.details?.ThemeName}/assets/css/style.css`}
      />

      <CoverView
        hero={props?.details?.Hero}
        guest={props.guest}
        isVisible={coverVisible}
        onCoverClick={handleCoverClick}
        detailCover={props?.details?.Cover}
        themeName={props.details?.ThemeName}
      />
      <ReactFullpage
        credits={{ enabled: true, label: "", position: "right" }}
        scrollingSpeed={1000} // Set the scrolling speed
        scrollHorizontally={true} // Enable horizontal scrolling
        scrollHorizontallyKey={"YOUR KEY HERE"} // Replace with your key for horizontal scrolling
        verticalCentered={true}
        render={({ state, fullpageApi }) => {
          return (
            <ReactFullpage.Wrapper>
              <section className="section">
                <p>Section 1 (welcome to fullpage.js)</p>
                <button onClick={() => handleButtonClick(fullpageApi)}>
                  Open
                </button>
              </section>
              <section className="section">
                <p>Section 2</p>
              </section>
            </ReactFullpage.Wrapper>
          );
        }}
        // Callback to enable vertical scrolling after the section transition is complete
        afterLoad={(origin, destination, direction) => {
          if (direction === "down") {
            setEnableVerticalScroll(true);
          }
        }}
      />
    </>
  );
};

export default Fullpage;
