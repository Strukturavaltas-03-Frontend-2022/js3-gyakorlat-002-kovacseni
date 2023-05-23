
function setCookie(text) {
    const expirationTime = new Date(Date.now() + (15 * 60 * 1000));
    const expires = expirationTime.toUTCString();
    document.cookie = `token=${text};expires=${expires}`;
}

export default setCookie;
