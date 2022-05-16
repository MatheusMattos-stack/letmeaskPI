
import illustrationImg from '../assets/images/illustration.svg'
import { Button } from '../components/Button';
import { useHistory } from 'react-router-dom';

import '../styles/salas.scss'

export function Salas() {
    const history = useHistory();

    return (
        <div id="page-salas">
            <aside>
                <img src={illustrationImg} alt="Iustração simbolizando perguntas e respostas" />
                <strong>Salas Criadas</strong>
                <p>Lorem ipsum dolor sit amet, consect, lorem ipsum dolor sit amet, lorem ipsum dolor sit</p>
                <div className="button-div">
                    <button onClick={()=> history.push('/rooms/new')}>Crie uma sala</button>
                </div>
            </aside>
        </div>
    )
}