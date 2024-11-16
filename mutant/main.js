import './style.css'
import { isMutant } from './isMutant.js'

document.querySelector('#app').innerHTML = `
  <div>
    <h3>Ingresá el arreglo de cadenas para saber si el individiuo es mutante o no. Por ejemplo: <br> ATGCGA, CAGTGC, CCCGTA, ATGCGA, CAGTGC, CCCGTA</h3>
    <input style= width:100% id="isMutantInput"/>
    <div class="card">
      <button id="isMutant" type="button">Validar es mutante</button>
    </div>
  </div>
`

document.getElementById("isMutant").addEventListener("click", isMutant.bind(document.querySelector('#isMutantInput')))

