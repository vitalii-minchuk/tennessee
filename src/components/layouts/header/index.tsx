import {HandCoins} from 'lucide-react'
import Link from 'next/link'

import { appRoutes } from '~/components/layouts/header/data'

export const Header = () => {
  return (
    <header>
        <div className="max-w-7xl flex gap-2">
            <HandCoins />
            <nav>
                <ul>
                    {appRoutes.map(el => (
                        <li key={el.path}>
                            <Link href={el.path}>
                            {el.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    </header>
  )
}
