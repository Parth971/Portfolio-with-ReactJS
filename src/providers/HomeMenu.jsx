import About from "components/About";
import Contact from "components/Contact";
import Resume from "components/Resume";
import Work from "components/Work";
import { createContext, useState } from "react";


export const menuComponentMapper = {
    'home': About,
    'resume': Resume,
    'work': Work,
    'contact': Contact,
}

export const HomeMenu = createContext(null);

export const HomeMenuProvider = ({ children }) => {
    const [selectedMenuItem, setSelectedMenuItem] = useState("home");

    return (
        <HomeMenu.Provider value={{ selectedMenuItem, setSelectedMenuItem }}>
            {children}
        </HomeMenu.Provider>
    );
};