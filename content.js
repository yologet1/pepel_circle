// ==============================
// ==== ТВОЙ КОД: НЕ МЕНЯТЬ! ====
// ==============================

console.log('[Pepelon] Content.js loaded!');
function ensureQRiousLoaded(callback) {
  if (window.QRious) return callback();
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/qrious@4.0.2/dist/qrious.min.js';
  script.onload = callback;
  document.head.appendChild(script);
}
function injectQRiousSync(callback) {
  if (window.QRious) return callback();
  fetch(chrome.runtime.getURL('qrious.min.js'))
    .then(r => r.text())
    .then(code => {
      const s = document.createElement('script');
      s.textContent = code + "\n//# sourceURL=qrious-injected.js";
      document.documentElement.appendChild(s);
      s.remove();
      callback();
    });
}


function isPepelonLink(href) {
  if (/^https:\/\/pepelonmyown\.ru\/[a-zA-Z0-9]{6,}$/.test(href)) return 'short';
  if (/^https:\/\/pepelonmyown\.ru\/c\/[a-zA-Z0-9]+\.(mp4|webm|gif|png|jpg|jpeg)$/.test(href)) return 'directc';
  if (/^https:\/\/pepelonmyown\.ru\/upload\/[a-zA-Z0-9]+\.(mp4|webm|gif|png|jpg|jpeg)$/.test(href)) return 'directupload';
  return false;
}

function processAllLinks() {
  document.querySelectorAll('a').forEach(link => {
    if (link.dataset.pepelonWrapped === "1") return;
    const type = isPepelonLink(link.href);
    if (!type) return;

    if (type === 'short') {
      const id = link.href.split('/').pop();
      tryVideo(`https://pepelonmyown.ru/c/${id}.mp4`, link, () => {
        checkImage(`c/${id}`, ["gif", "png", "jpg", "jpeg"], link, () => {
          tryVideo(`https://pepelonmyown.ru/upload/${id}.mp4`, link, () => {
            checkImage(`upload/${id}`, ["gif", "png", "jpg", "jpeg"], link);
          });
        });
      });
    }
    if (type === 'directc' || type === 'directupload') {
      let ext = link.href.split('.').pop().toLowerCase();
      if (["mp4", "webm"].includes(ext)) {
        tryVideo(link.href, link);
      } else if (["gif", "png", "jpg", "jpeg"].includes(ext)) {
        tryImage(link.href, link);
      }
    }
    link.dataset.pepelonWrapped = "1";
    if (link.parentElement) link.parentElement.dataset.pepelonWrapped = "1";
  });
}

function tryVideo(videoUrl, link, onerror) {
  const video = document.createElement("video");
  video.src = videoUrl;
  video.controls = true;
  video.autoplay = true;
  video.muted = true;
  video.loop = true;
  video.className = "pepelon-circle-video";
  video.onloadedmetadata = () => wrapAndReplace(link, video);
  video.onerror = () => { if (onerror) onerror(); };
}

function tryImage(imgUrl, link, onerror) {
  const img = new Image();
  img.src = imgUrl;
  img.style.maxWidth = "300px";
  img.style.display = "block";
  img.onload = () => wrapAndReplace(link, img);
  img.onerror = () => { if (onerror) onerror(); };
}

function checkImage(base, extensions, link, onerror) {
  if (extensions.length === 0) {
    if (onerror) onerror();
    return;
  }
  const ext = extensions.shift();
  const imgUrl = `https://pepelonmyown.ru/${base}.${ext}`;
  tryImage(imgUrl, link, () => checkImage(base, extensions, link, onerror));
}

function wrapAndReplace(link, media) {
  const wrapper = document.createElement("a");
  wrapper.href = link.href;
  wrapper.target = "_blank";
  wrapper.dataset.pepelonWrapped = "1";
  wrapper.appendChild(media);
  link.replaceWith(wrapper);
}

setInterval(processAllLinks, 3000);

(function(){
  if (window.pepelonCircleWidgetLoaded) return;
  window.pepelonCircleWidgetLoaded = true;

  let widget = null, myID = '', pollingTimeout = null, recorder = null, stream = null, chunks = [], blob = null;
  let chatBtn = null; // кнопка "Кружок"
  let closeOnOutsideClick = null;

  function randomID(len = 8) {
    const dict = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let s = '';
    for (let i = 0; i < len; ++i) s += dict[Math.floor(Math.random() * dict.length)];
    return s;
  }

  async function pollForLink(linkInput, progress, qrWrap, mainActions) {
    if (!myID) return;
    const resp = await fetch('https://pepelonmyown.ru/get_link.php?to=' + myID);
    const link = await resp.text();
    if (link && link.length > 5) {
      linkInput.value = link;
      progress.textContent = "Кружок с телефона получен — можешь скопировать!";
      qrWrap.style.display = "none";
      mainActions.style.display = "";
      if (pollingTimeout) clearTimeout(pollingTimeout);
    } else {
      pollingTimeout = setTimeout(()=>pollForLink(linkInput, progress, qrWrap, mainActions), 1200);
    }
  }

  function pepelonShowWidget() {
    if (widget) {
      hidePepelonWidget();
      return;
    }

    navigator.mediaDevices.getUserMedia({ video: { width: 480, height: 480 }, audio: true })
      .then(s => { s.getTracks().forEach(t => t.stop()); renderWidget(); })
      .catch(() => alert("Нет доступа к камере или микрофону!"));
  }

  function hidePepelonWidget() {
    const w = document.getElementById('pepelonWidget');
    if (w) w.remove();
    widget = null;
    if (pollingTimeout) clearTimeout(pollingTimeout);
    if (stream) try { stream.getTracks().forEach(t => t.stop()); } catch(e){}
    document.removeEventListener('mousedown', closeOnOutsideClick, true);
  }

  function renderWidget() {
    // --- Стили для красивых кнопок, только 1 раз ---
    if(!document.getElementById('pepelon-btn-row-style')) {
      let style = document.createElement('style');
      style.id = 'pepelon-btn-row-style';
      style.textContent = `.pepelon-btn-row{margin:18px 0 12px 0;display:flex;flex-direction:row;gap:8px;justify-content:center;}
      .pepelon-btn-row button{background:linear-gradient(90deg,#fd8cea 0%,#5b62ff 90%);color:#fff;font-size:0.9em;font-family:inherit;border:none;border-radius:14px;box-shadow:0 2px 10px #fd8cea22;padding:8px 16px;cursor:pointer;outline:none;transition:filter .14s,box-shadow .13s,transform .09s;letter-spacing:.01em;}
      .pepelon-btn-row button:disabled{background:#2d224e !important;color:#aba7d7 !important;opacity:.73;cursor:default;box-shadow:none;}
      .pepelon-btn-row button:hover:not(:disabled){filter:brightness(1.11);box-shadow:0 4px 18px #b392f9;transform:scale(1.06) translateY(-2px);}`;
      document.head.appendChild(style);
    }

    const html = `
      <div id="pepelonWidget" style="
        position: fixed; right: 8px; bottom:94px; z-index:100001;
        background:#191120f9;border-radius:17px;box-shadow:0 4px 24px #000b;
        padding:17px 14px 14px 14px;width:324px;text-align:center;border:2px solid #4831a8;font-family:inherit;">
        <div style="font-weight:bold;font-size:1.13em;color:#b3bdfc;margin-bottom:6px;">Кружок для чата</div>
        <div id="mainActions">
          <div id="circleBox" style="width:220px;height:220px;margin:0 auto 10px auto;position:relative;">
            <img id="standbyGif" src="${chrome.runtime.getURL('standby.gif')}" alt="Ожидание" style="width:220px;height:220px;border-radius:50%;object-fit:cover;position:absolute;top:0;left:0;z-index:2;display:block;">
            <video id="preview" autoplay muted playsinline style="width:220px;height:220px;border-radius:50%;object-fit:cover;background:#232129;display:none;box-shadow:0 6px 28px #3e1f5619;position:absolute;top:0;left:0;z-index:3;"></video>
          </div>
          <div class="pepelon-btn-row">
            <button id="start">Записать</button>
            <button id="stop" disabled>Остановить</button>
            <button id="upload" disabled>Загрузить</button>
          </div>
          <div id="progress" style="color:#93f6fa;margin:8px 0 4px 0;min-height:17px;"></div>
          <input id="link" readonly style="background:#23213d;color:#d6e2ff;border:1px solid #283250;font-size:1em;border-radius:7px;padding:7px 4px;margin:17px auto 7px auto;width:92%;word-break:break-all;text-align:center;cursor:pointer;transition:box-shadow .11s;">
          <hr style="border:none;border-top:1.5px solid #22203a;margin:10px 0 4px 0;">
          <button id="qrBtn">QR-код для телефона</button>
        </div>
        <div id="qrWrap" style="display:none;width:220px;min-height:220px;margin:0 auto 10px auto;flex-direction:column;align-items:center;justify-content:center;position:relative;">
          <div id="qr" style="display:flex;align-items:center;justify-content:center;margin-bottom:17px;"></div>
          <button id="backBtn" style="background:#23213d;color:#b3bdfc;border:1px solid #463375;margin-top:14px;font-size:0.98em;padding:8px 26px;border-radius:7px;box-shadow:none;transition:background .14s;">Назад</button>
        </div>
      </div>
    `;
    widget = document.createElement('div');
    widget.innerHTML = html;
    document.body.appendChild(widget.firstElementChild);

    // --- Закрытие по клику вне виджета ---
    closeOnOutsideClick = function(e) {
      const el = document.getElementById('pepelonWidget');
      if (el && !el.contains(e.target) && (!chatBtn || !chatBtn.contains(e.target))) {
        hidePepelonWidget();
      }
    };
    document.addEventListener('mousedown', closeOnOutsideClick, true);

    // --- Остальной JS обработчики ---
    const preview = document.getElementById('preview');
    const standbyGif = document.getElementById('standbyGif');
    const startBtn = document.getElementById('start');
    const stopBtn = document.getElementById('stop');
    const uploadBtn = document.getElementById('upload');
    const linkInput = document.getElementById('link');
    const progress = document.getElementById('progress');
    const qrBtn = document.getElementById('qrBtn');
    const mainActions = document.getElementById('mainActions');
    const qrWrap = document.getElementById('qrWrap');
    const qrBox = document.getElementById('qr');
    const backBtn = document.getElementById('backBtn');

    recorder = null; stream = null; chunks = []; blob = null;

    startBtn.onclick = async () => {
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: { width: 480, height: 480 }, audio: true });
        standbyGif.style.display = "none";
        preview.style.display = "block";
        preview.srcObject = stream;
        chunks = [];
        recorder = new MediaRecorder(stream, { mimeType: 'video/webm; codecs=vp9' });
        recorder.ondataavailable = e => chunks.push(e.data);
        recorder.onstop = () => {
          stream.getTracks().forEach(t => t.stop());
          blob = new Blob(chunks, { type: 'video/webm' });
          uploadBtn.disabled = false;
          progress.textContent = "Готово! Нажмите 'Загрузить'.";
          preview.src = URL.createObjectURL(blob);
          preview.srcObject = null;
          preview.play();
        };
        recorder.start();
        startBtn.disabled = true;
        stopBtn.disabled = false;
        uploadBtn.disabled = true;
        progress.textContent = "Запись...";
      } catch (e) {
        progress.textContent = "Нет доступа к камере! (" + e.name + ")";
        standbyGif.style.display = "block";
        preview.style.display = "none";
      }
    };

    stopBtn.onclick = () => {
      if (recorder && recorder.state === "recording") {
        recorder.stop();
        startBtn.disabled = false;
        stopBtn.disabled = true;
        progress.textContent = "Обработка...";
      }
    };

    uploadBtn.onclick = async () => {
      if (blob) {
        progress.textContent = "Загрузка файла...";
        await uploadCircle();
      }
    };

    async function uploadCircle() {
      const formData = new FormData();
      formData.append('file', blob, 'circle.webm');
      try {
        const resp = await fetch("https://pepelonmyown.ru/upload1.php", {
          method: "POST",
          body: formData
        });
        const data = await resp.json();
        if (data.link) {
          linkInput.value = data.link;
          progress.textContent = "Готово! Кружок доступен по ссылке!";
        } else {
          progress.textContent = data.error || "Ошибка загрузки.";
        }
      } catch (error) {
        progress.textContent = "Сетевая ошибка: " + error;
      } finally {
        startBtn.disabled = false;
        uploadBtn.disabled = true;
      }
    }

    linkInput.style.cursor = "pointer";
    linkInput.onclick = () => {
      if (linkInput.value) {
        linkInput.select();
        document.execCommand('copy');
        progress.textContent = "Скопировано!";
        setTimeout(() => linkInput.setSelectionRange(0, 0), 150);
      }
    };

    qrBtn.onclick = () => {
      mainActions.style.display = "none";
      qrWrap.style.display = "flex";
      myID = randomID();
      const url = `https://pepelonmyown.ru/mobile_upload.html?to=${myID}`;
      qrBox.innerHTML = '';
      new QRious({ element: qrBox.appendChild(document.createElement('canvas')), value: url, size: 180 });
      progress.textContent = "Считай QR на телефоне. После записи кружка ссылка появится ниже!";
      pollForLink(linkInput, progress, qrWrap, mainActions);
    };

    backBtn.onclick = () => {
      qrWrap.style.display = "none";
      mainActions.style.display = "";
      progress.textContent = "";
      if (!preview.srcObject && (!preview.src || preview.src === "")) {
        standbyGif.style.display = "block";
        preview.style.display = "none";
      }
      if (pollingTimeout) clearTimeout(pollingTimeout);
    };

    qrWrap.style.display = "none";
    standbyGif.style.display = "block";
    preview.style.display = "none";
  }

  // === Кнопка "Кружок" появляется только если есть .chat-wysiwyg-input__placeholder[Отправить сообщение] ===
  function chatBtnWatcher() {
    function updateBtnPlacement() {
      const placeholder = Array.from(document.querySelectorAll('div.chat-wysiwyg-input__placeholder'))
        .find(el => el.textContent && el.textContent.trim().includes('Отправить сообщение'));
      if (placeholder && !chatBtn) {
        chatBtn = document.createElement('button');
        chatBtn.style = `
            position: fixed; right: 85px; bottom: 62px; z-index: 999999;
            width: 20px; height: 10px;
            background: transparent;
            color: #fff; font-size: 1.15em; border: 2px solid #fff; border-radius: 50%;
            padding: 0;
            box-shadow: 0 2px 8px #0005;
            cursor: pointer; font-family: inherit;
            display: flex; align-items: center; justify-content: center;
            transition: filter 0.13s;
        `;
        chatBtn.onclick = pepelonShowWidget;
        document.body.appendChild(chatBtn);
      }
      if (!placeholder && chatBtn) {
        chatBtn.remove();
        chatBtn = null;
      }
    }
    const observer = new MutationObserver(updateBtnPlacement);
    observer.observe(document.body, { childList: true, subtree: true });
    updateBtnPlacement();
  }

  chatBtnWatcher();
})();














