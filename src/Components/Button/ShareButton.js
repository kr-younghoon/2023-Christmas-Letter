import React, { useState, useCallback } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import styles from './ShareButton.module.css';

const ShareButton = () => {
    const [isMobile, setIsMobile] = useState(false);
    const [isCopied, setIsCopied] = useState(false);

    const shareLink = useCallback(async () => {
        console.log(navigator.share);
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Your Website Title',
                    text: 'Check out this awesome website!',
                    url: window.location.href,
                });
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback for browsers that do not support the Web Share API
            setIsMobile(false);
        }
    }, []);

    const handleCopy = useCallback(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000);
    }, []);

    return (
        <div>
            {isMobile ? (
                <button onClick={shareLink}>Share</button>
            ) : (
                <CopyToClipboard
                    text={window.location.href}
                    onCopy={handleCopy}
                >
                    <div className={styles.ShareButton}>
                        <button>공유하기</button>
                    </div>
                </CopyToClipboard>
            )}
            {isCopied && <div>Link Copied!</div>}
        </div>
    );
};

export default ShareButton;
