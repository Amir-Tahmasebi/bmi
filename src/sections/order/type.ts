export type ProfileType = {
    tip: string,
    bmi: number,
    weight: string,
    height: string,
    fitnessLevel: string,
    foodTaste: string,
    lifestyle: string,
    metabolism: string
}

export type GoalType = {
    weight: string,
    idealWeight: string
}

export type ChartDataType = number[]

export type OrderType = {
    id: string;
    gender: "man" | 'woman';
    profile: ProfileType;
    goal: GoalType;
    selectedPlanChartData: number[]
}