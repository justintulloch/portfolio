'use client'
import { cn } from '@/lib/utils '
import { useState, useEffect } from 'react'


interface RealtimeDateProps {
    format?: 'long' | 'short' | 'numeric' | 'custom'
    customFormat?: Intl.DateTimeFormatOptions
    className?: string
    updateInterval?: number

}


export default function RealtimeDate({
    format = 'long',
    customFormat,
    className = 'meta-date',
    updateInterval = 1000

}: RealtimeDateProps){
    const [currentDate, setCurrentDate] = useState<Date>(new Date())

      useEffect(() => {
    // Update immediately on mount
    setCurrentDate(new Date())

    // Set up interval for real-time updates
    const interval = setInterval(() => {
      setCurrentDate(new Date())
    }, updateInterval)

    // Cleanup interval on unmount
    return () => clearInterval(interval)
  }, [updateInterval])

  const formatDate = (date: Date): string => {
    if (customFormat) {
      return date.toLocaleDateString('en-US', customFormat)
    }

    switch (format) {
      case 'long':
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
      case 'short':
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })
      case 'numeric':
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit'
        })
      default:
        return date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        })
    }
  }





    return (
    <p className={cn('meta-date', className)}>
      {formatDate(currentDate)}
    </p>
    )
}