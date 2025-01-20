import s from './header.module.scss'

export default function Header() {
    return(
        <header className={s.header}>
            <nav className={s.nav}>
                <ul>
                    <li><a href="#">Loja de Celulares</a></li>
                </ul>
            </nav>
        </header>
    )
}