// ==UserScript==
// @name         paste-on-chatgpt
// @match        https://chatgpt.com/*
// ==/UserScript==

(() => {
  // execCommand('insertText')
  const buttonInsertText = document.createElement("button");
  buttonInsertText.innerText = "Paste (insert text)";
  buttonInsertText.className = "btn fixed btn-secondary btn-small end-3";
  buttonInsertText.style.cssText = `
  bottom: 45px;
`;

  const textarea = document.querySelector("#prompt-textarea");
  if (!textarea) {
    return;
  }

  buttonInsertText.addEventListener("click", async () => {
    const text = await navigator.clipboard.readText();
    if (!text) {
      return;
    }

    textarea.focus();
    document.execCommand("insertText", false, text);
  });

  document.body.appendChild(buttonInsertText);

  // dispatch event
  const buttonDispatchEvent = document.createElement("button");
  buttonDispatchEvent.innerText = "Paste (dispatch event)";
  buttonDispatchEvent.className = "btn fixed btn-secondary btn-small end-3";
  buttonDispatchEvent.style.cssText = `
    bottom: 90px;
  `;

  const inputEvent = new Event("input", {
    bubbles: true,
    cancelable: true,
  });

  buttonDispatchEvent.addEventListener("click", async () => {
    const text = await navigator.clipboard.readText();
    if (!text) {
      return;
    }

    textarea.value += text;
    textarea.dispatchEvent(inputEvent);
  });

  document.body.appendChild(buttonDispatchEvent);
})();
