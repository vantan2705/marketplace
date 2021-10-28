import Box from "@mui/material/Box";
import StatFilterItem from "./stat-item/StatFilterItem";

export default function StatsFilter(props) {
  return <Box>
    <StatFilterItem min={27} max={61} value={27} />
    <StatFilterItem min={27} max={61} value={27} />
    <StatFilterItem min={27} max={61} value={27} />
    <StatFilterItem min={27} max={61} value={27} />
    <StatFilterItem min={27} max={61} value={27} />
  </Box>
}