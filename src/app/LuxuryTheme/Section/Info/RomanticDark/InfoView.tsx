"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import useIntersectionObserver from "../../UseInterSectionObserver/UseInterSectionObserver";
import {
  TimeConversionTime,
  TimeConvertionDate,
  TimeConvertionDay,
  TimeConvertionFullDate,
  TimeConvertionInterface,
  TimeConvertionUSFormat,
} from "../../../../utils/TimeConvertion";
import React from "react";
import AnimationThemeInstance from "../../../../utils/AnimationThemes";
import { GetEmbededFromGmap } from "../../../../utils/GetEmbeded";
import { InfoAcara } from "../../../../Dashboard/Domain/Models/ModelResponse/ModelResponseDetailSlug/ModelResponseDetailSlug";
import { IConstantFont } from "../../../../utils/ConstantFont";
import { isMobile } from "react-device-detect";

export interface InfoViewInterface {
  Info: InfoAcara | undefined;
  Embeded: string | undefined;
}

export interface InfoViewKeyValue {
  Date: TimeConvertionInterface;
  Judul: string;
  Map: string;
  Photo: string;
  Place: string;
}

const InfoView = (props: InfoViewInterface) => {
  const controls = useAnimation();
  const targetRef = useRef<any>(null);
  const isVisible = useIntersectionObserver(targetRef);

  useEffect(() => {
    if (isVisible) {
      controls.start(AnimationThemeInstance.FadeStartVertical);
    }
  }, [isVisible, controls]);

  const apiKey = "AIzaSyCojsLM-OulTC4CRYYfmLaGGA90tjTLtio";
  return (
    <section
      style={{ backgroundColor: "var(--sec)" }}
      id="info"
      className="info "
    >
      <div className="container" style={{ marginTop: !isMobile ? -80 : 0 }}>
        <div className="row justify-content-center">
          <div className="col-4 text-end">
            <motion.svg
              ref={targetRef}
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              data-v-0c5a5448=""
              id="Layer_1"
              height={120}
              width={120}
              viewBox="4 360 263 263"
            >
              <path
                fill="var(--forth)"
                data-v-0c5a5448=""
                xmlns="http://www.w3.org/2000/svg"
                d="M131.734,528.313c0.429,13.194-0.409,38.232-0.093,51.202c0.009,0.397,0.34,0.712,0.737,0.702  c0.397-0.009,0.712-0.34,0.702-0.737c-0.316-12.974,0.523-38.017,0.093-51.214c-0.013-0.397-0.345-0.709-0.743-0.696  C132.034,527.583,131.721,527.916,131.734,528.313z M112.124,541.673c-2.33,5.89-7.482,16.752-9.819,22.523  c-0.15,0.368,0.028,0.788,0.397,0.937c0.368,0.149,0.788-0.028,0.937-0.397c2.34-5.773,7.493-16.641,9.825-22.534  c0.146-0.37-0.035-0.788-0.405-0.934C112.69,541.122,112.271,541.304,112.124,541.673z M135.362,492.558  c3.213-3.19,6.424-6.382,9.628-9.582c2.638-2.634,5.272-5.273,7.897-7.92c3.1-3.126,6.19-6.263,9.259-9.421  c1.557-1.602,3.109-3.21,4.652-4.826c1.424-1.491,2.842-2.989,4.25-4.497c0.413-0.442,0.825-0.885,1.236-1.329  c0.121-0.13,0.241-0.26,0.362-0.391c0.02-0.022,0.04-0.043,0.06-0.065c0.033-0.036,0.066-0.074,0.102-0.107  c0.047-0.042,0.098-0.079,0.154-0.108c0.078-0.041,0.165-0.067,0.252-0.077c0.086-0.009,0.174-0.004,0.258,0.018  c0.071,0.018,0.14,0.047,0.202,0.086c0.062,0.038,0.119,0.086,0.167,0.142c0.045,0.053,0.083,0.113,0.111,0.176  c0.066,0.148,0.08,0.318,0.04,0.475c-0.023,0.088-0.062,0.17-0.115,0.243c-0.034,0.047-0.074,0.087-0.113,0.129  c-0.04,0.043-0.08,0.087-0.12,0.13c-0.181,0.196-0.363,0.393-0.545,0.589c-0.456,0.492-0.913,0.983-1.372,1.473  c-0.739,0.79-1.482,1.578-2.226,2.363c-1.35,1.424-2.707,2.841-4.07,4.254c-2.182,2.262-4.377,4.511-6.581,6.753  c-2.358,2.399-4.725,4.79-7.099,7.175c-5.451,5.478-10.932,10.927-16.416,16.371l-0.169,0.168  c8.794-3.354,17.364-6.661,23.359-9.256c0.364-0.158,0.788,0.01,0.946,0.374c0.158,0.365-0.01,0.788-0.375,0.946  c-5.795,2.509-13.995,5.682-22.48,8.921l-29.898,0.105c12.968-0.423,38.013,0.21,51.202-0.327c0.397-0.016,0.732,0.293,0.749,0.69  c0.016,0.397-0.293,0.733-0.69,0.748c-5.68,0.232-13.556,0.246-21.72,0.221c3.022,1.345,5.872,2.589,8.046,3.449  c0.369,0.146,0.55,0.565,0.404,0.934c-0.146,0.37-0.565,0.55-0.934,0.405c-2.23-0.883-5.173-2.17-8.284-3.556l0.412,0.415  c2.721,2.743,5.442,5.487,8.166,8.227c4.194,4.22,8.394,8.435,12.614,12.63c1.909,1.899,3.823,3.793,5.743,5.681  c1.789,1.759,3.583,3.513,5.386,5.258c1.426,1.381,2.858,2.756,4.298,4.123c0.479,0.455,0.958,0.909,1.439,1.362  c0.171,0.161,0.341,0.32,0.512,0.481c0.042,0.04,0.084,0.08,0.127,0.119c0.042,0.039,0.084,0.079,0.126,0.118  c0.009,0.009,0.018,0.018,0.026,0.026c0.064,0.066,0.115,0.145,0.15,0.231c0.042,0.106,0.059,0.222,0.049,0.336  c-0.008,0.088-0.033,0.175-0.073,0.254c-0.034,0.067-0.078,0.13-0.132,0.183c-0.049,0.051-0.107,0.094-0.169,0.128  c-0.071,0.038-0.149,0.065-0.23,0.078c-0.086,0.013-0.176,0.011-0.262-0.007c-0.107-0.022-0.208-0.07-0.295-0.137  c-0.017-0.013-0.033-0.027-0.049-0.042c-0.042-0.04-0.084-0.079-0.126-0.119c-0.085-0.08-0.17-0.159-0.254-0.239  c-0.301-0.283-0.602-0.566-0.902-0.85c-0.531-0.502-1.062-1.006-1.591-1.51c-0.974-0.927-1.944-1.859-2.912-2.793  c-1.785-1.723-3.56-3.455-5.33-5.193c-3.18-3.121-6.342-6.261-9.495-9.409c-2.748-2.744-5.49-5.494-8.229-8.247  c-3.192-3.21-6.379-6.423-9.567-9.637l-0.145-0.003c1.58,3.579,3.159,7.159,4.727,10.744c0.797,1.821,1.59,3.643,2.377,5.468  c0.556,1.287,1.109,2.575,1.656,3.865c0.183,0.431,0.365,0.861,0.546,1.292c0.065,0.156,0.131,0.312,0.196,0.468  c0.022,0.051,0.043,0.103,0.065,0.154c0.013,0.031,0.024,0.063,0.032,0.095c0.022,0.086,0.029,0.175,0.019,0.263  c-0.02,0.175-0.105,0.339-0.236,0.457c-0.053,0.048-0.115,0.088-0.18,0.117c-0.062,0.028-0.128,0.048-0.196,0.058  c-0.076,0.011-0.152,0.009-0.227-0.003c-0.085-0.015-0.167-0.045-0.242-0.09c-0.111-0.065-0.204-0.161-0.266-0.275  c-0.011-0.022-0.022-0.044-0.032-0.066c-0.022-0.051-0.042-0.103-0.064-0.154c-0.044-0.104-0.087-0.207-0.131-0.311  c-0.203-0.484-0.407-0.967-0.612-1.449c-0.316-0.745-0.634-1.489-0.953-2.233c-1.165-2.715-2.346-5.423-3.531-8.129  c-1.42-3.241-2.849-6.48-4.277-9.717l-0.355-0.404c-0.013,3.239-0.024,6.479-0.02,9.718c0.002,1.405,0.007,2.809,0.016,4.214  c0.009,1.3,0.023,2.6,0.043,3.9c0.011,0.741,0.026,1.482,0.043,2.222c0.01,0.454,0.022,0.909,0.036,1.362  c0.004,0.129,0.008,0.258,0.012,0.386c0.001,0.025,0.001,0.051,0.002,0.076c0.001,0.045,0.004,0.091,0.002,0.136  c-0.005,0.094-0.028,0.188-0.069,0.274c-0.046,0.096-0.114,0.182-0.197,0.249c-0.067,0.055-0.146,0.098-0.229,0.125  c-0.072,0.024-0.148,0.036-0.223,0.036c-0.069,0-0.138-0.01-0.204-0.03c-0.077-0.023-0.15-0.058-0.214-0.105  c-0.072-0.051-0.134-0.115-0.182-0.188c-0.051-0.076-0.086-0.162-0.105-0.251c-0.006-0.03-0.01-0.06-0.012-0.09  c-0.003-0.036-0.003-0.072-0.005-0.108c-0.001-0.026-0.001-0.051-0.002-0.077c-0.004-0.129-0.008-0.257-0.012-0.386  c-0.013-0.427-0.024-0.853-0.034-1.28c-0.031-1.31-0.052-2.621-0.067-3.931c-0.02-1.751-0.03-3.502-0.034-5.253  c-0.009-3.353,0.001-6.707,0.014-10.06l0.001-0.264c-1.217,2.729-2.33,5.266-3.122,7.218c-0.149,0.368-0.569,0.546-0.937,0.397  c-0.368-0.149-0.546-0.569-0.397-0.938c0.894-2.207,2.2-5.158,3.601-8.29l43.027-43.675c-20.369,22.099-61.705,61.397-81.902,82.955  c-0.271,0.29-0.727,0.305-1.017,0.033c-0.29-0.271-0.305-0.727-0.033-1.017c9.568-10.213,23.881-24.407,38.462-38.868l-0.439,0.167  c-3.506,1.335-7.011,2.673-10.509,4.031c-1.822,0.708-3.641,1.42-5.456,2.143c-1.362,0.543-2.721,1.091-4.076,1.651  c-0.431,0.178-0.862,0.357-1.292,0.538c-0.13,0.055-0.26,0.109-0.389,0.164c-0.026,0.011-0.051,0.022-0.077,0.032  c-0.035,0.015-0.071,0.031-0.107,0.045c-0.032,0.011-0.063,0.021-0.096,0.028c-0.086,0.019-0.175,0.022-0.262,0.008  c-0.172-0.026-0.333-0.116-0.444-0.25c-0.047-0.057-0.086-0.121-0.114-0.19c-0.024-0.06-0.04-0.123-0.049-0.188  c-0.009-0.077-0.005-0.154,0.011-0.231c0.018-0.084,0.051-0.166,0.096-0.239c0.065-0.103,0.157-0.19,0.265-0.248  c0.045-0.024,0.092-0.042,0.139-0.062c0.026-0.011,0.051-0.022,0.077-0.033c0.129-0.055,0.259-0.109,0.389-0.163  c0.485-0.204,0.971-0.406,1.458-0.606c0.78-0.322,1.562-0.639,2.344-0.955c1.323-0.533,2.648-1.059,3.975-1.58  c1.433-0.563,2.866-1.121,4.302-1.676c3.229-1.248,6.465-2.483,9.701-3.716l-0.061-0.037c-3.514-0.014-7.028-0.026-10.542-0.019  c-1.826,0.004-3.652,0.014-5.478,0.034c-1.345,0.015-2.69,0.036-4.035,0.067c-0.455,0.01-0.908,0.022-1.362,0.036  c-0.129,0.004-0.258,0.008-0.386,0.012c-0.026,0.001-0.051,0.001-0.076,0.002c-0.036,0.001-0.073,0.003-0.109,0.003  c-0.036,0-0.073-0.003-0.109-0.009c-0.087-0.014-0.171-0.045-0.247-0.089c-0.146-0.086-0.26-0.224-0.316-0.384  c-0.024-0.069-0.037-0.141-0.039-0.213c-0.002-0.065,0.004-0.13,0.02-0.194c0.018-0.073,0.048-0.144,0.088-0.208  c0.046-0.074,0.105-0.139,0.173-0.192c0.099-0.077,0.218-0.126,0.342-0.143c0.049-0.007,0.099-0.007,0.149-0.009  c0.026-0.001,0.051-0.001,0.077-0.002c0.128-0.004,0.257-0.008,0.386-0.012c0.509-0.015,1.018-0.028,1.527-0.04  c0.774-0.018,1.549-0.032,2.324-0.043c1.34-0.02,2.681-0.033,4.021-0.041c1.413-0.009,2.826-0.013,4.239-0.014  c3.249-0.003,6.497,0.009,9.746,0.022l0.354,0.001c-3.109-1.391-6.036-2.685-8.228-3.573c-0.368-0.149-0.546-0.569-0.397-0.938  c0.149-0.368,0.569-0.546,0.938-0.397c1.961,0.795,4.511,1.915,7.253,3.138c-14.263-14.368-28.333-28.451-38.651-37.963  c-0.292-0.269-0.311-0.724-0.042-1.017c0.27-0.292,0.725-0.31,1.017-0.041c10.366,9.555,24.518,23.724,38.848,38.161  c-3.627-8.227-7.113-16.186-9.503-21.965c-0.152-0.367,0.023-0.788,0.391-0.94c0.367-0.152,0.788,0.023,0.94,0.39  c5.509,13.319,16.84,38.228,22.312,51.299l-12.662-29.001c0.026-8.278,0.015-16.286-0.22-22.039  c-0.016-0.397,0.293-0.732,0.69-0.749c0.397-0.016,0.732,0.293,0.749,0.69c0.537,13.192-0.096,38.242,0.327,51.213l-0.111-28.071  c1.516-3.392,2.944-6.641,3.899-9.055c0.146-0.37,0.565-0.55,0.934-0.404c0.37,0.146,0.55,0.565,0.405,0.933  c-0.784,1.982-1.888,4.526-3.096,7.25L135.362,492.558z M114.39,536.621c0.148-0.12,0.322-0.162,0.513-0.142  c0.117,0.012,0.288,0.053,0.448,0.221c0.038,0.041,0.195,0.286,0.197,0.524c-0.005,0.154-0.061,0.301-0.154,0.419  c0.024-0.027,0.068-0.076,0.103-0.152c0.024-0.063,0.04-0.13,0.049-0.201c0.003-0.022,0.003-0.044,0.003-0.066  c0.003-0.059-0.003-0.121-0.016-0.182c0.045,0.204,0.012,0.349-0.035,0.449c-0.081,0.219-0.257,0.38-0.554,0.428  c-0.393,0.064-0.762-0.202-0.826-0.595c-0.006-0.034-0.009-0.07-0.009-0.104c-0.016-0.22,0.063-0.356,0.121-0.43  C114.269,536.725,114.323,536.668,114.39,536.621z M115.298,537.741c-0.088,0.076-0.194,0.132-0.315,0.158  c-0.035,0.008-0.07,0.013-0.105,0.015C115.033,537.907,115.175,537.853,115.298,537.741z M114.417,537.786  c0.034,0.024,0.068,0.044,0.101,0.06c0.033,0.016,0.065,0.028,0.096,0.037C114.544,537.861,114.477,537.828,114.417,537.786z   M114.142,536.983c0.081-0.246,0.294-0.44,0.568-0.485c-0.129,0.021-0.235,0.063-0.32,0.123c-0.04,0.032-0.078,0.069-0.114,0.112  c-0.009,0.011-0.028,0.03-0.049,0.057C114.19,536.848,114.161,536.914,114.142,536.983z M125.86,510.104  c-2.331,5.89-7.482,16.752-9.82,22.523c-0.149,0.368,0.028,0.788,0.397,0.937c0.368,0.149,0.788-0.028,0.938-0.397  c2.339-5.773,7.492-16.641,9.824-22.534c0.146-0.37-0.035-0.788-0.405-0.934C126.424,509.553,126.005,509.734,125.86,510.104z   M145.387,527.427c0.003,0.005,0.006,0.01,0.009,0.016c0.204,0.341,0.645,0.453,0.987,0.25c0.341-0.204,0.453-0.646,0.249-0.987  c-0.003-0.005-0.006-0.011-0.009-0.016c-0.204-0.341-0.646-0.453-0.987-0.25C145.295,526.644,145.183,527.086,145.387,527.427z   M175.685,514.994c0.227-0.289,0.542-0.495,0.763-0.276l0.021,0.022c0.281,0.281,0.28,0.737-0.001,1.018  c-0.281,0.28-0.737,0.279-1.018-0.002l-0.017-0.016C175.218,515.526,175.408,515.22,175.685,514.994z M172.272,512.761  c-5.89-2.331-16.752-7.482-22.523-9.82c-0.368-0.149-0.788,0.029-0.938,0.397c-0.149,0.368,0.029,0.788,0.397,0.938  c5.773,2.339,16.641,7.493,22.534,9.824c0.369,0.146,0.788-0.035,0.933-0.404C172.822,513.326,172.641,512.908,172.272,512.761z   M103.304,508.405c0.06,0.339-0.132,0.683-0.467,0.802c-0.374,0.134-0.786-0.062-0.919-0.436c-0.063-0.175-0.068-0.306-0.007-0.486  c0.126-0.377,0.534-0.581,0.911-0.455C103.086,507.919,103.265,508.147,103.304,508.405z M145.911,502.443  c0.001-0.006,0.115-0.457,0.165-0.517c0.173-0.208,0.392-0.287,0.65-0.253c0.092,0.013,0.322,0.03,0.511,0.328  c0.108,0.169,0.136,0.366,0.094,0.547c-0.072,0.33-0.371,0.573-0.722,0.565c-0.078-0.002-0.153-0.017-0.223-0.042  c-0.069-0.021-0.149-0.059-0.229-0.134C146.017,502.816,145.924,502.64,145.911,502.443z M146.627,503.108l0.017-0.001h-0.02  L146.627,503.108z M147.091,502.94c-0.024,0.02-0.049,0.038-0.075,0.055c-0.115,0.073-0.243,0.109-0.37,0.112  C146.814,503.108,146.963,503.053,147.091,502.94z M146.025,502.779l-0.003-0.004C146.024,502.776,146.025,502.777,146.025,502.779  c0.043,0.066,0.088,0.118,0.132,0.159c0.067,0.058,0.144,0.104,0.229,0.134c0.044,0.013,0.083,0.02,0.114,0.024  C146.312,503.061,146.138,502.952,146.025,502.779z M145.911,502.442c-0.002-0.022-0.002-0.045-0.002-0.067l0.002,0.069V502.442z   M98.981,495.554c-13.19,0.538-38.234-0.095-51.202,0.327c-0.397,0.013-0.709,0.346-0.696,0.743  c0.013,0.397,0.346,0.709,0.743,0.696c12.971-0.423,38.021,0.21,51.213-0.327c0.397-0.016,0.706-0.351,0.69-0.749  C99.714,495.848,99.378,495.538,98.981,495.554z M102.865,495.578c0.253,0.046,0.473,0.226,0.558,0.487  c0.122,0.378-0.086,0.784-0.464,0.906c0.012-0.004,0.031-0.011,0.031-0.011s-0.424,0.043-0.543-0.007  c-0.108-0.045-0.282-0.113-0.397-0.411c-0.143-0.37,0.042-0.787,0.413-0.93C102.596,495.56,102.735,495.551,102.865,495.578z   M213.025,495.081c-13.19,0.537-38.234-0.096-51.202,0.326c-0.397,0.013-0.709,0.346-0.696,0.743  c0.013,0.397,0.346,0.709,0.743,0.696c12.971-0.422,38.021,0.21,51.214-0.327c0.397-0.016,0.705-0.351,0.689-0.749  C213.757,495.374,213.422,495.065,213.025,495.081z M103.084,495.662c0.063,0.036,0.121,0.083,0.171,0.138  c0.05,0.055,0.092,0.118,0.123,0.189C103.293,495.79,103.178,495.707,103.084,495.662z M118.445,489.186  c-5.89-2.331-16.752-7.482-22.523-9.82c-0.368-0.149-0.788,0.028-0.937,0.397c-0.149,0.368,0.028,0.788,0.397,0.938  c5.773,2.339,16.641,7.492,22.534,9.824c0.37,0.146,0.788-0.035,0.934-0.404C118.996,489.751,118.814,489.332,118.445,489.186z   M163.783,484.289c-0.039-0.048-0.074-0.102-0.1-0.161c-0.164-0.362-0.003-0.788,0.358-0.952c0.255-0.115,0.455-0.07,0.614,0.006  c0.159,0.076,0.389,0.48,0.396,0.491c0.093,0.364-0.111,0.743-0.472,0.862C164.281,484.633,163.964,484.525,163.783,484.289z   M164.599,484.502c-0.073,0.028-0.148,0.044-0.223,0.048c-0.076,0.004-0.15-0.004-0.221-0.023  C164.279,484.564,164.426,484.572,164.599,484.502z M165.051,483.671l-0.013-0.045l0.014,0.047L165.051,483.671z M148.233,459.597  c-2.331,5.89-7.482,16.752-9.82,22.523c-0.149,0.368,0.029,0.788,0.397,0.938c0.368,0.149,0.788-0.029,0.937-0.397  c2.34-5.773,7.493-16.641,9.825-22.534c0.146-0.369-0.035-0.788-0.405-0.934C148.798,459.047,148.379,459.227,148.233,459.597z   M90.678,478.149c0.085-0.314,0.377-0.54,0.716-0.529c0.397,0.012,0.71,0.345,0.697,0.741c-0.004,0.131-0.091,0.337-0.091,0.337  s0.049-0.111,0.063-0.174c-0.084,0.388-0.467,0.635-0.855,0.552c-0.388-0.084-0.636-0.467-0.552-0.855  C90.66,478.199,90.668,478.174,90.678,478.149z M118.88,465.874c0.183-0.299,0.564-0.426,0.896-0.284  c0.366,0.156,0.535,0.579,0.378,0.945c-0.014,0.033-0.04,0.074-0.067,0.113c-0.188,0.324-0.597,0.452-0.938,0.285  c-0.357-0.175-0.504-0.606-0.33-0.962C118.832,465.942,118.855,465.907,118.88,465.874z M131.463,413.218  c0.538,13.19-0.096,38.234,0.327,51.202c0.013,0.397,0.346,0.709,0.743,0.696c0.397-0.013,0.709-0.346,0.696-0.743  c-0.423-12.971,0.21-38.021-0.327-51.213c-0.016-0.397-0.352-0.706-0.749-0.69C131.757,412.486,131.447,412.822,131.463,413.218z   M161.854,427.213c-2.331,5.89-7.482,16.753-9.82,22.523c-0.149,0.368,0.029,0.788,0.397,0.938c0.368,0.149,0.788-0.028,0.937-0.397  c2.339-5.773,7.493-16.641,9.825-22.534c0.146-0.37-0.035-0.788-0.405-0.934C162.418,426.663,162,426.844,161.854,427.213z"
                className="fill-secondary"
              ></path>
            </motion.svg>
          </div>
          <div className="col-8 d-flex justify-content-center align-items-center">
            <motion.div
              ref={targetRef}
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "var(--forth)",
              }}
            ></motion.div>
          </div>
          <div className="row justify-content-center">
            <div className="col-8 text-center">
              <motion.p
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.5, delay: 0.5 }}
                style={{
                  color: "var(--forth)",
                  fontSize: 12,
                  fontFamily: "Times-new-roman",
                }}
                className="alamat"
              >
                Dengan mengucap syukur atas kehadirat Allah SWT dan dengan
                segenap kerendahan hati, tanpa mengurangi rasa hormat. Kami
                mohon doa dan restu dari Bapak/Ibu/Saudara/i untuk hadir dihari
                bahagia Pernikahan kami yang akan dilaksanakan pada :
              </motion.p>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        <div key={"123"} className="col-10 mt-3">
          <div className="row">
            <motion.img
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 0.7 }}
              src={props.Info?.akad.imageAkad}
              style={{
                borderTopRightRadius: 150,
                backgroundSize: "cover",
                borderTopLeftRadius: 150,
              }}
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </div>
          <div
            style={{
              backgroundColor: "white",
              marginRight: 3,
              marginLeft: 3,
            }}
            className="row justify-content-center  d-flex align-items-center mt-1 mb-1"
          >
            <div className="row text-center justify-content-center d-flex align-items-center">
              <motion.img
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 0.9 }}
                style={{ width: 60, height: 50 }}
                src="/image/icons/wedding-rings.png"
                alt=""
              />
              <motion.h1
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 1 }}
                className="mt-4"
                style={{
                  color: "var(--fiveth)",
                  fontFamily: IConstantFont.dreamEvanue,
                  fontSize: 26,
                }}
              >
                Akad Nikah
              </motion.h1>
              <div className="row d-flex align-items-start text-start justify-content-start">
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 1.3 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-calendar-check-fill"></i>
                  </span>{" "}
                  {TimeConvertionUSFormat(props.Info!.akad.dateAkad.toString())}
                </motion.p>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 1.4 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-alarm-fill"></i>
                  </span>{" "}
                  {
                    TimeConvertionFullDate(props.Info!.akad.dateAkad.toString())
                      .formattedTime
                  }
                </motion.p>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 1.6 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>{" "}
                  {props.Info?.akad.lokasiAkad == "string"
                    ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda et praesentium doloribus laboriosam similique eligendi laudantium soluta reiciendis repellendus voluptatem quaerat, expedita aperiam amet!"
                    : props.Info?.akad.lokasiAkad}
                </motion.p>
              </div>

              <div className="row justify-content-center">
                <motion.a
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 1.8 }}
                  className="btn ext-center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: 150,
                    marginBottom: 25,
                  }}
                  href={props.Info?.akad.mapAkad}
                >
                  <i
                    style={{
                      fontSize: 12,
                      color: "var(--third)",
                    }}
                    className="bi bi-geo-alt-fill"
                  >
                    {" "}
                    {"    "}Google Map
                  </i>
                </motion.a>
              </div>
              <motion.img
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 1.3, delay: 2 }}
                style={{ width: 60, height: 50 }}
                src="/image/icons/restaurant.png"
                alt=""
              />
              <motion.h1
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 1.3, delay: 2.2 }}
                className="mt-4"
                style={{
                  color: "var(--fiveth)",
                  fontFamily: IConstantFont.dreamEvanue,
                  fontSize: 26,
                }}
              >
                Resepsi
              </motion.h1>
              <div className="row d-flex align-items-start text-start justify-content-start">
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 2.4 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-calendar-check-fill"></i>
                  </span>{" "}
                  {TimeConvertionUSFormat(
                    props.Info!.resepsi.dateResepsi.toString()
                  )}
                </motion.p>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 2.7 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-alarm-fill"></i>
                  </span>{" "}
                  {
                    TimeConvertionFullDate(
                      props.Info!.resepsi.dateResepsi.toString()
                    ).formattedTime
                  }
                </motion.p>
                <motion.p
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 1.3, delay: 2.9 }}
                  style={{
                    fontSize: 16,
                    color: "var(--fiveth)",
                    fontFamily: IConstantFont.regulerLight,
                  }}
                >
                  <span>
                    <i className="bi bi-geo-alt-fill"></i>
                  </span>{" "}
                  {props.Info?.resepsi.lokasiResepsi == "string"
                    ? "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis assumenda et praesentium doloribus laboriosam similique eligendi laudantium soluta reiciendis repellendus voluptatem quaerat, expedita aperiam amet!"
                    : props.Info?.resepsi.lokasiResepsi}
                </motion.p>
              </div>
              <motion.a
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 1.3, delay: 3.3 }}
                className="btn ext-center"
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: 150,
                  marginBottom: 25,
                }}
                href={props.Info?.resepsi.mapResepsi}
              >
                <i
                  style={{
                    fontSize: 12,
                    color: "var(--third)",
                  }}
                  className="bi bi-geo-alt-fill"
                >
                  {" "}
                  {"    "}Google Map
                </i>
              </motion.a>
            </div>
            <div className="row justify-content-center d-flex text-center align-items-center"></div>
          </div>
          <div className="row">
            <motion.img
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 3.7 }}
              src={props.Info?.akad.imageAkad}
              style={{
                borderBottomLeftRadius: 150,
                backgroundSize: "cover",
                borderBottomRightRadius: 150,
              }}
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </div>
        </div>

        {/* <div key={"123"} className="col-10 mt-3">
          <div className="row">
            <motion.img
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 2.5 }}
              src={props.Info?.resepsi.imageResepsi}
              style={{
                borderTopRightRadius: "150px",
                backgroundSize: "cover",
                // borderTopLeftRadius: 50,
              }}
              width={"100%"}
              height={"100%"}
              alt=""
            />
          </div>
          <div className="row justify-content-center m-1 ">
            <motion.div
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 2.5 }}
              style={{}}
              className="col-md-3 col-sm-3 col-3 text-center d-flex justify-content-center align-items-center info-text"
            >
              <motion.h3
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 2.6 }}
                className="info-h3"
                style={{
                  fontSize: "38px",
                  fontFamily: "Dancing script",
                  fontWeight: 800,
                  color: "var(--forth)",
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                }}
              >
                {props.Info?.resepsi.titleResepsi}
              </motion.h3>
            </motion.div>
            <motion.div
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 2.7 }}
              className="col-md-9 col-sm-9 col-9 text-center"
              style={{ color: "var(--fiveth)", backgroundColor: "#fff" }}
            >
              <div className="row">
                <div className="col-4 justify-content-end align-items-end">
                  <motion.h4
                    animate={controls}
                    initial={AnimationThemeInstance.FadeUp}
                    transition={{ duration: 0.8, delay: 2.8 }}
                    style={{
                      fontSize: "22px",
                      letterSpacing: "3px",
                      fontFamily: "brilon",
                      fontWeight: 400,
                      marginTop: "1rem",
                    }}
                  >
                    {TimeConvertionFullDate(
                      props.Info!.resepsi.dateResepsi.toString()
                    ).dayOfWeek.toLowerCase()}{" "}
                  </motion.h4>
                </div>
                <div className="row">
                  <div className="col-3 d-flex justify-content-start align-items-end">
                    <motion.h4
                      animate={controls}
                      initial={AnimationThemeInstance.FadeUp}
                      transition={{ duration: 0.8, delay: 2.9 }}
                      style={{
                        fontSize: "45px",
                        fontFamily: "brilon",
                        textAlign: "start",
                        marginLeft: 10,
                        fontWeight: 500,
                        marginBottom: 8,
                      }}
                    >
                      {
                        TimeConvertionFullDate(
                          props.Info!.resepsi.dateResepsi.toString()
                        ).dateToString
                      }
                    </motion.h4>
                  </div>
                  <div
                    style={{
                      backgroundColor: "",
                      paddingBottom: 10,
                      paddingRight: 5,
                    }}
                    className="col-7 d-flex justify-content-start align-items-end"
                  >
                    <motion.h4
                      animate={controls}
                      initial={AnimationThemeInstance.FadeUp}
                      transition={{ duration: 0.8, delay: 3 }}
                      style={{
                        fontSize: "22px",
                        fontFamily: "brilon",
                        fontWeight: 400,
                        letterSpacing: "3px",
                        textAlign: "start",
                        marginLeft: "15px",
                      }}
                    >
                      {TimeConvertionFullDate(
                        props.Info!.resepsi.dateResepsi.toString()
                      ).monthandYear.toLowerCase()}
                    </motion.h4>
                  </div>
                </div>
                <div className="col-8 d-flex justify-content-start align-items-end "></div>
              </div>
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "black",
                  marginBottom: "1rem",
                  marginTop: "1rem",
                }}
              ></div>
              <motion.span
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 3.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "20px ",
                }}
              >
                <i
                  className="bi bi-alarm-fill"
                  style={{ marginRight: "0.4rem", fontSize: 14 }}
                ></i>
                <p
                  style={{
                    letterSpacing: "2px",
                    margin: 0,
                    fontSize: 14,
                    fontFamily: "Times-new-roman",
                  }}
                >
                  {
                    TimeConvertionFullDate(
                      props.Info!.resepsi.dateResepsi.toString()
                    ).formattedTime
                  }
                </p>
              </motion.span>
              <motion.h4
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 3.2 }}
                style={{
                  marginBottom: "2rem",
                  letterSpacing: "1px",
                  fontFamily: "Times-new-roman",
                  fontSize: 16,
                }}
              >
                Tempat
              </motion.h4>
              <motion.p
                animate={controls}
                initial={AnimationThemeInstance.FadeUp}
                transition={{ duration: 0.8, delay: 3.3 }}
                style={{
                  fontFamily: "Times-new-roman",
                  fontSize: 16,
                  letterSpacing: "0.5px",
                  marginBottom: "4rem",
                }}
              >
                {props.Info?.resepsi.lokasiResepsi}
              </motion.p>
              <div className="row justify-content-center mb-5">
                <div className="col-9 d-flex align-items-center justify-content-center">
                  <a
                    className="btn ext-center"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      // hei
                      minWidth: "100%",
                    }}
                    href={props.Info?.resepsi.mapResepsi}
                  >
                    <i
                      style={{
                        fontSize: 12,
                      }}
                      className="bi bi-geo-alt-fill"
                      color="var(--third)"
                    >
                      {" "}
                      {"    "}Google Map
                    </i>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div> */}
      </div>

      <div className="container mt-5  ">
        <div className="row justify-content-center">
          <div className="col-md-10" style={{}}>
            <div className="iframeContainer" style={{ padding: "24px" }}>
              <iframe
                src={GetEmbededFromGmap(props.Embeded ?? "")}
                width="100%"
                height="400px"
                style={{}}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  function CardInfo(params: {
    title: string;
    image: string;
    date: Date;
    lokasi: string;
    map: string;
  }) {
    return (
      <div key={"123"} className="col-10 mt-3">
        <div className="row">
          <motion.img
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay: 0.8 }}
            src={params.image}
            style={{
              borderTopRightRadius: 50,
              backgroundSize: "cover",
              borderTopLeftRadius: 50,
            }}
            width={"100%"}
            height={"100%"}
            alt=""
          />
        </div>
        <div className="row justify-content-center m-1 ">
          <motion.div
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-md-3 col-sm-3 col-3 text-center d-flex justify-content-center align-items-center info-text"
          >
            <h3
              className="info-h3"
              style={{
                fontSize: "4rem",
                fontFamily: "Dancing script",
                fontWeight: 800,
                writingMode: "vertical-rl",
                textOrientation: "mixed",
                transform: "rotate(180deg)",
              }}
            >
              {params.title}
            </h3>
          </motion.div>
          <motion.div
            animate={controls}
            initial={AnimationThemeInstance.FadeUp}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="col-md-9 col-sm-9 col-9 text-center bg-light"
            style={{ color: "black" }}
          >
            <div className="row">
              <div className="col-4  align-items-end">
                <motion.h4
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 0.8, delay: 1.3 }}
                  style={{
                    fontSize: "25px",
                    fontFamily: "brilon",
                    fontWeight: 400,
                    marginTop: "1rem",
                  }}
                >
                  {TimeConvertionFullDate(params.date.toString()).dayOfWeek}{" "}
                </motion.h4>
                <motion.h4
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 0.8, delay: 1.4 }}
                  style={{
                    fontSize: "60px",
                    fontFamily: "brilon",
                    fontWeight: 500,
                  }}
                >
                  {TimeConvertionFullDate(params.date.toString()).dateToString}
                </motion.h4>
              </div>
              <div className="col-8 d-flex justify-content-start align-items-end ">
                <motion.h4
                  animate={controls}
                  initial={AnimationThemeInstance.FadeUp}
                  transition={{ duration: 0.8, delay: 1.5 }}
                  style={{
                    fontSize: "16px",
                    marginBottom: "20px",
                    fontFamily: "brilon",
                    fontWeight: 500,
                    letterSpacing: "1px",
                    marginTop: "2rem",
                  }}
                >
                  {TimeConvertionFullDate(params.date.toString()).monthandYear}
                </motion.h4>
              </div>
            </div>
            <div
              style={{
                width: "100%",
                height: "1px",
                backgroundColor: "black",
                marginBottom: "1rem",
                marginTop: "1rem",
              }}
            ></div>
            <motion.span
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 1.6 }}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "2rem ",
              }}
            >
              <i
                className="bi bi-alarm-fill"
                style={{ marginRight: "0.4rem" }}
              ></i>
              <p style={{ letterSpacing: "2px", margin: 0 }}>
                {TimeConvertionFullDate(params.date.toString()).formattedTime}
              </p>
            </motion.span>
            <motion.h4
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 1.7 }}
              style={{ marginBottom: "2rem", letterSpacing: "1px" }}
            >
              Tempat
            </motion.h4>
            <motion.p
              animate={controls}
              initial={AnimationThemeInstance.FadeUp}
              transition={{ duration: 0.8, delay: 1.7 }}
              style={{
                fontSize: "1.6rem",
                letterSpacing: "0.5px",
                marginBottom: "4rem",
              }}
            >
              {params.lokasi}
            </motion.p>
            <div className="row justify-content-center mb-5">
              <div className="col-9 d-flex align-items-center justify-content-center">
                <a
                  className="btn ext-center"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    // hei
                    minWidth: "100%",
                  }}
                  href={params.map}
                >
                  <i className="bi bi-geo-alt-fill"> {"    "}Google Map</i>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }
};

export default InfoView;
