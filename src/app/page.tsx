"use client";

import Image from "next/image";
import { useRouter } from "next/router";
import { usePathname, useSearchParams } from "next/navigation";
import Service from "./services/Service";
import { useEffect, useState } from "react";
import { app } from "./api/firebase";

import {
  CollectionReference,
  DocumentData,
  Query,
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "firebase/firestore";
import Swal from "sweetalert2";
import ReactLoading from "react-loading";
import FloralTheme from "./FloralTheme/FloralTheme";
import FullPageTheme from "./FullAnimatedTheme/FullPageTheme";
import React from "react";
import { ResultDetailSlug } from "./Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import DetailSlugRepository from "./Dashboard/Domain/Repository/DetailSlugRepository/DetailSlugRepository";
import MessageService from "./Dashboard/Domain/Service/MessageService/MessageService";
import { MessagesRequest } from "./Dashboard/Domain/Models/ModelResponse/ModalResponseMessage/ModelResponseGetMessage";
import {
  BrowserView,
  MobileView,
  isBrowser,
  isMobile,
} from "react-device-detect";
import Head from "next/head";
import RedEssence from "./LuxuryTheme/RedEssence";
import RomanticDark from "./LuxuryTheme/RomanticDark";
export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const getParams = searchParams?.get("a");
  const getIsTemplate = searchParams?.get("ex")?.includes("true");
  const getGuest = searchParams?.get("to");
  const getIdGuest = searchParams?.get("id");
  const [themeName, setThemeName] = useState("");
  const [guest, setGuest] = useState<string>("");
  const [idGuest, setidGuest] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<ResultDetailSlug | undefined>();
  const [homePage, setHomePage] = useState(false);
  const [message, setMessage] = useState<MessagesRequest[]>([]);

  const getThemeBySlug = async () => {
    setLoading(true);
    const res = await DetailSlugRepository.getDeatailBySlug({
      slug: getParams ?? "",
    });
    if (res != null) {
      setDetails(res.result);
      setThemeName(res.result.theme.theme.themeName);
      setGuest(getGuest ?? "");
      setidGuest(getIdGuest ?? "");
      setTimeout(() => {
        setLoading(false);
      }, 2000);
      return res;
    }
  };

  useEffect(() => {
    if (loading) {
      document.body.style.overflowY = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflowY = "auto"; // Re-enable scrolling
    }
    return () => {
      document.body.style.overflowY = "auto"; // Cleanup to ensure no overflow issues
    };
  }, [loading]);

  const getMessage = async (id: string) => {
    const res = await MessageService.getMessage({
      projectId: id,
    });
    if (res != null) {
      setMessage(res.result.messagesRequest);
    }
  };

  const postMessage = async (name: string, text: string, present: string) => {
    try {
      const res = await MessageService.postMessage(
        {
          idProject: details!.id,
        },
        {
          name: name,
          present: present,
          text: text,
        }
      );
      if (res != null) {
        getMessage(details!.id);
      }
    } catch (error) {
      Swal.fire();
      throw error;
    }
  };

  useEffect(() => {
    if (getParams !== null) {
      getThemeBySlug().then((res) => {
        getMessage(res!.result!.id);
      });
    } else {
      setHomePage(true);
    }
    return () => {};
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" type="image/png" href="/LogoNM.png" />
      </Head>
      {loading ? (
        <Loading />
      ) : themeName == "RedEssence" ? (
        <>
          <BrowserView>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <div
                style={{ width: "70%", height: "100vh", overflow: "hidden" }}
              >
                <img
                  className="kenburns-top"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center ",

                    width: "100%",
                    height: "100%",
                  }}
                  src={details?.cover.img}
                  alt="dfasdfsa"
                />
              </div>
              <div style={{ width: "30%", height: "100vh", overflowY: "auto" }}>
                <RedEssence
                  setDetails={setDetails}
                  getIsTemplate={getIsTemplate}
                  message={message}
                  setMessage={setMessage}
                  details={details}
                  postMessage={postMessage}
                  guest={guest}
                  idGuest={idGuest}
                  getParams={getParams}
                />
              </div>
            </div>
          </BrowserView>
          <MobileView>
            <div style={{ width: "100%", height: "100vh", overflowY: "auto" }}>
              <RedEssence
                setDetails={setDetails}
                getIsTemplate={getIsTemplate}
                message={message}
                setMessage={setMessage}
                details={details}
                postMessage={postMessage}
                guest={guest}
                idGuest={idGuest}
                getParams={getParams}
              />
            </div>
          </MobileView>
        </>
      ) : themeName == "Romantic Dark" ? (
        <>
          <BrowserView>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                height: "100vh",
                overflow: "hidden",
              }}
            >
              <div
                style={{ width: "70%", height: "100vh", overflow: "hidden" }}
              >
                <img
                  className="kenburns-top"
                  style={{
                    objectFit: "cover",
                    objectPosition: "center ",

                    width: "100%",
                    height: "100%",
                  }}
                  src={details?.cover.img}
                  alt="dfasdfsa"
                />
              </div>
              <div style={{ width: "30%", height: "100vh", overflowY: "auto" }}>
                <RomanticDark
                  setDetails={setDetails}
                  getIsTemplate={getIsTemplate}
                  message={message}
                  setMessage={setMessage}
                  details={details}
                  postMessage={postMessage}
                  guest={guest}
                  idGuest={idGuest}
                  getParams={getParams}
                />
              </div>
            </div>
          </BrowserView>
          <MobileView>
            <div style={{ width: "100%", height: "100vh", overflowY: "auto" }}>
              <RomanticDark
                setDetails={setDetails}
                getIsTemplate={getIsTemplate}
                message={message}
                setMessage={setMessage}
                details={details}
                postMessage={postMessage}
                guest={guest}
                idGuest={idGuest}
                getParams={getParams}
              />
            </div>
          </MobileView>
        </>
      ) : themeName == "BluePremium" ? (
        <RedEssence
          message={message}
          setDetails={setDetails}

          setMessage={setMessage}
          details={details}
          postMessage={postMessage}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "LuxuryCream" ? (
        <RedEssence
        setDetails={setDetails}

          message={message}
          setMessage={setMessage}
          details={details}
          postMessage={postMessage}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "LuxuryGreen" ? (
        <RedEssence
        setDetails={setDetails}

          message={message}
          setMessage={setMessage}
          details={details}
          postMessage={postMessage}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "LuxuryPink" ? (
        <RedEssence
        setDetails={setDetails}

          message={message}
          setMessage={setMessage}
          details={details}
          postMessage={postMessage}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "GreenFloral" ? (
        <FloralTheme
          details={details}
          getDetails={() => {
            // getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "DarkGreenFloral" ? (
        <FloralTheme
          details={details}
          getDetails={() => {
            // getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "BlueFloral" ? (
        <FloralTheme
          details={details}
          getDetails={() => {
            // getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "BluePastel" ? (
        <FullPageTheme
          details={details}
          getDetails={() => {
            // getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "BlueAnimatedFloral" ? (
        <FullPageTheme
          details={details}
          getDetails={() => {
            // getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "CoklatAnimatedFloral" ? (
        <FullPageTheme
          details={details}
          getDetails={() => {
            // getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "JavaStyle1" ? (
        <FullPageTheme
          details={details}
          getDetails={() => {
            // getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : homePage ? (
        <h1>Home</h1>
      ) : (
        <Loading />
      )}
    </>
  );

  function NotFound() {
    return (
      <div
        className=" justify-content-center align-items-center d-flex"
        style={{ height: "100vh" }}
      >
        <img
          src="/pink-essence/img/notFound.jpg"
          style={{ objectFit: "cover", width: "100%", height: "100vh" }}
          alt=""
        />
      </div>
    );
  }

  function Loading() {
    return (
      <div
        style={{
          overflow: "hidden", // Disable both vertical and horizontal scrolling
          height: "100vh", // Ensures the div takes up the full viewport height
        }}
      >
        <link rel="stylesheet" href="/pink-essence/assets/css/style.css" />
        <link rel="icon" type="image/x-icon" href="/LogoNM.png" />

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#3A8891",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: "120px",
              }}
              src="/pink-essence/img/LogoNM.png"
              alt=""
            />
            <ReactLoading
              type={"spinningBubbles"}
              color={"#e3b383"}
              height={160}
              width={40}
            />
          </div>
        </div>
      </div>
    );
  }

  function Loading2() {
    return (
      <div
        style={{
          overflow: "hidden", // Disable both vertical and horizontal scrolling
          height: "100vh", // Ensures the div takes up the full viewport height
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            height: "100vh",
            backgroundColor: "#3A8891",
            alignItems: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              style={{
                height: "120px",
              }}
              src="/pink-essence/img/LogoNM.png"
              alt=""
            />
            <ReactLoading
              type={"spinningBubbles"}
              color={"#e3b383"}
              height={160}
              width={40}
            />
          </div>
        </div>
      </div>
    );
  }
}
