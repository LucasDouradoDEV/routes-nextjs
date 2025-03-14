import { NextResponse, type MiddlewareConfig, type NextRequest } from "next/server"

const publicRoutes = [
    {
        path: '/login',
        whenAuthenticated: 'redirect'
    },
    {
        path: '/cadastre-se',
        whenAuthenticated: 'redirect'
    },
    {
        path: '/sobre-nos',
        whenAuthenticated: 'next'
    },
    {
        path: '/produtos',
        whenAuthenticated: 'next'
    }
] as const

const REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE = '/login'


export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname
    const publicRoute = publicRoutes.find(route => route.path === path)
    const authToken = request.cookies.get('token')?.value

    if(!authToken && publicRoute) { 
        return NextResponse.next()
    }

    if(!authToken && !publicRoute) {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = REDIRECT_WHEN_NOT_AUTHENTICATED_ROUTE
        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && publicRoute && publicRoute.whenAuthenticated === 'redirect') {
        const redirectUrl = request.nextUrl.clone()
        redirectUrl.pathname = '/'
        return NextResponse.redirect(redirectUrl)
    }

    if(authToken && !publicRoute){
        // Conferir se o token está EXPIRADO (Não chamar API, apenas checar se está EXPIRADO)
        // Se sim, remove cookie e volta pra tela de login


        return NextResponse.next()
    }

    return NextResponse.next()
}


export const config: MiddlewareConfig = {
    matcher: [
      /*
       * Match all request paths except for the ones starting with:
       * - api (API routes)
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico, sitemap.xml, robots.txt (metadata files)
       */
      '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
    ],
}
