import React, { useState } from "react";

const Home = () => {
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
  });
  const [data, setdata] = useState([]);
  const [editClick, setEditClick] = useState(false);
  const [editIndex, setEditIndex] = useState("");
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("inputs", inputs);
    if (editClick) {
      const tempdata = data;
      Object.assign(tempdata[editIndex], inputs);
      setdata([...tempdata]);
      setEditClick(false);
      setInputs({
        name: "",
        email: "",
      });
    } else {
      setdata([...data, inputs]);
      setInputs({
        name: "",
        email: "",
      });
    }
  };

  const handleDelete = (index) => {
    const filterData = data.filter((item, i) => i !== index);
    setdata(filterData);
  };
  const handleEdit = (index) => {
    const tempData = data[index];

    setInputs({ name: tempData.name, email: tempData.email });
    setEditClick(true);
    setEditIndex(index);
  };
  return (
    <div className="min-h-screen bg-[#004b43] w-[100vw]">
      <h1 className="text-center">Crud App</h1>
      <div className="bg-[#e5e4e4] max-w-fit m-auto p-10">
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label>Name</label>
            <input name="name" value={inputs.name} onChange={handleChange} />
          </div>
          <div className="flex flex-col">
            <label>Email</label>
            <input name="email" value={inputs.email} onChange={handleChange} />
          </div>
          <button type="submit" className="w-full bg-[#014d64] text-white mt-3">
            {editClick ? "update" : "Add"}
          </button>
        </form>
      </div>
      <div>
            {data.map((item, i) => (
            
               <div className='flex items-center justify-center mt-10 '>
        
               <div class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                   <div class="flex justify-end px-4 pt-4">
                      
                      
                       <div id="dropdown" class="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                           <ul class="py-2" aria-labelledby="dropdownButton">
                           <li>
                               <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Edit</a>
                           </li>
                           <li>
                               <a href="/" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Export Data</a>
                           </li>
                           <li>
                               <a href="/" class="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Delete</a>
                           </li>
                           </ul>
                       </div>
                   </div>
                   <div class="flex flex-col items-center pb-10">
                       <img class="w-24 h-24 mb-3 rounded-full shadow-lg" src="https://picsum.photos/200/300" alt="Bonnie"/>
                       <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.name}</h5>
                       <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{item.email}</h5>
                   </div>
                   <button className="bg-green-500 w-[200px] ml-24  mb-4" onClick={() => handleEdit(i)}>Edit</button>
                   <button className="bg-red-500 w-[200px] ml-24  mb-4" onClick={() => handleDelete(i)}>Delete</button>
               </div>
               
               
                   </div>
            ))}
       
      </div>
    </div>
  );
};

export default Home;