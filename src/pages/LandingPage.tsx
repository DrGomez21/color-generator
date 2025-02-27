
import { Link } from "react-router-dom";
import deviceFrame from "../assets/android-device.png";

export const LandingPage = () => {
  return (
    <>
      <h1 className="text-4xl text-[#000000] font-yeseva text-center py-6">Hovy</h1>

      <div className="flex flex-col mx-4 text-center space-y-4">
        <h2 className="text-[#000000] text-2xl font-yeseva">El creador de paletas de colores <u>más rápido</u></h2>
        <span className="text-[#000000] text-lg font-poppins">Obtén los mejores colores para tu marca o sitio web.</span>
      </div>

      <div className="flex justify-center mx-4 mt-8">
        <div className="w-24 h-32 bg-[#669BBC] border-2 border-[#000000] rounded-[40px] shadow-[.3rem_.3rem_#000000]"></div>
        <div className="w-24 h-32 bg-[#003049] border-2 border-[#000000] rounded-[40px] shadow-[.3rem_.3rem_#000000]"></div>
        <div className="w-24 h-32 bg-[#FDF0D5] border-2 border-[#000000] rounded-[40px] shadow-[.3rem_.3rem_#000000]"></div>
        <div className="w-24 h-32 bg-[#C1121F] border-2 border-[#000000] rounded-[40px] shadow-[.3rem_.3rem_#000000]"></div>
      </div>

      <div className="flex flex-col space-y-4 mx-4 mt-6">
        <Link to={'/creator'}>
          <button className="bg-[#99FFCC] border-2 border-black text-[#000000] shadow-[.3rem_.3rem_#121212] w-full font-yeseva text-xl px-4 py-2 rounded-lg hover:scale-95 hover:shadow-none transition duration-100">Empezar a crear</button>
        </Link>
        <a href="https://github.com/DrGomez21/color-generator" target="_blank" className="bg-white border-2 text-center border-black text-black shadow-[.3rem_.3rem_#121212] w-full font-yeseva text-xl px-4 py-2 rounded-lg hover:scale-95 hover:shadow-none transition duration-100">Código en Github</a>
      </div>

      <div className="flex flex-col space-y-4 mx-4 mt-6">

        <span className="text-black text-lg font-poppins text-center">Colores ideales para UI, diseño gráfico y más.</span>

        <div className="flex gap-5 justify-between mx-4">
          <div className="h-52 flex flex-col w-[130px] border-2 border-[#000000] rounded-lg shadow-[.3rem_.3rem_#121212] overflow-hidden">
            <div className="w-full h-12 bg-[#669BBC] -z-10"></div>
            <div className="w-full h-12 bg-[#003049] -z-10"></div>
            <div className="w-full h-12 bg-[#FDF0D5] -z-10"></div>
            <div className="w-full h-12 bg-[#C1121F] -z-10"></div>
          </div>
          <div className="h-52 flex justify-center items-center w-full bg-[#669BBC] border-2 border-black rounded-lg shadow-[.3rem_.3rem_#121212]">
            <img className="mt-2 object-contain" src={deviceFrame} alt="Frame" />
          </div>
        </div>

      </div>

      <footer className="flex flex-col items-center mt-8 pb-4">
        <div className="flex items-center justify-between gap-4">
          <span className="text-4xl text-[#000000] font-yeseva text-center py-6">Hovy</span>
          <span className="text-sm font-poppins">Desarrollado con cariño ❤️</span>
        </div>

        <a href="https://www.instagram.com/godie.codes/" className="font-poppins no-underline text-black">@Godie.codes</a>
      </footer>
    </>
  )
}
