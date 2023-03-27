const Palosok = () => {
  return (
    <div className='pal text-white flex flex-col justify-evenly '>
  
    <h1 className="font-bold p-5 m-5 text-6xl lg:text-9xl">Pálos rend</h1>
        <div className="flex justify-evenly flex-col md:flex-row">
            <img alt="logo" src="https://upload.wikimedia.org/wikipedia/commons/8/81/The_Coat_of_Arms_of_the_Pauline_Fathers.png" />
            <p className="self-center">A Pálos rendet magyarok alapítja Boldog Özséb a közpkorban.</p>
        </div>
        <div className=""><p>Remete Szent Pál a névadója.</p></div>
        <div className="flex justify-evenly flex-col md:flex-row">
            <p className="self-center">Eredeti székhelye a Budakeszi út és Szépjuhászné körül volt, de mikor II. József király feloszlatta a rendet, átkerült a központja Częstochowa-ba.</p>
            <img alt="hely" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Poland_adm_location_map.svg/248px-Poland_adm_location_map.svg.png" />
        </div>
        <div className="flex justify-evenly flex-col md:flex-row">
            <img alt="kep" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Rockchapel.JPG/230px-Rockchapel.JPG" />
            <p className="self-center">Mostani legfőbb temploma a Szikla kápolna</p>
        </div>
        
        <div className="p-4"><p>A címerükön Remete Szent Pálhoz kapcsolódó dolgok szerepelnek, mint a pálmafa, ami táplálta Pált, az oroszlán, ami Pál sírját ásta ki, és a holló egy cipővel a csőrében, ami a remeteségét fejezi ki.</p></div>
        Készitették:
      <ul className="font-bold">
        <li>Botos Levente</li>
        <li>Győrfi Péter</li>
      </ul>
  
  </div>
  )
}

export default Palosok
