"use client";

import Image from "next/image";
import styles from "./page.module.css";
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
import Dashboard from "./Dashboard/Dashboard";

export default function Home() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const getParams = searchParams.get("a");
  const getGuest = searchParams.get("to");
  const getIdGuest = searchParams.get("id");
  const [themeName, setThemeName] = useState("");
  const [guest, setGuest] = useState<string>("");
  const [idGuest, setidGuest] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const [details, setDetails] = useState<DocumentData | undefined>();
  const [homePage, setHomePage] = useState(false);

  const getTheme = async () => {
    setLoading(true);
    const res = await Service.GET({
      collectionName: "UserId",
      queryGet: function (
        queryGet: CollectionReference<DocumentData, DocumentData>
      ): Query<DocumentData, DocumentData> {
        const nameQuery = query(queryGet, where("Slug", "==", getParams));
        return nameQuery;
      },
    });
    if (res?.length ?? 0 > 0) {
      setDetails(res?.[0]);
      setThemeName(res?.[0].ThemeName);
      setGuest(getGuest ?? "");
      setidGuest(getIdGuest ?? "");
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };

  const getMessage = async () => {
    console.log("run");
    const res = await Service.GET({
      collectionName: "UserId",
      queryGet: function (
        queryGet: CollectionReference<DocumentData, DocumentData>
      ): Query<DocumentData, DocumentData> {
        const nameQuery = query(queryGet, where("Slug", "==", getParams));
        return nameQuery;
      },
    });
    if (res?.length ?? 0 > 0) {
      setDetails(res?.[0]);
      setThemeName(res?.[0].ThemeName);
    }
  };

  useEffect(() => {
    if (getParams !== null) {
      getTheme();
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
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "BluePremium" ? (
        <LuxuryTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "LuxuryCream" ? (
        <LuxuryTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "LuxuryGreen" ? (
        <LuxuryTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "LuxuryPink" ? (
        <LuxuryTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "GreenFloral" ? (
        <FloralTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "DarkGreenFloral" ? (
        <FloralTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "BlueFloral" ? (
        <FloralTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "BluePastel" ? (
        <FullPageTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "BlueAnimatedFloral" ? (
        <FullPageTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : themeName == "CoklatAnimatedFloral" ? (
        <FullPageTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ): themeName == "JavaStyle1" ? (
        <FullPageTheme
          details={details}
          getDetails={() => {
            getMessage();
          }}
          guest={guest}
          idGuest={idGuest}
        />
      ) : homePage ? (
        <Dashboard />
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
      <>
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
              // className="shake-bl"
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
      </>
    );
  }
}
