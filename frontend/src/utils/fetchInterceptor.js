// src/utils/fetchInterceptor.js

const originalFetch = window.fetch;

window.fetch = async (input, init) => {
    const localUrl = "http://localhost:3001";
    const liveUrl = "https://testlink.registerwithus.in";

    if (typeof input === "string" && input.startsWith(localUrl)) {
        try {
            // Pehle local try karo
            const res = await originalFetch(input, init);
            if (res.ok) return res;

            console.warn("⚠ Local backend failed. Trying live backend...");
            const newUrl = input.replace(localUrl, liveUrl);
            return await originalFetch(newUrl, init);
        } catch (err) {
            console.warn("⚠ Local backend unreachable. Trying live backend...");
            const newUrl = input.replace(localUrl, liveUrl);
            return await originalFetch(newUrl, init);
        }
    }

    return originalFetch(input, init);
};
