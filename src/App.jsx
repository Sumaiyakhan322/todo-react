function App() {
  return <>

  <div className="text-center mx-20">

  <h1 className="text-6xl my-10 font-bold">Todo App</h1>


  {/* Todo add */}
   <div className="grid grid-cols-5 gap-10">
     <div className="col-span-2">
        <input type="text" name="" id="" className="border border-black w-full" />
     </div>
     <div className="col-span-2">
       <input type="date" className="w-full" />
     </div>
     <div>
      <button>Add</button>
     </div>
   </div>
  </div>

  </>;
}

export default App;
