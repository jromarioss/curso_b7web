export function formatTime(time) {
  let minutes = Math.floor(time / 60);
  time = time - (minutes * 60);

  const minute = String(minutes).padStart(2, "0");
  const second = String(time).padStart(2, "0");

  return `${minute}:${second}`;
}