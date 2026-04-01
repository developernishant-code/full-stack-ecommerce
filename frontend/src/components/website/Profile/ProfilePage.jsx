import ProfileSidebar from "./ProfileSidebar";
import AccountInfoForm from "./AccountInfoForm";

const ProfilePage = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Sidebar */}
                    <div className="lg:col-span-4">
                        <ProfileSidebar />
                    </div>

                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        <AccountInfoForm />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProfilePage;
