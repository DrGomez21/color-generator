import { useState, useEffect } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import toast from 'react-hot-toast';

interface MuestraColorProps {
  init: string,
  onColorChange: (color: string) => void
}

export const MuestraColor = ({ init, onColorChange }: MuestraColorProps) => {

  const [currentColor, setCurrentColor] = useState(init)

  useEffect(() => {
    setCurrentColor(init)
  }, [init])

  const handleOnChange = (color: ColorResult) => {
    setCurrentColor(color.hex)
    onColorChange(color.hex)
  }

  const [showPicker, setShowPicker] = useState(false)

  return (
    <div className='flex flex-col items-center space-y-4'>
      <div
        className='flex flex-col items-center space-y-2 shadow-lg shadow-slate-400 w-fit h-fit p-4 rounded-lg 
        hover:scale-105 transition duration-100'>
        <div
          className='flex justify-center items-center w-24 h-24 rounded-md hover:cursor-pointer'
          style={{ backgroundColor: currentColor }}>
          <button
            onClick={() => setShowPicker(!showPicker)}
            className='w-full h-full bg-transparent' />
        </div>
        <p className='text-black font-semibold'>{currentColor.toUpperCase()}</p>

        <button
          className='hover:cursor-pointer rounded-lg p-2 hover:bg-slate-300/50 transition duration-100'
          onClick={() => {
            navigator.clipboard.writeText(currentColor)
            toast.success('Color copiado al portapapeles')
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy">
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
          </svg>
        </button>
      </div>

      {showPicker && (
        <div className='absolute top-64' style={{ zIndex: 10 }}>
          <SketchPicker
            className='shadow-lg shadow-slate-400 rounded-lg'
            color={currentColor}
            onChange={handleOnChange}
          />
        </div>
      )}

    </div>
  )
}
