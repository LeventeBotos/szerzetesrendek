import Bencesek from "./Bencesek"
import Ferencesek from "./Ferencesek"
import Trappista from "./Trappista"
import Ciszterciek from "./Ciszterciek"

export default function Home() {
  return (
    <>
      <div className="text-white bg-black text-center text-xl flex-vertical xl:text-4xl">
        <Bencesek />           
        <Ferencesek />
        <Trappista />
        <Ciszterciek />
      </div>
    </>
  )
}
