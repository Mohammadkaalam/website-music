import { ReactNode } from "react";    // یعنی هر چیزی که بشه داخل (ج اس ایکس) قرار داد
import "./Layout.css";

interface Props {
    children: ReactNode;
}

const Layout = ({ children }: Props) => {  // ا(لای اوت)، یک پراپ به نام چیلدرن دریافت می‌کنه، که نوعش باید( ریاکت نود) باشه.
    return (
        <div className="app-container">
            <header className="app-header">🎵 Music App</header>
            <main className="app-main">{children}</main>        
            <footer className="app-footer">© 2025 موسیقی من</footer>
        </div>
    );
};

export default Layout;
