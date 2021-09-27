import react from 'react';
import './UhshashYangiliklar.css';
import MiniCard from '../miniCard/MiniCard';
import DataUhshashYangiliklar from '../../dataUhshashYangiliklar';


function createMiniCardEntry(dataTerm) {
    return <MiniCard 
        key={dataTerm.id}
        description={dataTerm.description.slice(0, 58) + '...'}
        img={dataTerm.img}
    />
}


let miniCardMap = DataUhshashYangiliklar.map(createMiniCardEntry);

function UhshashYangiliklar() {
    
    return(        
        <div>
            <section className="third">
                <div className="uk-container">                    
                    <div className="sarlavha">Ўхшаш янгиликлар</div>
                    <div className="uk-grid uk-flex" uk-grid>   
                                     
                        <div className="uk-column-1-2 man-column-width">{miniCardMap}</div>
                        
                                                
                        <div className="uk-width-1-3@m">
                            
                        </div>
                        

                    </div>
                </div>
            </section>
            
            
            
        </div>
    )
}

export default UhshashYangiliklar;