

export const DataPokemonSelect = ({data}) => {
    const { Id, name, sprite, types, stats, description } = data;
  return (
    <div className='card card-style mt-3 p-2 d-flex mx-auto border-dark col-pers shadow-lg'>
                       <div className='row g-0'>
                         <div className='col-md-4'>
                           <img src={sprite} alt={sprite} className='card-img-top mts-100 img-fluid max-500' />
                           <li className='list-group-item mt-5 pokemon-tipos'>
                               {types && types.map((type) => <p key={type.type.name} className= {`${type.type.name} tipo `} >{type.type.name}</p>)}
                             </li>
                         </div>
                         <div className='col-md-8 animate__fadeIn'>

                           <div className='card-body ffcanvas-lg row' >
        
                             <h4 className='card-title tm-pers col-8 alert alert-primary '>No. {Id}  {name}</h4>
                             
                           </div>

                           <ul className='list-group color-fonts list-group-flush my-5'>
                             
                           <div className="d-flex row p-2 justify-content-end align-items-center">
                             {stats && stats.map((stat) => 
                               <div key={stat.stat.name} className="my-1 d-flex ml-auto">
                                 <div className='stat-pers '>{stat.stat.name}: {stat.base_stat}</div>
                                 <div className="progress progr-pers" style={{ height: "20px" }}>
                                   <div className={`progress-bar progress-${stat.stat.name} progress-bar-striped progress-bar-animated progr-pers`} role="progressbar" 
                                     aria-label={stat.stat.name} aria-valuenow={stat.base_stat} 
                                     aria-valuemin="0" aria-valuemax="250" 
                                     style={{ 
                                      width: `${(stat.base_stat / 250) * 100}%`,
                                      backgroundColor: '.progress-ram'
                                     }}>
                                   </div>
                                 </div>
                                 
                               </div>
                             )}
                           </div>   
                             
                           </ul>
                         </div>
                       </div>
                       <div className='col d-flex '>
                       <p className='card-text my-2 p-2  col-md-8 mx-auto border border-dark style-des'>{description}</p>
                       </div>
                       
                     </div>
  )
}
