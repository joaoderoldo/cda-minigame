import { Suspense } from 'react'
import { Route, Routes as RoutesWrapper } from 'react-router-dom'

import { Home } from '@/routes/paths'

const Routes = () => {
  return (
    <Suspense fallback={<div>Carregando</div>}>
      <RoutesWrapper>
        <Route path="/" element={<Home />} />
      </RoutesWrapper>
    </Suspense>
  )
}

export { Routes }
