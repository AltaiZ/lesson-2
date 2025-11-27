
 export const Header = ({count}) => {
  return (
    <div>
      <navbar className='bg-blue-400 flex flex-row justify-between
    '>
      <div>
        <h1>🛍️ MyStore</h1>
      </div>
      <div className='flex gap-5 px-5 '>
        <a>Home </a>
        <a>cart</a>
        <p>{count}</p>
      </div>
      </navbar>
    </div>
  )
}


