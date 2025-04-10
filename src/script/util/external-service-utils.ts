export const loadNaverMapScript = (src: string, onload: () => void) => {
  const id = "naver-map-script";
  const existScript = document.querySelector(`#${id}`);

  if (existScript) return;
  const script = document.createElement("script");
  script.type = "text/javascript";
  script.id = id;
  script.src = src;
  script.onload = () => onload();
  document.body.appendChild(script);
};
