import { useEffect, useState } from 'react'
import DatePicker from 'react-datepicker'

export function DateSelector() {
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())

  const [calculated, setCalculated] = useState(false)

  useEffect(() => {
    console.log(startDate)
    console.log(endDate)
  }, [startDate, endDate])
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
          <button
            className="m-4 w-full rounded-xl bg-green-200 p-3 text-lg font-semibold text-green-700 transition  duration-300 focus:ring-2 focus:ring-green-500 enabled:hover:bg-green-300 disabled:opacity-70"
            onClick={() => console.log('Calculate Distribution')}>
            Calculate Distribution
          </button>
        </div>
      )}
      {calculated && <p>Calculation</p>}
    </>
  )
}
