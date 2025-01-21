import { useState } from "react";
import toast from "react-hot-toast";
import { MuestraColor } from "../components/MuestraColor";


export const CreadorPaletas = () => {

  const [colors, setColors] = useState(['#443F3F', '#BB3F3F', '#B53F8C', '#AB6F3F'])
  const [savedPalettes, setSavedPalettes] = useState<string[][]>([]);

  function generatePalette(): void {
    const newColors = colors.map(() => '#' + Math.floor(Math.random() * 16777215).toString(16))
    setColors(newColors)
  }

  const handleColorChange = (index: number, color: string) => {
    const newColors = [...colors]
    newColors[index] = color
    setColors(newColors)
  }

  function guardarPaleta(): void {
    const savedPalettes = JSON.parse(localStorage.getItem("paletas") || "[]"); // Obtiene las paletas guardadas o un array vacío
    savedPalettes.push(colors); // Añade la nueva paleta
    localStorage.setItem("paletas", JSON.stringify(savedPalettes)); // Guarda las paletas actualizadas
    toast.success("Paleta guardada con éxito!"); // Muestra un mensaje de éxito
  }

  function listarPaletas(): void {
    const palettes = JSON.parse(localStorage.getItem("paletas") || "[]");
    setSavedPalettes(palettes);
  }

  function eliminarPaleta(index: number): void {
    const palettes = JSON.parse(localStorage.getItem("paletas") || "[]");
    palettes.splice(index, 1); // Elimina la paleta en el índice indicado
    localStorage.setItem("paletas", JSON.stringify(palettes));
    setSavedPalettes(palettes); // Actualiza el estado para reflejar los cambios
    toast.success("Paleta eliminada con éxito!");
  }

  function aplicarPaleta(index: number): void {
    const palette = JSON.parse(localStorage.getItem("paletas") || "[]");
    setColors(palette[index]);
  }

  return (
    <div className="bg-[#F5F4F0]">

      <h1 className="text-4xl text-[#000000] font-yeseva text-center py-6">Hovy</h1>

      <h2 className='font-poppins p-4 text-2xl'>Crear paletas de colores 🎨</h2>

      <div className='p-4 grid grid-rows-2 grid-cols-2 gap-4 items-center'>
        {colors.map((color, index) => (
          <MuestraColor key={index} init={color} onColorChange={(color) => handleColorChange(index, color)} />
        ))}
      </div>

      <div className='p-4 flex flex-col gap-4 justify-center'>
        <button
          className='flex gap-2 justify-center items-center bg-[#99FFCC] border-2 border-black shadow-[.3rem_.3rem_#000000] hover:scale-105 transition duration-75 text-black font-poppins text-lg px-4 py-2 rounded-lg'
          onClick={() => generatePalette()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-pencil-plus"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 20h4l10.5 -10.5a2.828 2.828 0 1 0 -4 -4l-10.5 10.5v4" /><path d="M13.5 6.5l4 4" /><path d="M16 19h6" /><path d="M19 16v6" /></svg>
          Crear paleta
        </button>

        <button
          className='flex gap-2 justify-center items-center border-2 border-black shadow-[.3rem_.3rem_#000000] bg-[#7BBBFF] hover:scale-105 transition duration-75 text-black font-poppins text-lg px-4 py-2 rounded-lg'
          onClick={() => guardarPaleta()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-device-floppy"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" /><path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M14 4l0 4l-6 0l0 -4" /></svg>
          Guardar
        </button>

        <button
          className='bg-[#FF99CC] flex gap-2 justify-center items-center border-2 border-black shadow-[.3rem_.3rem_#000000] hover:scale-105 transition duration-75 text-black font-poppins text-lg px-4 py-2 rounded-lg'
          onClick={() => listarPaletas()}
        >
          <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye-heart"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M13.905 11.39a2 2 0 1 0 -2.855 2.37" /><path d="M9.992 17.779c-2.722 -.621 -5.053 -2.547 -6.992 -5.779c2.4 -4 5.4 -6 9 -6c3.332 0 6.15 1.714 8.454 5.14" /><path d="M18 22l3.35 -3.284a2.143 2.143 0 0 0 .005 -3.071a2.242 2.242 0 0 0 -3.129 -.006l-.224 .22l-.223 -.22a2.242 2.242 0 0 0 -3.128 -.006a2.143 2.143 0 0 0 -.006 3.071l3.355 3.296z" /></svg>
          Ver paletas
        </button>

      </div>

      <div className='p-4'>
        <h2 className='font-poppins text-xl'>Paletas guardadas 💾</h2>
        <div className='grid grid-cols-2 gap-4 mt-4'>
          {savedPalettes.map((palette, index) => (
            <div key={index} className='bg-white p-2 border-2 border-black rounded-lg'>
              <div className='flex justify-center gap-2'>
                {palette.map((color, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: color }}
                    className='w-8 h-8 rounded-md border'
                  />
                ))}
              </div>

              <div className="flex justify-between mx-1 mt-1">
                <button
                  className='mt-2 bg-[#FFCC99] text-black px-3 py-1 rounded-md border-2 border-black'
                  onClick={() => eliminarPaleta(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-trash-x"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M4 7h16" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /><path d="M10 12l4 4m0 -4l-4 4" /></svg>
                </button>
                <button
                  className='mt-2 bg-[#FF99CC] text-black px-3 py-1 rounded-md border-2 border-black'
                  onClick={() => aplicarPaleta(index)}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-eye"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" /><path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6" /></svg>
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
