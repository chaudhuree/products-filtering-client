import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
} from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function OAuth() {
  const navigate = useNavigate();
  async function onGoogleClick() {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      navigate("/");
    } catch (error) {
      toast.error("Could not authorize with Google");
    }
  }

  return (
    <div className="flex  items-center gap-5 justify-between flex-wrap container mx-auto">
      <button
        type="button"
        onClick={onGoogleClick}
        className="flex items-center justify-center w-full bg-red-700 text-white px-7 py-2 uppercase text-sm font-medium hover:bg-red-800 active:bg-red-900 shadow-md hover:shadow-lg active:shadow-lg transition duration-150 ease-in-out rounded"
      >
        <FcGoogle className="text-2xl bg-white size-8 rounded-full mr-2 " />
      </button>
     
    </div>
  );
}
