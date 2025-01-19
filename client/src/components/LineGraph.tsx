import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartConfig = {
  desktop: {
    label: "Web sales",
    color: "#0066FF",
  },
  mobile: {
    label: "Offline sales",
    color: "#99CCFF",
  },
} satisfies ChartConfig

export function LineGraph({chartData}: {chartData: any}) {

    if (!chartData) {
        return null;
    }

  return (

      <CardContent className="w-full p-0 m-0">
        <ChartContainer config={chartConfig} className="w-full h-full p-0 m-0">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: -20,
              right: 10,
              top: 10
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis tick={false} axisLine={false} />
            <YAxis
                tickLine={false}
                axisLine={false}
                interval={0}
                tickFormatter={(value) => `${value / 1000}k`}
                dx={-10}
            />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="web_sales"
              type="monotone"
              stroke="var(--color-desktop)"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="offline_sales"
              type="monotone"
              stroke="var(--color-mobile)"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>

  )
}

