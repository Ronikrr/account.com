import { IoMdMenu } from "react-icons/io";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
const AdminHeader = () => {
    return (
        <div className="navbar shadow ">
           
            <div className="flex-1 hidden">
                <button>
                <IoMdMenu className="text-black text-xl"  />
                </button>
            </div>
            <div className="flex gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
                <div className="dropdown dropdown-end">
                    <SignedOut>
                        <SignInButton />
                    </SignedOut>
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </div>
        </div>
    );
};

export default AdminHeader;
