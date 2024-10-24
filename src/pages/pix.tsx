import Pay from "../components/payment-section/payment-section.tsx"; // Verifique o caminho
import Sidebar from "../components/sidebar/sidebar";
import TitleInput from "../components/title-input/title-input";

export function PixPage() {
    return (
        <div style={{ backgroundColor: "#1B1B1B", display: "flex", height: "100vh" }}>
            <Sidebar />
            <div style={{width:"100%"}}>
                <TitleInput />
                <Pay />
            </div>
        </div>
    );
}
