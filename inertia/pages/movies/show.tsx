import type { InertiaProps } from '~/types'

type PageProps = InertiaProps<{ id: number }>

export default function MovieShow({ id }: PageProps) {
  return (
    <>
      <div className="hero">
        <h1>Movie #{id}</h1>
      </div>
    </>
  )
}
