import { Bar, BarChart, CartesianGrid, ResponsiveContainer, XAxis, YAxis } from "recharts"

import {
  CardContent,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart"
import { useEffect } from "react"

const chartConfig = {
  thisYear: {
    label: "This year",
    color: "#0066FF",
  },
  lastYear: {
    label: "Last year",
    color: "#99CCFF",
  },
} satisfies ChartConfig

export function BarGraph({chartData}: {chartData: any}) {

    useEffect(() => {
        console.log("chart", chartData)
    })

  return (
    <div>
      <CardContent className="pb-0 flex justify-center items-center w-full h-full" >
        <ChartContainer config={chartConfig} className="w-full h-[250px]">
          <ResponsiveContainer width="100%" height="100%" className="flex-1">
            <BarChart 
              data={chartData} 
              barSize={24}
              barGap={4}
              barCategoryGap={40}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              className="flex flex-1"
            >
              <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
              <XAxis
                dataKey="Month"
                tickLine={false}
                axisLine={false}
                dy={10}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value / 1000}k`}
                dx={-10}
              />
              <ChartTooltip
                
                cursor={false}
                content={({ active, payload }) => {
                    console.log("payload", payload);
                  if (!active || !payload) return null
                  return (
                    <div className="rounded-lg border bg-white p-2 shadow-sm">
                      <div className="grid grid-cols-2 gap-2">
                        {payload.map((entry: any) => (
                        
                          <div key={entry.name} className="flex flex-col">
                            
                            <div className="flex items-center gap-1.5">
                              <div 
                                className="h-2.5 w-2.5 rounded-sm"
                                style={{ backgroundColor: entry.fill }}
                              />
                              <span 
                                className="text-[0.70rem] uppercase text-muted-foreground"

                              >
                                {entry.name === "This_year" ? "This year" : "Last year"}
                              </span>
                            </div>
                            <span className="font-bold">
                              {Number(entry.value).toLocaleString()}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )
                }}
              />
              <Bar 
                dataKey="Last_year" 
                fill={chartConfig.lastYear.color}
                radius={[4, 4, 4, 4]} 
              />
              <Bar 
                dataKey="This_year" 
                fill={chartConfig.thisYear.color}
                radius={[4, 4, 4, 4]} 
              />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </div>
  )
}

