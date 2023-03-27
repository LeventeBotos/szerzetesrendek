import Bencesek from "./Bencesek"
import Ferencesek from "./Ferencesek"
import Palosok from "./Palosok"

export default function Home() {
  return (
    <>
      <div className=" absolute text-white bg-black text-center text-xl flex-vertical xl:text-4xl"> 
        <section id="Bencesek"><Bencesek /></section>
        <section id="Ferencesek"><Ferencesek /></section>
        <section id="Palosok"><Palosok /></section>
      </div>
    </>
  )
}
