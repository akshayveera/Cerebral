import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"


const chartConfig = {
    score: {
      label: "score",
      color: "#0066FF",
    },
    remaining: {
      label: "Remaining",
      color: "lightgray",
    },
  } satisfies ChartConfig;

export function Meter({scoreData}: {scoreData: number | undefined}) {

    const chartData = [{ score: scoreData, remaining: 100 - (scoreData || 0) }]
    const totalVisitors = chartData[0].score || 0;

  return (

      <div className="flex flex-1 items-center pb-0 ">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-auto w-full max-w-[250px] h-[180px]"
        >
          <RadialBarChart
            data={chartData}
            startAngle={180}
            endAngle={0}
            innerRadius={80}
            outerRadius={100}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text x={viewBox.cx} y={viewBox.cy} textAnchor="middle">
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) - 16}
                          className="fill-foreground text-2xl font-bold"
                        >
                          {totalVisitors.toLocaleString()}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 4}
                          className="fill-background"
                        >
                          of 100 points
                        </tspan>
                      </text>
                    )
                  }
                }}
              />
            </PolarRadiusAxis>
            <RadialBar
              dataKey="score"
              stackId="a"
              cornerRadius={5}
              fill="#0066FF"
              className="stroke-transparent stroke-2"
            />
            <RadialBar
              dataKey="remaining"
              stackId="a"
              cornerRadius={5}
              fill="lightgray"
              className="stroke-transparent stroke-2"
            />
          </RadialBarChart>
        </ChartContainer>
      </div>

  )
}

