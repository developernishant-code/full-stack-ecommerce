import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const ProfileSidebar = () => {
    return (
        <div className="bg-gray-50 rounded-xl p-6">

            {/* Avatar */}
            <div className="flex flex-col items-center text-center mb-6">
                <div className="w-32 h-32 rounded-xl overflow-hidden bg-gray-200 mb-4">
                    <Image
                        src="/profile-avatar.png"
                        alt="Profile"
                        width={300}
                        height={300}
                        className="object-cover w-full h-full"
                    />

                </div>

                <h3 className="font-semibold text-lg">Mark Cole</h3>
                <p className="text-sm text-gray-500">swoo@gmail.com</p>
            </div>

            {/* Menu */}
            <div className="space-y-3">

                <button className="profile-menu active">
                    <span>Account info</span>
                    <FaArrowRight />
                </button>

                <button className="profile-menu">
                    <span>My order</span>
                    <FaArrowRight />
                </button>

                <button className="profile-menu">
                    <span>My address</span>
                    <FaArrowRight />
                </button>

                <button className="profile-menu">
                    <span>Change password</span>
                    <FaArrowRight />
                </button>

            </div>
        </div>
    );
};

export default ProfileSidebar;
