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
    <>
      <h1 className='font-bold p-4 text-2xl'>Crear paletas de colores</h1>

      <div className='p-4 flex gap-4 justify-center'>
        {colors.map((color, index) => (
          <MuestraColor key={index} init={color} onColorChange={(color) => handleColorChange(index, color)} />
        ))}
      </div>

      <div className='p-4 flex gap-4 justify-center'>
        <button
          className='bg-blue-500 hover:scale-105 transition duration-75 text-white font-semibold text-lg px-4 py-2 rounded-lg'
          onClick={() => generatePalette()}
        >
          Crear paleta
        </button>

        <button
          className='bg-green-500 hover:scale-105 transition duration-75 text-white font-semibold text-lg px-4 py-2 rounded-lg'
          onClick={() => guardarPaleta()}
        >
          Guardar
        </button>

        <button
          className='bg-purple-500 hover:scale-105 transition duration-75 text-white font-semibold text-lg px-4 py-2 rounded-lg'
          onClick={() => listarPaletas()}
        >
          Ver paletas
        </button>

      </div>

      <div className='p-4'>
        <h2 className='font-bold text-xl'>Paletas guardadas</h2>
        <div className='flex flex-wrap gap-4'>
          {savedPalettes.map((palette, index) => (
            <div key={index} className='p-2 border rounded-lg'>
              <div className='flex gap-2'>
                {palette.map((color, i) => (
                  <div
                    key={i}
                    style={{ backgroundColor: color }}
                    className='w-8 h-8 rounded-md border'
                  />
                ))}
              </div>
              <button
                className='mt-2 bg-red-500 text-white px-3 py-1 rounded-lg'
                onClick={() => eliminarPaleta(index)}
              >
                Eliminar
              </button>
              <button
                className='mt-2 bg-purple-500 text-white px-3 py-1 rounded-lg'
                onClick={() => aplicarPaleta(index)}
              >
                Aplicar
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
