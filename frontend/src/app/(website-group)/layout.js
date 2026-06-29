import Footer from "@/components/website/global/Footer";
import Header from "@/components/website/global/Header";
import getMe from "@/services/auth";

export default async function WebsiteLayout({ children }) {
    const { user } = await getMe();
     
    return (
        <>
            <Header user={user} /> {/* user will be null if not logged in */}
            <main>
                {children}
            </main>
            <Footer />
        </>
    );
}