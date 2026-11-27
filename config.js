// 강의실 사이트 공통 설정 — 이 파일 하나만 고치면 세 페이지에 모두 적용된다.
// Apps Script 웹 앱 배포 후 받은 URL(…/exec)을 따옴표 안에 붙여넣는다.
// 비워 두면 '데모 모드'로 각자의 브라우저 안에서만 동작한다.
const API_URL = "https://script.google.com/macros/s/AKfycbzSubDhfkv81_Vg3keIXPmxvxPoCkpsLpWAYAdO3zMufTN6FpNnMbUYeC6--uGHUwqh/exec";

// 특강 정보(시작 페이지 표시용)
const COURSE = {
  title: "AI 바이브코딩 기반 웹/앱 제작",
  date: "2026. 11. 27.(금) 14:00–17:00",
  place: "국립창원대학교 82호관 104호",
  expected: 22 // 예상 참가 인원(제출 현황 막대 기준)
};
