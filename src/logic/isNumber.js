export default function isNumber(str) {
  const reg = /^\d+$/;
  return reg.test(str);
}
