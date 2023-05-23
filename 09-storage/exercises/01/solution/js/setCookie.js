
function setCookie(text) {
    const now = new Date();
    const expirationTime = Date.now() + (15 * 60 * 1000);
    now.setTime(expirationTime);
    const expires = now.toUTCString();
    document.cookie = `token=${text};expires=${expires}`;
}

export default setCookie;
