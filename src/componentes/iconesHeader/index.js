import perfil from '../../img/perfil.svg';
import sacola from '../../img/sacola.svg'
const icones = [perfil,sacola]
function iconesHeader(){
    return  <ul className='icones'>
    {icones.map((imagem)=>(
        <li className='icone'><img src={imagem} alt='foto'></img></li>
      ) )}
    </ul>;
}

export default iconesHeader;