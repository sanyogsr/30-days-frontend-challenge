import arrow from "./assets/icon.svg"

const App = () => {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gray-100 '>
      <div className='w-96 rounded-xl bg-white p-8 '>

        <form className='flex gap-5 text-xs font-semibold '>
          <div className='flex flex-col gap-2'>
            <label htmlFor="day">DAY</label>
            <input className='w-16 rounded-lg border border-gray-400 px-3 py-2' type="text" id='day' placeholder='DD' name='day' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="month">MONTH</label>
            <input className='w-16 rounded-lg border border-gray-400 px-3 py-2' type="text" id='month' placeholder='MM' name='month' />
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor="year">YEAR</label>
            <input className='w-16 rounded-lg border border-gray-400 px-3 py-2' type="text" id='year' placeholder='YY' name='year' />
          </div>



        </form>

        <div className='relative'>
          <hr className='border-b-gray-400 my-8 w-full' />
          <button className='absolute -top-5 right-0 bg-purple-500 rounded-full w-12 h-12'>
            <img src={arrow} alt="icon" className='h-8 w-12' />
          </button>
        </div>

      </div>

    </main>
  )
}

export default App