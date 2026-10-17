const DAYS = 7;
const BASE_PLAYERS = 590000; // 平日基準值
const WEEKEND_BOOST = 20000; // 週六、週日加成
const NOISE_RANGE = 15000; // 隨機浮動 ±15000

const pad = (n) => String(n).padStart(2, "0");

// 用本地時間組出 "YYYY-MM-DD"（不用 toISOString，避免被轉成 UTC 而差一天）
const toLocalISODate = (date) =>
  `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;

// 產生「以 endDate 為最後一天、往前共 days 天」的假資料，由舊到新排列
export function generateMockPlayerStats(days = DAYS, endDate = new Date()) {
  return Array.from({ length: days }, (_, i) => {
    const date = new Date(endDate);
    date.setDate(date.getDate() - (days - 1 - i));

    const isWeekend = date.getDay() === 0 || date.getDay() === 6;
    const noise = Math.round((Math.random() * 2 - 1) * NOISE_RANGE);

    return {
      date: toLocalISODate(date),
      players: BASE_PLAYERS + (isWeekend ? WEEKEND_BOOST : 0) + noise,
    };
  });
}

// 模組載入時只產生一次，所有元件拿到的是同一份資料
export const mockPlayerStats = generateMockPlayerStats();
