import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'
import { RenderCalculation } from './RenderCalculations'
import { format } from 'date-fns'
import { performCalculations } from '@/utils/performCalculations'

export function DateSelector() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const [calculated, setCalculated] = useState(false)

  return (
    <>
      {!calculated && (
        <div className="grid place-items-center gap-2">
          <div className="grid grid-cols-3 gap-2">
            <p className="font-bold">Start Date: </p>
            <DatePicker
              className="col-span-2 rounded-lg border border-slate-700 px-2 text-right"
              dateFormat="yyyy/MM/dd-HH:mm:ss"
              endDate={endDate}
              onChange={(date: Date) => setStartDate(date)}
              selected={startDate}
              selectsStart
              showTimeSelect
              startDate={startDate}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <p className="font-bold">End Date: </p>
            <DatePicker
              className="col-span-2 rounded-lg border border-slate-700 px-2 text-right"
              dateFormat="yyyy/MM/dd-HH:mm:ss"
              endDate={endDate}
              onChange={(date: Date) => setEndDate(date)}
              selected={endDate}
              selectsEnd
              showTimeSelect
              startDate={startDate}
            />
          </div>
          {!calculated && (
            <button
              className="m-4 w-full rounded-xl bg-green-200 p-3 text-lg font-semibold text-green-700 transition  duration-300 focus:ring-2 focus:ring-green-500 enabled:hover:bg-green-300 disabled:opacity-70"
              onClick={() => {
                performCalculations(format(startDate, 'yyyy/MM/dd-HH:mm:ss'), format(endDate, 'yyyy/MM/dd-HH:mm:ss'))
                setCalculated(true)
              }}>
              Calculate Distribution
            </button>
          )}
        </div>
      )}
      {calculated && (
        <RenderCalculation />
      )}
    </>
  )
}
