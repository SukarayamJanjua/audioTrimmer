import Image from "next/image";
import Head from "next/head";
import Link from 'next/link';
import NavBar from "./navbar";
import Home from "./Home";
// import UploadAndTrim from "./UploadAndTrim";
export default function myApp() {
  return (
    <>
      <Head>
        <title>Audio Cutter</title>

      </Head>
      <div>
        <div className="app-menu-burger">
          <button className="link">
            <svg aria-hidden="true" width="2em" height="2em" fill="currentColor" stroke="">
              <use xlinkHref="#icon-menu-burger"></use>
            </svg>
          </button>
          {/* <UploadAndTrim/> */}
        </div>
        <div className="center">
        <NavBar />
        <Home />
        
        </div>
      </div>
    </>
  );
}
