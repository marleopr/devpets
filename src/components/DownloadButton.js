import { useEffect, useState } from "react";
import { FaDownload } from "react-icons/fa";
import { toast } from "react-toastify";
import styled from "styled-components";
import colors from "../constants/colors"

const DownloadButton = () => {
    const [deferredPrompt, setDeferredPrompt] = useState(null);
    const [isInstalled, setIsInstalled] = useState(false);

    useEffect(() => {
        const isAppInstalled = localStorage.getItem("isAppInstalled");
        if (isAppInstalled) {
            setIsInstalled(true);
        } else {
            window.addEventListener("beforeinstallprompt", (event) => {
                event.preventDefault();
                setDeferredPrompt(event);
            });
        }
    }, []);

    const handleInstallApp = () => {
        if (deferredPrompt) {
            deferredPrompt.prompt();
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    toast.success("Usuário aceitou a instalação");
                    localStorage.setItem("isAppInstalled", true);
                    setIsInstalled(true);
                } else {
                    toast.error("Usuário recusou a instalação");
                }
                setDeferredPrompt(null);
            });
        }
    };

    return (
        <>
            {!isInstalled && (
                <IconeDownload onClick={handleInstallApp} />
            )}
        </>
    );
};

export default DownloadButton;
const IconeDownload = styled(FaDownload)`
    color: white;
    width: 32px;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 10px;
    z-index: 99;
    cursor: pointer;
    :hover{
        color: ${colors.blue};
    }
    :active {
        color: ${colors.blueNavy};
    }
`