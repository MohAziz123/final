import Carousel from 'react-bootstrap/Carousel';

const Home=()=>{

    return(
        
        <div>
         
        
        <div className='azervbnn'>

         
                <p className='pa'>
                <h1 className='azerdcxs'>POURQUOI<br/>
                  gym</h1>S'inscrire chez gym est un bon premier pas.<br/>
                 L'étape suivante consistera à trouver votre routine. C'est  là   que <br/>  
               Basic-Fit est prêt à vous aider. Car si vous êtes et restez  motivé(e)s, <br/>
                  vous êtes définitivement sur la voie du succès.Après une courte<br/> 
                inscription en ligne, les nouveaux membres reçoivent un programme <br/>
                d'entraînement personnel pendant les 6 premières semaines pour vous<br/> 
                    permettre de prendre un bon départ.</p>
        </div>    
               
    
        <div className="poiu" >

            <p className="sdf"><h1 className='club'>CLUBS<br/></h1>
                    <h2 className=''>BASIC-FIT<br/></h2>  
            Dans tous nos clubs, vous pouvez trouver les équipements les plus récents<br/>
            de Matrix et TechnoGym.Tout ce dont vous avez besoin pour un entraînement <br/> 
            parfait !L'hygiène a toujours été importante et l'est encore plus aujourd'hui.<br/>
            Vous pouvez faire votre propre entraînement dans la salle de fitness ouverte,<br/>
            ou suivre un cours virtuel dans la salle de cours collectifs GXR. De nombreuses <br/>
            salles proposent également des cours collectifs Live !<br/></p>

            <img className="xcv" src="https://tse2.mm.bing.net/th?id=OIP.9kAn55iI_gfU73OVlwV1JAHaE7&pid=Api&P=0" alt='Not Found' ></img>
        </div>
        

        <div className='carousel'>
            <Carousel>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="27.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="26.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="35.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>

            </div>






        <div className="azerty">

          <img className="azer" src='https://www.basic-fit.com/on/demandware.static/-/Library-Sites-basic-fit-shared-library/default/dw2d087946/Landscape-Home%20Tools%202021%2007.jpeg'   alt='Not Found' ></img>
          <p className="azerwx "  >Chez the gym, vous avez de nombreuses possibilités de vous entraîner <br/>
                              à la salle, mais nous pensons aussi que vous pouvez être en forme où vous <br/>
                              le voulez.Aimer ce que vous faites, quand vous le voulez et où vous le voulez  <br/>
                            ,est la clé pour atteindre vos objectifs. Que vous vouliez vous entraîner à la  <br/> 
                              salle,à la maison ou à l'extérieur,c'est vous qui décidez.Nous sommes là pour!<br/>
                               vous aider</p>
                              </div>

        <h1 className='azop'>Never give up------Never give up------Never give up------Never give up </h1>

        </div>
      
    )
}





export default Home