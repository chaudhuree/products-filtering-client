import {
  FaSquareFacebook,
  FaSquareTwitter,
  FaSquareInstagram,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by Pashei
          Industries Ltd
        </p>
        <p className="  flex justify-center items-center gap-4 min-w-[25%] mx-auto">
          <FaSquareFacebook className="text-2xl text-blue-600" />
          <FaSquareTwitter className="text-2xl text-sky-600" />
          <FaSquareInstagram className="text-2xl text-red-600" />
        </p>
      </aside>
    </footer>
  );
}
