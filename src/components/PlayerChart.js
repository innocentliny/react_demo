import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./PlayerChart.css";

// "2026-10-16" -> "10/16"
const formatDay = (iso) => iso.slice(5).replace("-", "/");
// 612340 -> "612k"
const formatThousands = (n) => `${Math.round(n / 1000)}k`;
// 612340 -> "612,340"
const formatCount = (n) => n.toLocaleString("en-US");

export default function PlayerChart({ data }) {
  return (
    <section className="player-chart">
      <header className="player-chart__header">
        <img
            className="player-chart__logo"
            src="https://upload.wikimedia.org/wikipedia/en/3/31/Dota_2_Steam_artwork.jpg"
            alt="dota2_logo"/>
        <h2 className="player-chart__title">Dota 2 每日上線玩家數（近 7 天）</h2>
      </header>

      {/* ResponsiveContainer 會填滿父層，所以父層一定要有明確高度 */}
      <div className="player-chart__canvas">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 8, right: 16, bottom: 0, left: 8 }}>
            <CartesianGrid stroke="#e5e7eb" vertical={false} />
            <XAxis dataKey="date" tickFormatter={formatDay} stroke="#6b7280" />
            <YAxis
              width={48}
              stroke="#6b7280"
              // 不從 0 開始，才看得出 7 天內的起伏
              domain={["dataMin - 20000", "dataMax + 20000"]}
              tickFormatter={formatThousands}
            />
            <Tooltip
              contentStyle={{ background: "#ffffff", border: "1px solid #e5e7eb" }}
              labelStyle={{ color: "#374151" }}
              labelFormatter={formatDay}
              formatter={(value) => [formatCount(value), "玩家數"]}
            />
            <Line
              type="monotone"
              dataKey="players"
              stroke="#d93036"
              strokeWidth={2.5}
              dot={{ r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
