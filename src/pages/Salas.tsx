import { FormEvent, useState } from 'react';

import illustrationImg from '../assets/images/illustration.svg'

import '../styles/auth.scss'

export function NewRoom() {
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt="Iustração simbolizando perguntas e respostas" />
                <strong>Crie salas de Q&amp;A ao-vivo</strong>
                <p>Tire as dúvidas da sua audiência em tempo real</p>
            </aside>
        </div>
    )
}