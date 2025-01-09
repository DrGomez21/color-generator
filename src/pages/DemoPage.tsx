
interface PaletaDeColores {
  textColor: string
  backgroundColor: string
  primaryColor: string
  secondaryColor: string
}

export const DemoPage = ({ textColor, backgroundColor, primaryColor, secondaryColor }: PaletaDeColores) => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-52 h-52 rounded-md" style={{ backgroundColor: backgroundColor }}></div>
      <div className="w-52 h-52 rounded-md" style={{ backgroundColor: textColor }}></div>
      <div className="w-52 h-52 rounded-md" style={{ backgroundColor: primaryColor }}></div>
      <div className="w-52 h-52 rounded-md" style={{ backgroundColor: secondaryColor }}></div>
    </div>
  )
}
