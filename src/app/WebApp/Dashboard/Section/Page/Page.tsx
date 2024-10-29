import React, { useState, useEffect } from "react";
import MyprojectService from "../../Domain/Service/MyprojectService/MyprojectService";
import { ModelMyprojectRequestInterface } from "../../Domain/Models/ModelRequest/MyprojectRequest/ModelMyprojectRequestInterface";
import { ProjectModelMyprojectResponseInterface } from "../../Domain/Models/ModelResponse/MyprojectResponse/ModelMyprojectResponseInterface";
import CekUserLoginService from "../../Domain/Service/CekUserLoginService/CekUserLoginService";
import Link from "next/link";
import LogoutService from "../../Domain/Service/LogoutService/LogoutService";
import ReactLoading from "react-loading";
import { useMediaQuery } from "react-responsive";

import { useRouter } from "next/navigation";
import useLayout from "@/app/WebApp/utils/useLayout";
import { IConstantFont } from "@/app/Utils/ConstantFont";
import { Slide } from "react-slideshow-image";
import CustomNavbar from "../../Components/Navbar/ICustomNavbar";
import { isMobile } from "react-device-detect";

interface DataPresetInterface {
  title: string;
  img: string;
  href: string;
  onHover: boolean;
}

const DashboardPage = () => {
  const [token, setToken] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(0);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [searchQueary, setSearchQueary] = useState("");
  const [data, setData] = useState<ProjectModelMyprojectResponseInterface[]>(
    []
  );
  const [totalPages, setTotalPages] = useState<number>(0);
  const router = useRouter();
  const [isLoading, setisLoading] = useState(false);
  const [isLoadingMain, setisLoadingMain] = useState(false);

  const [isHovered, setIsHovered] = useState(false);

  const layout = useLayout();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setisLoadingMain(true);
      setToken(storedToken);
      checkUserLogin();
      handleGetMyProjects(page, 5, "");
    }
  }, []);

  const checkUserLogin = async () => {
    try {
      const serviceCheckUserLogin =
        await CekUserLoginService.cekUserLoginService();
      if (serviceCheckUserLogin?.result == true) {
        setIsUserLoggedIn(true);
        setisLoadingMain(false);
      } else {
        await localStorage.removeItem("token");
        router.push("/");
      }
    } catch (error) {
      console.error("check User Login error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  const dataPresetTheme: DataPresetInterface[] = [
    {
      title: "Soft Magnoli",
      img: "/image/themeIcon/SoftMagnoli.png",
      href: "?a=template-3&to=cang&ex=true",
      onHover: false,
    },
    {
      title: "Jade Garden",
      img: "/image/themeIcon/JadeGarden.png",
      href: "?a=template-2&to=cang&ex=true",
      onHover: false,
    },
    {
      title: "Auntum Wood",
      img: "/image/themeIcon/AuntumWoods.png",
      href: "?a=template-5&to=cang&ex=true",
      onHover: false,
    },
    {
      title: "Ruby RedVelvet",
      img: "/image/themeIcon/RedEssence.png",
      href: "?a=template-5&to=cang&ex=true",
      onHover: false,
    },
    
  ];

  const [dataPresetState, setdataPresetState] =
    useState<DataPresetInterface[]>(dataPresetTheme);

  const dataReserve = [
    {
      title: "1. Pilih paket",
      desc: "Pilih paket yang sesuai dengan anda",
      icon: "bi bi-card-list",
    },
    {
      title: "2. Payment",
      desc: "Pilih methode pembayaran, lakukan pembayaran",
      icon: "bi bi-cash-coin",
    },
    {
      title: "3. Isi Data Form ",
      desc: " Isi Data Form Info Pernikahan & Foto yang anda inginkan tidak sampai hitungan jam sudah jadi",
      icon: "bi bi-clipboard-check",
    },
    {
      title: "4.Revisi sesuai keinginan anda",
      desc: "Download dan Review design anda lalu edit sesuai keinginan",
      icon: "bi bi-images",
    },
    {
      title: "5. Shere Undangan anda ",
      desc: "Shere undandan anda baik secara manual maupun menggunakan Aplikasi (jika mengaktifkan barcode tamu)",
      icon: "bi bi-send",
    },
  ];

  const dataFiture = [
    {
      title: "Elegant & Responsive Design",
      desc: "Design yang elegan dengan berbagai macam tema",
      icon: "bi bi-brush",
    },
    {
      title: "Bagikan dengan nama tamu",
      desc: "Sebarkan langsung ke tamu undangan anda tanpa batas",
      icon: "bi bi-list-ol",
    },
    {
      title: "Hitungan Mundur",
      desc: "Jangan sampai terlewatkan moment acara kamu, hitung mundur acara pernikahan",
      icon: "bi bi-clipboard-check",
    },
    {
      title: "Daftar hadir Tamu",
      desc: "Dilengkapi dengan fitur daftar hadir tamu, cukup download aplikasi nviteme di playsotre, dan scann tamu yang hadir di pager ayu",
      icon: "bi bi-qr-code-scan",
    },
    {
      title: "Music Backgorund",
      desc: "Kaya akan latar belakang music yang dapat kamu pilih sesuai lagu romantis kamu dengan pasangan",
      icon: "bi bi-music-note-beamed",
    },
    {
      title: "Galery Foto",
      desc: "Bagikan momoent foto bersama anda dangan slide show yang keren ",
      icon: "bi bi-images",
    },
    {
      title: "Amplop Digital",
      desc: "Untuk tamu yang berhalangan hadir, dapat mengirim  amplop secara digital dengan mudah",
      icon: "bi bi-envelope",
    },
    {
      title: "Navigasi Lokasi",
      desc: "All in one navigasi lengkap, agar para tamu tidak tersesat saat berkunjung ke acara pernikahan anda",
      icon: "bi bi-geo-alt-fill",
    },
    {
      title: "Love Story",
      desc: "Bagikan Love Story anda bersama pasangan anda ",
      icon: "bi bi-postage-heart",
    },
    {
      title: "Dashboard Editing",
      desc: "setelah memilih tema yang anda suka, anda dapat dengan mudah mennetukan warna, serta isi undnangan anda sesuaka hati dengan Dashboard yang keren dan mudah digunakan",
      icon: "bi bi-menu-app-fill",
    },
    {
      title: "Kirim Ucapan Doa",
      desc: "Untuk tamu dapat mengirimkan ucapan doa kepada ada dengan fiture RSVP Wishes, (tanpa biaya tambahan)",
      icon: "bi bi-envelope-paper-heart",
    },
    {
      title: "Akan Segera hadir (order backdrop)",
      desc: "Akan Segera Hadir pemesanan backdrop yang cantik dan menarik dengan harga yang sangat terjangkau",
      icon: "bi bi-camera2",
    },
  ];

  const dataCard = [
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://i.pinimg.com/originals/6f/d6/cf/6fd6cf47bea2b47652626631e07992ca.jpg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
      forGround:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa74CFVjCzpWack6IJPJ2KbfS9oD1r-mIxug&s",
    },
    {
      title: "First Launching ALL Thema Only 45.000",
      img: "/image/background/prewed2.jpeg",
      forGround:
        "https://media.licdn.com/dms/image/D4D12AQF6LEqH6sttpA/article-cover_image-shrink_720_1280/0/1661147946996?e=2147483647&v=beta&t=0eX483rU4IeOLzuf-gYoREbZbcZPi1qBK-GxS9aaReg",
    },
    {
      title: "Available On Playstore",
      img: "/image/background/prewed3.jpeg",
      forGround:
        "https://www.sammyfans.com/wp-content/uploads/2022/07/Google-Play-Store.jpg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
      forGround:
        "https://awsimages.detik.net.id/community/media/visual/2022/04/19/ucapan-idul-fitri-bahasa-inggris-lihat-infonya-di-sini_169.jpeg?w=1200",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://arina.id/images/post/16_9/kurban-akikah_1718061841.webp",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://i.pinimg.com/originals/6f/d6/cf/6fd6cf47bea2b47652626631e07992ca.jpg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
      forGround:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa74CFVjCzpWack6IJPJ2KbfS9oD1r-mIxug&s",
    },
    {
      title: "First Launching ALL Thema Only 45.000",
      img: "/image/background/prewed2.jpeg",
      forGround:
        "https://media.licdn.com/dms/image/D4D12AQF6LEqH6sttpA/article-cover_image-shrink_720_1280/0/1661147946996?e=2147483647&v=beta&t=0eX483rU4IeOLzuf-gYoREbZbcZPi1qBK-GxS9aaReg",
    },
    {
      title: "Available On Playstore",
      img: "/image/background/prewed3.jpeg",
      forGround:
        "https://www.sammyfans.com/wp-content/uploads/2022/07/Google-Play-Store.jpg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
      forGround:
        "https://awsimages.detik.net.id/community/media/visual/2022/04/19/ucapan-idul-fitri-bahasa-inggris-lihat-infonya-di-sini_169.jpeg?w=1200",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://arina.id/images/post/16_9/kurban-akikah_1718061841.webp",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://i.pinimg.com/originals/6f/d6/cf/6fd6cf47bea2b47652626631e07992ca.jpg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
      forGround:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa74CFVjCzpWack6IJPJ2KbfS9oD1r-mIxug&s",
    },
    {
      title: "First Launching ALL Thema Only 45.000",
      img: "/image/background/prewed2.jpeg",
      forGround:
        "https://media.licdn.com/dms/image/D4D12AQF6LEqH6sttpA/article-cover_image-shrink_720_1280/0/1661147946996?e=2147483647&v=beta&t=0eX483rU4IeOLzuf-gYoREbZbcZPi1qBK-GxS9aaReg",
    },
    {
      title: "Available On Playstore",
      img: "/image/background/prewed3.jpeg",
      forGround:
        "https://www.sammyfans.com/wp-content/uploads/2022/07/Google-Play-Store.jpg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
      forGround:
        "https://awsimages.detik.net.id/community/media/visual/2022/04/19/ucapan-idul-fitri-bahasa-inggris-lihat-infonya-di-sini_169.jpeg?w=1200",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://arina.id/images/post/16_9/kurban-akikah_1718061841.webp",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://i.pinimg.com/originals/6f/d6/cf/6fd6cf47bea2b47652626631e07992ca.jpg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
      forGround:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa74CFVjCzpWack6IJPJ2KbfS9oD1r-mIxug&s",
    },
    {
      title: "First Launching ALL Thema Only 45.000",
      img: "/image/background/prewed2.jpeg",
      forGround:
        "https://media.licdn.com/dms/image/D4D12AQF6LEqH6sttpA/article-cover_image-shrink_720_1280/0/1661147946996?e=2147483647&v=beta&t=0eX483rU4IeOLzuf-gYoREbZbcZPi1qBK-GxS9aaReg",
    },
    {
      title: "Available On Playstore",
      img: "/image/background/prewed3.jpeg",
      forGround:
        "https://www.sammyfans.com/wp-content/uploads/2022/07/Google-Play-Store.jpg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
      forGround:
        "https://awsimages.detik.net.id/community/media/visual/2022/04/19/ucapan-idul-fitri-bahasa-inggris-lihat-infonya-di-sini_169.jpeg?w=1200",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://arina.id/images/post/16_9/kurban-akikah_1718061841.webp",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://i.pinimg.com/originals/6f/d6/cf/6fd6cf47bea2b47652626631e07992ca.jpg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
      forGround:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa74CFVjCzpWack6IJPJ2KbfS9oD1r-mIxug&s",
    },
    {
      title: "First Launching ALL Thema Only 45.000",
      img: "/image/background/prewed2.jpeg",
      forGround:
        "https://media.licdn.com/dms/image/D4D12AQF6LEqH6sttpA/article-cover_image-shrink_720_1280/0/1661147946996?e=2147483647&v=beta&t=0eX483rU4IeOLzuf-gYoREbZbcZPi1qBK-GxS9aaReg",
    },
    {
      title: "Available On Playstore",
      img: "/image/background/prewed3.jpeg",
      forGround:
        "https://www.sammyfans.com/wp-content/uploads/2022/07/Google-Play-Store.jpg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
      forGround:
        "https://awsimages.detik.net.id/community/media/visual/2022/04/19/ucapan-idul-fitri-bahasa-inggris-lihat-infonya-di-sini_169.jpeg?w=1200",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://arina.id/images/post/16_9/kurban-akikah_1718061841.webp",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://i.pinimg.com/originals/6f/d6/cf/6fd6cf47bea2b47652626631e07992ca.jpg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
      forGround:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa74CFVjCzpWack6IJPJ2KbfS9oD1r-mIxug&s",
    },
    {
      title: "First Launching ALL Thema Only 45.000",
      img: "/image/background/prewed2.jpeg",
      forGround:
        "https://media.licdn.com/dms/image/D4D12AQF6LEqH6sttpA/article-cover_image-shrink_720_1280/0/1661147946996?e=2147483647&v=beta&t=0eX483rU4IeOLzuf-gYoREbZbcZPi1qBK-GxS9aaReg",
    },
    {
      title: "Available On Playstore",
      img: "/image/background/prewed3.jpeg",
      forGround:
        "https://www.sammyfans.com/wp-content/uploads/2022/07/Google-Play-Store.jpg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
      forGround:
        "https://awsimages.detik.net.id/community/media/visual/2022/04/19/ucapan-idul-fitri-bahasa-inggris-lihat-infonya-di-sini_169.jpeg?w=1200",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://arina.id/images/post/16_9/kurban-akikah_1718061841.webp",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://i.pinimg.com/originals/6f/d6/cf/6fd6cf47bea2b47652626631e07992ca.jpg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
      forGround:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa74CFVjCzpWack6IJPJ2KbfS9oD1r-mIxug&s",
    },
    {
      title: "First Launching ALL Thema Only 45.000",
      img: "/image/background/prewed2.jpeg",
      forGround:
        "https://media.licdn.com/dms/image/D4D12AQF6LEqH6sttpA/article-cover_image-shrink_720_1280/0/1661147946996?e=2147483647&v=beta&t=0eX483rU4IeOLzuf-gYoREbZbcZPi1qBK-GxS9aaReg",
    },
    {
      title: "Available On Playstore",
      img: "/image/background/prewed3.jpeg",
      forGround:
        "https://www.sammyfans.com/wp-content/uploads/2022/07/Google-Play-Store.jpg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
      forGround:
        "https://awsimages.detik.net.id/community/media/visual/2022/04/19/ucapan-idul-fitri-bahasa-inggris-lihat-infonya-di-sini_169.jpeg?w=1200",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://arina.id/images/post/16_9/kurban-akikah_1718061841.webp",
    },
    {
      title: "Filter Instagram Available",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://i.pinimg.com/originals/6f/d6/cf/6fd6cf47bea2b47652626631e07992ca.jpg",
    },
    {
      title: "Diskon Up To 30%",
      img: "/image/background/prewed1.jpeg",
      forGround:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa74CFVjCzpWack6IJPJ2KbfS9oD1r-mIxug&s",
    },
    {
      title: "First Launching ALL Thema Only 45.000",
      img: "/image/background/prewed2.jpeg",
      forGround:
        "https://media.licdn.com/dms/image/D4D12AQF6LEqH6sttpA/article-cover_image-shrink_720_1280/0/1661147946996?e=2147483647&v=beta&t=0eX483rU4IeOLzuf-gYoREbZbcZPi1qBK-GxS9aaReg",
    },
    {
      title: "Available On Playstore",
      img: "/image/background/prewed3.jpeg",
      forGround:
        "https://www.sammyfans.com/wp-content/uploads/2022/07/Google-Play-Store.jpg",
    },
    {
      title: "Promo Eid Al Fitri",
      img: "/image/background/prewed4.jpeg",
      forGround:
        "https://awsimages.detik.net.id/community/media/visual/2022/04/19/ucapan-idul-fitri-bahasa-inggris-lihat-infonya-di-sini_169.jpeg?w=1200",
    },
    {
      title: "Akikah dan Tasyakuran",
      img: "/image/background/prewed5.jpeg",
      forGround:
        "https://arina.id/images/post/16_9/kurban-akikah_1718061841.webp",
    },
  ];

  const handleNextPage = async () => {
    // setPage(page + 1);
    let nextPage = page + 1;
    setPage(nextPage);
    handleGetMyProjects(nextPage, 5, "");
  };
  const handlePreviousPage = async () => {
    let previousPage = page - 1;
    setPage(previousPage);
    handleGetMyProjects(previousPage, 5, "");
  };

  // const getIdForEdit = async (projectId: string) => {
  //   let projectParam = `projectId=${projectId}`;
  //   let keyEncrypt = new Cryptr("nViteMeKey");
  //   let encryptedProjectParam = keyEncrypt.encrypt(projectParam);
  //   window.location.href = `/content-setting?` + encryptedProjectParam;
  // };

  const getIdForEdit = async (projectId: string) => {
    router.push(`/content-setting?pi=${projectId}`);
  };
  const handleGetMyProjects = async (
    currentPage: number,
    size: number,
    title: string
  ) => {
    setisLoading(true);
    const requestParams: ModelMyprojectRequestInterface = {
      currentPage: currentPage,
      size: size,
      title: title,
    };
    try {
      const myprojectServices = await MyprojectService.myprojectService(
        requestParams
      );
      if (myprojectServices && myprojectServices.result?.projects) {
        console.log(myprojectServices.result.projects);

        setData(myprojectServices.result.projects);
        setTotalPages(myprojectServices.result.paging?.totalPage);
        setisLoading(false);
        // console.log("cekData", myprojectServices);
      } else {
        setError("Invalid credentials. Please try again.");
        setisLoading(false);
      }
    } catch (error) {
      console.error("Login error:", error);
      setisLoading(false);
    }
  };

  const [userContentFirst, setuserContentFirst] = useState(0);
  const [userContentSecond, setuserContentSecond] = useState(9);

  const toggleNext = () => {
    setuserContentFirst((prev) => prev + 9);
    setuserContentSecond((prev) => prev + 9);
  };

  const togglePrev = () => {
    if (userContentFirst != 0) {
      setuserContentFirst((prev) => prev - 9);
      setuserContentSecond((prev) => prev - 9);
    }
  };

  const handleLogout = async () => {
    // Clear token from localStorage

    const logoutService = await LogoutService.logoutService();

    try {
      if (logoutService?.result == true) {
        await localStorage.removeItem("token");
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again later.");
    }

  };

  return (
    <>
      {<CustomNavbar />}

      {token && isUserLoggedIn ? (
        <section className="home" id="home">
          <div className="container">
            <div className="col mb-3 d-flex justify-content-center">
              <h2>My Invitation</h2>
            </div>

            <div
              className="card justify-content-center"
              style={{
                // height: "80vh",
                boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                border: "none",
                borderRadius: "12px",
                padding: "10px",
              }}
            >
              {/* {" "} */}
              {/* <h2 style={{ textAlign: "center" }}>My Invitations List</h2> */}
              <div className="col d-flex justify-content-between">
                <Link
                  href="/create"
                  className="btn custom-btn login-btn custom-btn-bg custom-btn-link text-left"
                  style={{
                    marginLeft: "15px",
                    width: "135px",
                    //   marginBottom: "0px",
                  }}
                >
                  <i className="bi bi-pencil " /> Create
                </Link>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginRight: "15px",
                  }}
                >
                  <input
                    style={{
                      borderColor: "black",
                      borderRadius: 15,
                      paddingLeft: 5,
                      backgroundColor: "white",
                    }}
                    placeholder="   Search Your Project"
                    onChange={(val) => {
                      setSearchQueary(val.target.value);
                      setPage(0);
                    }}
                  />
                  <div style={{ width: 5 }}></div>
                  <button
                    onClick={() => {
                      handleGetMyProjects(page, 4, searchQueary);
                      console.log(totalPages);
                    }}
                    className="btn custom-btn login-btn custom-btn-bg custom-btn-link text-left"
                  >
                    {" "}
                    <i className="bi bi-search " />
                  </button>
                </div>
              </div>
              <div
                style={{
                  // height: '90vh',
                  paddingBottom: "30px",
                  boxShadow: "0 10px 20px rgba(0, 0, 0, 0.1)",
                  border: "none",
                  padding: "10px",
                }}
              >
                <table className="align-items-center ">
                  <thead>
                    <tr>
                      <th>No.</th>
                      <th>Title</th>
                      <th>Theme</th>
                      <th>Music</th>
                      <th>Create Date</th>
                      <th>Action</th>
                    </tr>
                  </thead>

                  {isLoading ? (
                    <tbody>
                      <tr>
                        <td colSpan={6} style={{ textAlign: "center" }}>
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                              height: "50px", 
                            }}
                          >
                            <ReactLoading
                              type={"spinningBubbles"}
                              color={"#116A7B"}
                              height={50}
                              width={50}
                            />
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  ) : (
                    <>
                      <tbody>
                        {data.length > 0 ? (
                          data.map((item, index) => (
                            <tr key={item.id}>
                              <td>{index + 1}</td>
                              {/* <td>{item.nameProject}</td> */}
                              <td>{item.title}</td>
                              <td>{item.theme.theme}</td>
                              <td>{item.theme.music}</td>
                              <td>
                                {new Date(item.date).toLocaleDateString(
                                  "en-GB",
                                  {
                                    day: "2-digit",
                                    month: "short",
                                    year: "numeric",
                                  }
                                )}{" "}
                                {new Date(item.date).toLocaleTimeString(
                                  "en-GB",
                                  {
                                    hour: "2-digit",
                                    minute: "2-digit",
                                  }
                                )}
                              </td>
                              <td>
                                <button
                                  name="Preview"
                                  className="btn btn btn-outline-info btn-sm"
                                  style={{ margin: "3px" }}
                                >
                                  <i className="bi bi-eye " />
                                </button>
                                <button
                                  className="btn btn btn-outline-success btn-sm"
                                  style={{ margin: "3px" }}
                                  onClick={() => getIdForEdit(item.id)}
                                >
                                  <i className="bi bi-pencil-square " />
                                </button>
                                {/* <button className="btn btn btn-outline-danger btn-sm"
                                                        style={{ margin: "3px" }}><i className="bi bi-trash " /></button> */}
                              </td>
                            </tr>
                          ))
                        ) : data.length == 0 ? (
                          <tr>
                            <td colSpan={6} style={{ textAlign: "center" }}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "center",
                                  alignItems: "center",
                                  height: "50px", // Height can be adjusted as needed
                                }}
                              >
                                <h4 style={{ color: "#116A7B" }}>
                                  Project Not Found
                                </h4>
                              </div>
                            </td>
                          </tr>
                        ) : null}
                      </tbody>
                      <tfoot>
                        <tr>
                          <td colSpan={7}>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                              }}
                            >
                              {page + 1 > 1 ? (
                                <button
                                  className="color-main btn btn-sm"
                                  onClick={handlePreviousPage}
                                >
                                  {"<< Previous Page"}
                                </button>
                              ) : (
                                // <>.</>
                                <div style={{ color: "white" }}></div>
                              )}
                              {page + 1 < totalPages ? (
                                <button
                                  className="color-main btn btn-sm"
                                  onClick={handleNextPage}
                                >
                                  {"Next Page >>"}
                                </button>
                              ) : (
                                <div style={{ color: "white" }}></div>
                              )}
                            </div>
                          </td>
                        </tr>
                      </tfoot>
                    </>
                  )}
                </table>
              </div>
            </div>
          </div>
        </section>
      ) : (
        SectionHero()
      )}
      {SectionCarousell()}

      {SectionUserReview()}
      {SectionFeature()}
      {SectionPreset()}

      {SectionTutorial()}

      {WhatsappButton()}

      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossOrigin="anonymous"
      ></script>
    </>
  );

  function SectionPreset() {


    function openWhatsAppRequest(themeName:string) {
      const whatsappUrl = `https://wa.me/6281283589073?text="Halo Admin Nviteme, Saya Ingin Membeli Thema ini ${themeName}"`;
      window.open(whatsappUrl)
    }

    return (
      <section style={{backgroundColor:"#f4f4f4"}} className="" id="design">
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-8 col-10 text-center mt-5">
              {/* <span>Memori kisah kami</span> */}
              <h3
                style={{
                  color: "var(--main)",
                  fontSize: 35,
                  fontFamily: IConstantFont.Belleza,
                }}
              >
                Preset &{" "}
                <span style={{ color: "pink", fontSize: 35 }}>Theme </span>
              </h3>
              <p style={{ fontSize: 14 }}>
                Pesan undangan dengan mudah, tanpa pake ribet, bisa isi form
                undangan sendiri atau di bantu oleh admin kami
              </p>
              <h2 style={{fontFamily:"serif", color:"red"}}>Buruan!! hanya 45 ribu bebas pilih Tema</h2>
            </div>
          </div>

          <div className="row justify-content-center mb-5">
            {dataPresetState.map((item, index) => (
              <div
                style={{}}
                className="col-12 col-md-4 justify-content-center d-flex mt-4"
              >
                <div
                  
                  onMouseEnter={() => {
                    setdataPresetState((prev) => {
                      const newState = [...prev];
                      newState[index] = { ...newState[index], onHover: true };
                      return newState;
                    });
                  }}
                  onMouseLeave={() => {
                    setdataPresetState((prev) => {
                      const newState = [...prev];
                      newState[index] = { ...newState[index], onHover: false };
                      return newState;
                    });
                  }}
                  onTouchStart={() => {
                    setdataPresetState((prev) => {
                      return prev.map((data, idx) => ({
                        ...data,
                        onHover: idx === index,
                      }));
                    });
                  }}
                  style={{
                    height: 225,
                    width: 460,
                    overflow: "hidden",
                    borderRadius: 20,
                    backgroundColor: "red",
                    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.3)",
                    position: "relative",
                    cursor: "pointer",
                  }}
                >
                  <img
                    src={item.img}
                    style={{ height: "100%", width: "100%" }}
                    alt=""
                  />

                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      backgroundColor: "rgba(0, 0, 0, 0.5)",
                      color: "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.5rem",
                      opacity: item.onHover ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}
                  >
                    <div className="row justify-content-center align-items-center text-center">
                      <p
                        style={{
                          color: "white",
                          fontSize: 24,
                          fontFamily: IConstantFont.Belleza,
                        }}
                      >
                        {item.title}
                      </p>
                      <div style={{display:"grid", justifyContent:"center"}}>
                      <button
                      onClick={() => {
                        window.open(item.href);
                      }}
                        style={{ opacity: 0.7, width:140, backgroundColor: "var(--main)", fontSize:12}}
                        className="btn mb-1 btn-dark"
                      >
                        <i className="bi bi-eye me-2"/>Perview
                      </button>

                      <button
                      onClick={() => {
                        openWhatsAppRequest(item.title)
                      }}
                        style={{ opacity: 0.7, width:140, backgroundColor: "var(--main)" ,  fontSize:12}}
                        className="btn mb-1 btn-dark"
                      >
                        <i className="bi bi-bag-check me-2"/>Pesan Langsung
                      </button>
                      </div>
                     
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function WhatsappButton() {
    const whatsappUrl = `https://wa.me/6281283589073?text="Halo Admin Nviteme, Saya Ingin Bertanya Terkait Pembuatan Undangan Digital"`;

    return (
      <button
        className="onPlay btn btn-dark text-center d-flex justify-content-center align-items-center"
        style={{
          position: "fixed",
          bottom: 50,
          right: "20px",
          border: "none",
          backgroundColor: "#008489",
          opacity: 1,
          height: 40,
          width: 110,
          borderRadius: 12,
          paddingLeft: 20,
          paddingRight: 20,
          color: "white",
          fontSize: 12,
          cursor: "pointer",
          zIndex: "999",
        }}
        onClick={() => {
          window.open(whatsappUrl);
        }}
      >
        <i
          className="bi bi-whatsapp"
          style={{
            fontSize: isMobile ? "1.2rem" : "1.5rem",
            color: "white",
            fontWeight: 900,
            marginRight: 8,
          }}
        />{" "}
        {"  "}Whatsapp
      </button>
    );
  }

  function navbarBootstrap() {
    return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Link
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Disabled
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  function SectionUserReview() {
    return (
      <section
        style={{
          position: "relative",
          height: "100vh",
        }}
        // className="project"
        id="testimoni"
      >
        <div
          style={{
            background: `url("/image/background/prewed5.jpeg") no-repeat center center`,
            backgroundSize: "cover",
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            opacity: 0.4,
            transition: "transform 0.5s ease", 
          }}
          className="responsive-rotate"
        />
        <div
          style={{
            backgroundColor: "var(--main3)",
            backgroundSize: "cover",
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            opacity: 0.6,
            transition: "transform 0.5s ease", 
          }}
          className="responsive-rotate"
        />
        <div
          style={{
            backgroundColor: "transparent",
            backgroundSize: "cover",
            position: "absolute",
            height: "100%",
            width: "100%",
            top: 0,
            left: 0,
            transition: "transform 0.5s ease", 
          }}
          className="responsive-rotate"
        >
          <div className="container">
            <div className="row justify-content-center">
              <div
                style={{ width: 700, marginTop: "2rem" }}
                className="text-center"
              >
                {/* <span>Memori kisah kami</span> */}
                <h2
                  style={{
                    fontSize: 36,
                    color: "var(--main)",
                    fontWeight: "bold",
                    fontFamily: "Maven Pro",
                    letterSpacing: 0.5,
                  }}
                >
                  #25.453{" "}
                  <span style={{ fontSize: 36, color: "pink" }}>
                    {" "}
                    Pasangan Berbahagia
                  </span>
                </h2>
                <p style={{ fontSize: 12, fontFamily: IConstantFont.poppins }}>
                  {`Dari luar dan dalam negeri sudah membuat undangannya. giliran kamu untuk mencoba ;)`}
                </p>
              </div>
            </div>
            <div className="row justify-content-center">
              {dataCard
                .slice(userContentFirst, userContentSecond)
                .map((item) => {
                  return (
                    <div
                      style={{
                        height: 170,
                        marginTop: 15,
                      }}
                      className="col-4"
                    >
                      <div
                        style={{
                          height: "100%",
                          width: "100%",
                          overflow: "hidden",
                          borderRadius: 15,
                          position: "relative",
                        }}
                      >
                        <img
                          src={item.img}
                          style={{
                            height: "100%",
                            width: "100%",
                            objectFit: "cover",
                          }}
                          alt=""
                        />

                        {/* Overlay div */}
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "black",
                            opacity: 0.4,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="row mt-2 justify-content-center">
              <div
                style={{}}
                className="col-6 p-3 align-items-center justify-content-center d-flex"
              >
                {userContentFirst !== 0 ? (
                  <button
                    style={{
                      backgroundColor: "var(--main)",
                      fontSize: "12px",
                    }}
                    onClick={() => {
                      togglePrev();
                    }}
                    className="btn btn-success me-2"
                  >
                    {`<< Prev `}
                  </button>
                ) : null}

                <button
                  style={{
                    backgroundColor: "var(--main)",
                    fontSize: "12px",
                  }}
                  onClick={() => {
                    toggleNext();
                  }}
                  className="btn btn-success"
                >
                  {"Next >>"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  function SectionFeature() {
    return (
      <section
        style={{ display: "flex", backgroundColor: "#f4f4f4" }}
        id="fiture"
        className=""
      >
        <div className="container mt-4">
          <div className="row justify-content-center">
            <div className="col-md-8 col-10 text-center">
              {/* <span>Memori kisah kami</span> */}
              <h3
                style={{
                  fontFamily: IConstantFont.poppins,
                  color: "var(--main)",
                  marginTop: 20,
                }}
              >
                Kaya akan Fitur yang{" "}
                <span style={{ color: "pink" }}>keren dan Lengkap</span>
              </h3>
              <p style={{ fontSize: 12 }}>
                Disertai dengan berbagai fitur yang dapat memudahkan anda dalam
                mengundang orang-orang terdekat anda ke acara spesial,
                <span style={{ fontWeight: "bold" }}>
                  Cukup Satu Kali Bayar{" "}
                </span>
                .
              </p>
            </div>
          </div>
          {layout.isDesktopScreen ||
          layout.isLargeDesktopScreen ||
          layout.isExtraLargeScreen ? (
            <div className="row justify-content-center">
              {dataFiture.map((item) => (
                <div className="col-12 mt-2 col-md-4 mb-2">
                  <div
                    style={{
                      backgroundColor: "white",
                      paddingRight: 15,
                      paddingLeft: 15,
                      borderRadius: 12,
                    }}
                    className="card"
                  >
                    <div
                      style={{ height: "100%" }}
                      className="row justify-content-start, align-items-center"
                    >
                      <div
                        className="col-3"
                        style={{
                          justifyContent: "end",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: "var(--main)",
                            opacity: 0.4,
                            overflow: "hidden",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <i
                            style={{ fontSize: 25, color: "white" }}
                            className={item.icon}
                          />
                        </div>
                      </div>
                      <div className="col-9">
                        <h6 className="card-title mt-3 mb-3">{item.title}</h6>
                        <p style={{ fontSize: 14 }} className="mt-0 mb-0 pb-0">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Slide
              arrows={false}
              autoplay={true}
              infinite={true}
              duration={1000}
            >
              {dataFiture.concat(dataFiture).map((item, index) => (
                <div
                  style={{ paddingLeft: 5, paddingRight: 5 }}
                  key={index}
                  className="col-11 mt-2 col-md-4 mb-2"
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      paddingRight: 15,
                      paddingLeft: 15,
                      borderRadius: 12,
                    }}
                    className="card"
                  >
                    <div
                      style={{ height: "100%" }}
                      className="row justify-content-start align-items-center"
                    >
                      <div
                        className="col-3"
                        style={{
                          justifyContent: "end",
                          alignItems: "center",
                          display: "flex",
                        }}
                      >
                        <div
                          style={{
                            height: 50,
                            width: 50,
                            borderRadius: 25,
                            backgroundColor: "var(--main)",
                            opacity: 0.4,
                            overflow: "hidden",
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                          }}
                        >
                          <i
                            style={{ fontSize: 25, color: "white" }}
                            className={item.icon}
                          />
                        </div>
                      </div>
                      <div className="col-9">
                        <h6 className="card-title mt-3 mb-3">{item.title}</h6>
                        <p style={{ fontSize: 14 }} className="mt-0 mb-0 pb-0">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slide>
          )}
        </div>
      </section>
    );
  }

  function SectionTutorial() {
    return (
      <section
        style={{ backgroundColor: "#f2e9e1" }}
        className=""
        id="tutorial"
      >
        <div className="container">
          <div className="row justify-content-center ">
            <div className="col-md-8 col-10 text-center mt-5">
              {/* <span>Memori kisah kami</span> */}
              <h3
                style={{
                  color: "var(--main)",
                  fontSize: 35,
                  fontFamily: IConstantFont.Belleza,
                }}
              >
                Reserve <span style={{ color: "pink" }}>Tutorial</span>
              </h3>
              <p style={{ fontSize: 14 }}>
                Pesan undangan dengan mudah, tanpa pake ribet, bisa isi form
                undangan sendiri atau di bantu oleh admin kami
              </p>
            </div>
          </div>
          <div className="row justify-content-center ">
            <div className="col-sm-6 col-md-4 col-lg-4 mt-3 mb-5">
              {dataReserve.map((item) => (
                <div style={{ backgroundColor: "white" }} className="card mt-3">
                  <div className="card-body text-center">
                    <i style={{ fontSize: 25 }} className={item.icon} />
                    <h3
                      style={{
                        fontFamily: IConstantFont.Belleza,
                        fontSize: 18,
                      }}
                      className="mt-3 mb-3"
                    >
                      {item.title}
                    </h3>
                    <p
                      style={{ fontSize: 14 }}
                      className="mt-3 mb-0 pb-0 text-center"
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  function SectionCarousell() {
    return (
      <section
        style={{
          backgroundColor: "white",
          display: "flex",
          padding: 20,
          justifyContent: "center",
          alignItems: "center",
          overflowX: "auto", 
          overflowY: "hidden",
          scrollPaddingLeft: 20,
        }}
      >
        <div
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            width: "100%",
          }}
          className=""
        >
          <div
            style={{
              display: "inline-flex",
              animation: "scroll 120s linear infinite",
            }}
            className=""
          >
            {dataCard.map((item, index) => (
              <div
                key={index}
                style={{
                  borderRadius: 20,
                  overflow: "hidden",
                  backgroundColor: "rgba(0, 0, 0, 0.2)",
                  margin: "0 10px",
                  width: 390,
                  height: 190,
                  position: "relative",
                  flex: "0 0 auto",
                }}
                className=""
              >
                <img
                  src={item.img}
                  alt=""
                  style={{
                    objectFit: "cover",
                    width: "100%",
                    height: "100%",
                  }}
                />
                <div className="" />
                <div
                  style={{
                    justifyContent: "start",
                    alignItems: "center",
                    textAlign: "start",
                    width: "100%",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    // width: "100%",
                    backgroundColor: "black",
                    opacity: 0.7,
                  }}
                  className="content"
                >
                  <div className="col-6 ">
                    <div
                      style={{
                        width: "100%",
                        backgroundColor: "transparent",
                        overflow: "hidden",
                      }}
                    >
                      <p
                        style={{
                          color: "white",
                          fontSize: 21,
                          fontWeight: "bold",
                          fontFamily: IConstantFont.poppins,
                          whiteSpace: "normal", 
                          wordWrap: "break-word", 
                        }}
                      >
                        {item.title}
                      </p>
                    </div>
                  </div>
                  <div className="col-6 justify-content-center">
                    <div
                      style={{
                        height: 100,
                        width: 180,
                        overflow: "hidden",
                        borderRadius: 20,
                      }}
                    >
                      {" "}
                      <img
                        src={`${item.forGround}`}
                        alt=""
                        style={{
                          height: "100%",
                          objectFit: "cover",
                          marginLeft: 20,
                          width: "100%",
                          borderRadius: 20,
                        }}
                      />
                    </div>{" "}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  function SectionHero() {
    return (
      <section
        style={{
          backgroundColor: "var(--main3)",
          width: "100%",
          height: "123vh",
          paddingRight: layout.isPhoneScreen || layout.isTabletScreen ? 0 : 180,
        }}
        className="full-screen cover d-lg-flex justify-content-center align-items-center mt-3"
        id="home"
      >
        <div className="container">
          {isLoadingMain ? (
            <div
              style={{
                display: "grid",
                placeItems: "center",
              }}
            >
              <ReactLoading
                type={"spinningBubbles"}
                color={"#116A7B"}
                height={100} 
                width={100} 
              />
            </div>
          ) : (
            <div className="row dflex " style={{}}>
              {heroDesc()}
              {imgHero()}
            </div>
          )}
        </div>
        <div
          className="col-12 text-center"
          style={{
            position: "absolute",

            height: 80,
            width: "100%",
            bottom: -120,
            left: 0,
          }}
        ></div>
      </section>
    );
  }

  function heroDesc() {
    return (
      <div className="col-lg-8 col-md-8 col-12 col-sm-12 d-flex align-items-center">
        <div className="cover-text">
          <h2 className="animated animated-text">
            <span
              style={{ color: "var(--main)", letterSpacing: 0.4 }}
              className="mt-5 first-animated-word"
            >
              No #1 <span style={{ color: "pink" }}>Platform</span>
            </span>
          </h2>
          <h2 className="animated animated-text">
            <span
              style={{
                fontFamily: "Maven Pro",
              }}
              className="mt-5 first-animated-word"
            >
              Undangan Digital
            </span>
          </h2>

          <h2 style={{ fontSize: 21, fontWeight:300 }} className="">
            <span
              style={{
                fontFamily: "Maven Pro",
              }}
              className="mt-5 first-animated-word"
            >
              <span style={{ fontWeight: "bold", color: "red" }}>
                First Launching Promo !!
              </span>{" "}
              {
                "Semua Tema (Basic, Premium, Luxury, Include semua fitur Paket) Hanya "
              }{" "}
              <span style={{ fontWeight: "bold", color: "red" }}>
                Rp.45.000
              </span>
            </span>
          </h2>

          <p
            style={{
              fontFamily: IConstantFont.poppins,
              fontSize: 14,

              letterSpacing: 0.3,
            }}
          >
            Buat undangan dalam hitungan menit, unduh atau bagikan undangan Anda
            dengan RSVP online. Kami pandai mengatur tamu pernikahan Anda di
            hari istimewa Anda
          </p>

          <small
            style={{
              fontSize: "1.5rem",
              // color:"var(--main)",
              fontWeight: "normal",
            }}
            className="medium-text"
          >
            <span
              style={{
                // fontWeight: "bold",
                fontFamily: "Maven Pro",
              }}
              className=""
            >
              Undangan menjadi lebih modern, keren dan efisien
            </span>
          </small>
          <div style={{}} className="custom-btn-group mt-4">
            <a
              href="#design"
              className="btn mr-lg-2 custom-btn"
              style={{
                backgroundColor: "var(--main)",
                color: "#ffff",
              }}
            >
              <i style={{}} className="bi bi-bag-check" /> Pesan Sekarang
            </a>
            {/* <a href="#contact" class="btn custom-btn custom-btn-bg custom-btn-link">Get a free quote</a> */}
          </div>
        </div>
      </div>
    );
  }

  function imgHero() {
    return (
      <div
        style={
          {
            // marginTop: -80,
            // marginBottom: 40,
          }
        }
        className="row justify-content-center col-lg-4 col-md-12 col-12"
      >
        <div className="cover-image">
          <div className="">
            <img
              style={{
                width:
                  layout.isTabletScreen || layout.isPhoneScreen
                    ? "108%"
                    : "170%",
              }}
              src="/image/background/landingPage/main-banner2.gif"
              className=""
              alt="Mac Frame"
            />
          </div>
        </div>
      </div>
    );
  }
};

export default DashboardPage;
