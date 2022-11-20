import React from 'react'
import { Link } from 'react-router-dom';
import { Route } from 'react-router-dom';
import SearchBox from '../layout/Searchbox';
import { skillMap } from '../profile-forms/constant';



const Landing = () => {
  return <section className='landing'>
    <div className='dark-overlay'>
      <h1 className='large' style={{ textAlign: "center", margin: "20px" }}>Kamwale</h1>
      {/* <h3 style={{ textAlign: "center", margin: "20px" }}>Choose Your Service</h3> */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        margin: 'auto',
        placeContent: "center"
      }}>
        {
          Object.keys(skillMap).map(serviceName => {
            return <div className='landingCard'><p style={{
              "margin": "0",
              color: "white",
              "position": "absolute", fontSize: '25px', fontWeight: 700,
              "top": "50%",
              textAlign: "center",
              "left": "50%",
              "marginRight": "-50%",
              "transform": "translate(-50%, -50%)"
            }}>{serviceName}</p></div>
          })
        }
      </div>
    </div>
  </section>
}

// const Landing = () => {
//   return (
//     <section className='landing'>
//       <div className='dark-overlay'>
//         <div className='landing-inner'>
//           <h1 className='large'>Kamwale</h1>
//           <p className='lead'>
//             Buy and Sell all kind of Household Services from plumbing to
//             Baby-sitting.
//           </p>
//           <Route render={({ history }) => <SearchBox history={history} />} />
//         </div>
//       </div>
//     </section>
//   );
// };

export default Landing
