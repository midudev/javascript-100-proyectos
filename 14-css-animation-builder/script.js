

const box = document.getElementById('preview-box');
const output = document.getElementById('output');
const copyBtn = document.getElementById('copy-btn');

const controls = {
  tx: document.getElementById('tx'),
  ty: document.getElementById('ty'),
  scale: document.getElementById('scale'),
  rotate: document.getElementById('rotate'),
  opacity: document.getElementById('opacity'),
  duration: document.getElementById('duration'),
  delay: document.getElementById('delay'),
  easing: document.getElementById('easing'),
  iterations: document.getElementById('iterations'),
  direction: document.getElementById('direction')
};

function getSettings() {
  const tx = Number(controls.tx.value) || 0;
  const ty = Number(controls.ty.value) || 0;
  const scale = Number(controls.scale.value) || 1;
  const rotate = Number(controls.rotate.value) || 0;
  const opacity = Number(controls.opacity.value);
  const duration = Number(controls.duration.value) || 1;
  const delay = Number(controls.delay.value) || 0;
  const easing = controls.easing.value || 'ease';
  const iterationsRaw = Number(controls.iterations.value);
  const iterations = iterationsRaw > 0 ? iterationsRaw : 1;
  const direction = controls.direction.value || 'normal';

  return {
    tx,
    ty,
    scale,
    rotate,
    opacity,
    duration,
    delay,
    easing,
    iterations,
    direction
  };
}

function ensureStyleTag() {
  let styleTag = document.getElementById('dynamic-keyframes');
  if (!styleTag) {
    styleTag = document.createElement('style');
    styleTag.id = 'dynamic-keyframes';
    document.head.appendChild(styleTag);
  }
  return styleTag;
}

function buildCSS(settings) {
  const {
    tx,
    ty,
    scale,
    rotate,
    opacity,
    duration,
    delay,
    easing,
    iterations,
    direction
  } = settings;

  const fromTransform = 'translate(0px, 0px) scale(1) rotate(0deg)';
  const toTransform = `translate(${tx}px, ${ty}px) scale(${scale}) rotate(${rotate}deg)`;
  const fromOpacity = 1;
  const toOpacity = opacity;

  const animationLine = `animation: myAnim ${duration}s ${easing} ${delay}s ${iterations} ${direction};`;

  const keyframes = `
@keyframes myAnim {
  from {
    transform: ${fromTransform};
    opacity: ${fromOpacity};
  }
  to {
    transform: ${toTransform};
    opacity: ${toOpacity};
  }
}
`.trim();

  const css = `.my-element {
  ${animationLine}
}

${keyframes}
`;

  return { css, keyframes, animationLine };
}

function applyAnimation() {
  const settings = getSettings();
  const { css, keyframes, animationLine } = buildCSS(settings);

  // Restart animation
  box.style.animation = 'none';
  // Force reflow so the browser picks up the reset
  void box.offsetWidth;

  box.style.animation = `myAnim ${settings.duration}s ${settings.easing} ${settings.delay}s ${settings.iterations} ${settings.direction}`;

  const styleTag = ensureStyleTag();
  styleTag.textContent = keyframes;

  output.value = css;
}

function attachListeners() {
  Object.values(controls).forEach((el) => {
    const eventName = el.tagName === 'SELECT' ? 'change' : 'input';
    el.addEventListener(eventName, applyAnimation);
  });

  copyBtn.addEventListener('click', () => {
    const text = output.value.trim();
    if (!text) return;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => flashCopyState(), () => fallbackCopy(text));
    } else {
      fallbackCopy(text);
    }
  });
}

function fallbackCopy(text) {
  output.focus();
  output.select();
  try {
    document.execCommand('copy');
    flashCopyState();
  } catch (err) {
    // ignore
  } finally {
    output.setSelectionRange(0, 0);
    output.blur();
  }
}

function flashCopyState() {
  const original = copyBtn.textContent;
  copyBtn.textContent = 'copied';
  copyBtn.disabled = true;

  setTimeout(() => {
    copyBtn.textContent = original;
    copyBtn.disabled = false;
  }, 1200);
}

attachListeners();
applyAnimation();