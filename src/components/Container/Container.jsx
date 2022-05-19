const Container =() => {
    return (
      <div className="py-24 px-3 lg:flex">
        {/*Card 1*/}
        <div className=" flex flex-col justify-center items-center px-3 max-w-sm mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-20 w-20 text-blue-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          <h1 className="text-2xl my-4">Fully Responsive</h1>
          <p className="text-center text-gray-500">This theme will look great on any device, no matter the size!</p>
        </div>
        {/*Card 2*/}
        <div className=" flex flex-col justify-center items-center px-3 max-w-sm mx-auto my-12">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
</svg>
          <h1 className="text-2xl my-4">Bootstrap 5 Ready</h1>
          <p className="text-center text-gray-500">Featuring the latest build of the new Bootstrap 5 framework!</p>
        </div>
        {/*Card 3*/}
        <div className=" flex flex-col justify-center items-center px-3 max-w-sm mx-auto">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-20 w-20 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 4v12l-4-2-4 2V4M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
</svg>
          <h1 className="text-2xl my-4">Easy to Use</h1>
          <p className="text-center text-gray-500">Ready to use with your own content, or customize the source files!</p>
        </div>
      </div>
    );
}
export default Container;