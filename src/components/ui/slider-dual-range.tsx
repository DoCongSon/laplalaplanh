'use client'

import { cn } from '@/lib/utils'
import React from 'react'
import { Slider } from './slider'

type SliderDualRangeProps = {
  className?: string
  value: number[]
  min?: number
  max?: number
  step?: number
  onValueChange: (value: number[]) => void
}

const SliderDualRange = ({ onValueChange, value, className, max, min, step }: SliderDualRangeProps) => {
  return (
    <Slider
      min={min}
      max={max}
      step={step}
      value={value}
      className={cn('input-range w-full', className)}
      onValueChange={onValueChange}
    />
  )
}

export default SliderDualRange
