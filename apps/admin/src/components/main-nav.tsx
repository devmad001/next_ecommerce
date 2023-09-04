'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { cn } from '@/lib/utils'

export function MainNav({
   className,
   ...props
}: React.HTMLAttributes<HTMLElement>) {
   const pathname = usePathname()

   const routes = [
      {
         href: `/billboards`,
         label: 'Billboards',
         active: pathname.includes(`/billboards`),
      },
      {
         href: `/categories`,
         label: 'Categories',
         active: pathname.includes(`/categories`),
      },
      {
         href: `/products`,
         label: 'Products',
         active: pathname.includes(`/products`),
      },
      {
         href: `/orders`,
         label: 'Orders',
         active: pathname.includes(`/orders`),
      },
      {
         href: `/payments`,
         label: 'Payments',
         active: pathname.includes(`/payments`),
      },
      {
         href: `/users`,
         label: 'Users',
         active: pathname.includes(`/users`),
      },
      {
         href: `/codes`,
         label: 'Codes',
         active: pathname.includes(`/codes`),
      },
   ]

   return (
      <nav
         className={cn('flex items-center space-x-4 lg:space-x-6', className)}
         {...props}
      >
         {routes.map((route) => (
            <Link
               key={route.href}
               href={route.href}
               className={cn(
                  'text-sm transition-colors hover:text-primary',
                  route.active
                     ? 'font-semibold'
                     : 'font-light text-muted-foreground'
               )}
            >
               {route.label}
            </Link>
         ))}
      </nav>
   )
}