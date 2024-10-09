"use client";

import Image from "next/image";
import PinkEssence from "./LuxuryTheme/LuxuryTheme";
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
import LuxuryTheme from "./LuxuryTheme/LuxuryTheme";
import ReactLoading from "react-loading";
import FloralTheme from "./FloralTheme/FloralTheme";
import FullPageTheme from "./FullAnimatedTheme/FullPageTheme";
import React from "react";
import { ResultDetailSlug } from "./Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import DetailSlugRepository from "./Dashboard/Domain/Repository/DetailSlugRepository/DetailSlugRepository";
import MessageService from "./Dashboard/Domain/Service/MessageService/MessageService";
import { MessagesRequest } from "./Dashboard/Domain/Models/ModelResponse/ModalResponseMessage/ModelResponseGetMessage";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const getParams = searchParams?.get("a");
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
      setThemeName(res.result.theme.theme);
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
      {loading ? (
        <Loading />
      ) : themeName == "RedEssence" ? (
        <LuxuryTheme
          message={message}
          setMessage={setMessage}
          details={details}
          postMessage={postMessage}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "BluePremium" ? (
        <LuxuryTheme
          message={message}
          setMessage={setMessage}
          details={details}
          postMessage={postMessage}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "LuxuryCream" ? (
        <LuxuryTheme
          message={message}
          setMessage={setMessage}
          details={details}
          postMessage={postMessage}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "LuxuryGreen" ? (
        <LuxuryTheme
          message={message}
          setMessage={setMessage}
          details={details}
          postMessage={postMessage}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "LuxuryPink" ? (
        <LuxuryTheme
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
