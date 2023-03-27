import Link from "next/link"
import Ciszterciek from "./Ciszterciek"
import Trappista from "./Trappista"

const Bencesek = () => {
    return (
      <div className='benc text-white flex flex-col justify-evenly'>
                    <div className="flex flex-wrap justify-around font-bold p-2 relative z-1 top-0 m-2">
      <Link className="rounded-2xl hover:bg-white hover:bg-opacity-25" href={"#Bencesek"}>Bencés</Link>
      <a className="rounded-2xl hover:bg-white hover:bg-opacity-25" href="#Ferencesek">Ferences</a>
      <a className="rounded-2xl hover:bg-white hover:bg-opacity-25" href="#Palosok">Pálos</a>
      <a className="rounded-2xl hover:bg-white hover:bg-opacity-25" href="#Domonkosok">Domonkos</a>
    </div>
        <h1 className="font-bold p-5 m-5 text-6xl lg:text-9xl" >Bencés rend</h1>
            <div className="flex justify-evenly flex-col md:flex-row">
                <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Medalla_San_Benito.PNG/250px-Medalla_San_Benito.PNG" />
                <div className='text-white flex flex-col justify-around'>
                 <div className=""><p>Nursiai Szent Benedek alapította, már a VI. században, ez volt a legelső szerzetesrend.</p></div>
                 <div className=""><p>Ora et labora = Imádkozz és dolgozz  - Nem csak az ima, hanem a munka is nagyon fontos, Pl.: Földművelés, orvoslás, tanítás.</p></div>
                <div className=""><p>Elvilágiasodik, gazdaggá válik a rend, és ezzel visszaélnek, ezért kialakul a cluny mozgalom, ami vissza szeretne térni az eredeti rendi életmódhoz, és a Bencés regulához.</p></div>
                </div>
            </div>
            <div className="flex justify-evenly flex-col md:flex-row">
            <Trappista />
                <img alt="oltozet" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Habit_%28Order_of_Saint_Benedict%29.svg/200px-Habit_%28Order_of_Saint_Benedict%29.svg.png" />
            </div>
            <div className="flex justify-evenly flex-col md:flex-row">
                <img alt="kep" src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Milkau_Das_Kloster_von_Cluny_-_Eingang_zur_Abtei_233-2.jpg/200px-Milkau_Das_Kloster_von_Cluny_-_Eingang_zur_Abtei_233-2.jpg" />
                <Ciszterciek />
            </div>
      </div>
    )
  }
  
  export default Bencesek
  