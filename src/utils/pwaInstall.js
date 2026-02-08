let deferredPrompt = null;

export const initPwaInstall = () => {
    if (typeof window === 'undefined') return;

    window.addEventListener('beforeinstallprompt', (e) => {
        e.preventDefault();
        deferredPrompt = e;
    });

    window.addEventListener('appinstalled', () => {
        deferredPrompt = null;
    });
};

export const getDeferredPrompt = () => deferredPrompt;

export const clearDeferredPrompt = () => {
    deferredPrompt = null;
};
