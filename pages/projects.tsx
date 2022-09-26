import { useInView } from 'react-intersection-observer'

function projects () {
  
  const { ref:fellowShip, inView: fellowShipInView } = useInView()
  const { ref:twoTowers, inView: twoTowersInView } = useInView()
  const { ref:returnOfTheKing, inView: returnOfTheKingInView } = useInView()


  return (
    <div className="project-container">
        <section
          ref={fellowShip} 
          className={`${'hidden'} ${fellowShipInView ? 'show' : 'hidden'}`}
        >
            <h1>great movie</h1>
            <p>
              <span>the lord of the rings the fellowship of the ring</span>
            </p>
        </section>

        {/* possibly add content in middle of each section to emphasis the scroll animation */}
        <section
          ref={twoTowers} 
          className={`${'hiddenOpposite'} ${twoTowersInView ? 'showOpposite' : 'hiddenOpposite'}`}
        >
            <h1>another great movie</h1>
            <p><span>the lord of the rings the two towers</span></p>
        </section>
        <section
          ref={returnOfTheKing} 
          className={`${'hidden'} ${returnOfTheKingInView ? 'show' : 'hidden'}`}
        >
            <h1>you guessed it</h1>
            <p><span>the lord of the rings return of the king</span></p>
        </section>
        
    </div>
  )
}

export default projects