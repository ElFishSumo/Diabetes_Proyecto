import React from 'react'
import './Home.css';

const Home = () => {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-6">
            <h1>¿Qué es la Diabetes?</h1>
            <h5>La diabetes es una enfermedad crónica (de larga duración) que afecta la forma en que el cuerpo convierte los alimentos en energía.
              Su cuerpo descompone la mayor parte de los alimentos que come en azúcar (también llamada glucosa) y los libera en el torrente sanguíneo. El páncreas produce una hormona llamada insulina, que actúa como una llave que permite que el azúcar en la sangre entre a las células del cuerpo para que estas la usen como energía.
              Con diabetes, su cuerpo no produce una cantidad suficiente de insulina o no puede usar adecuadamente la insulina que produce. Cuando no hay suficiente insulina o las células dejan de responder a la insulina, queda demasiada azúcar en el torrente sanguíneo y, con el tiempo, esto puede causar problemas de salud graves, como enfermedad del corazón, pérdida de la visión y enfermedad de los riñones.</h5>
          </div>
          <div className="col-6">
            <img className="img1" src="./images/Diabetes01.jpg" />
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-6">
            <img className="img1" src="./images/Diabetes02.jpg" />
          </div>
          <div className="col-6">
            <h1>Tipos de Diabetes</h1>
            <h5>Diabetes tipo 1: Es causada por una reacción autoinmunitaria (el cuerpo se ataca a sí mismo por error). Esta reacción impide que su cuerpo produzca insulina. Generalmente se diagnostica en niños, adolescentes y adultos jóvenes.
              Diabetes tipo 2: El cuerpo no usa la insulina adecuadamente y no puede mantener el azúcar en la sangre a niveles normales. Es un proceso que evoluciona a lo largo de muchos años y generalmente se diagnostica en los adultos.
              Diabetes gestacional: La diabetes gestacional aparece en mujeres embarazadas que nunca han tenido diabetes. Si usted tiene diabetes gestacional, su bebé podría estar en mayor riesgo de presentar complicaciones de salud.</h5>
          </div>
        </div>
      </div>

      {/* Contenedor de secciones */}
      <div class="contenedor sombra">
        <h2>Secciones</h2>
        <main class="servicios">
          <div class="servicio">
            <h3>Nuestro Proyecto</h3>
            <div class="iconos">
              <a href="/Perfil">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-activity" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M3 12h4l3 8l4 -16l3 8h4" />
                </svg>
              </a>
            </div>
            <p>En esta sección damos a conocer nuestra idea principal del proyecto en el cual trabajamos para su desarrollo con ayuda de un cartel para así hacerlo más visual</p>
          </div>

          <div class="servicio">
            <h3>Agenda</h3>
            <div class="iconos">
              <a href="/Agenda">
                <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report-medical" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-12a2 2 0 0 0 -2 -2h-2" />
                  <rect x="9" y="3" width="6" height="4" rx="2" />
                  <line x1="10" y1="14" x2="14" y2="14" />
                  <line x1="12" y1="12" x2="12" y2="16" />
                </svg>
              </a>
            </div>
            <p>Aquí será posible agendar el día a día del usuario para así llevar una continuidad y registro de su dieta y actividades día a día</p>
          </div>
          
          <div className='servicio'>
            <h3>Video</h3>
          <iframe width="100%" height="100%" src="https://www.youtube.com/embed/9bGgtPNROqM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            
        </main>
      </div>
    </div>
  )
}

export default Home