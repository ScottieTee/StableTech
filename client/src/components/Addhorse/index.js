import React from 'react';

const Addhorse = () => {
  return (
   <form id='form'>
        <div class="w-screen h-screen flex justify-center items-center
    bg-gradient-to-br from-blue-700 to-white-700">
        <form class="p-10 bg-gray rounded-xl drop-shadow-lg space-y-5" action="">
            <h1 class="text-center text-3xl text-white">New Horse</h1>
            <div class="flex flex-col space-y-2">
                <label class="text-sm font-light">Please enter new horse's infomation below:</label>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Horse Name"/>
            </div>
            <div>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Owner Name"/>
            </div>
            <div>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Owner Telephone"/>
            </div>
            <div>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Feed"/>
            </div>
            <div>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Latest Vaccine Date"/>
            </div>
            <div>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Latest Shoe Date"/>
            </div>
            <div>
                <input class="w-96 px-3 py-2 rounded-md border border-slate-400" placeholder="Barn Name"/>
            </div>

            <button class="w-full px-10 py-2 bg-slate-500 text-white rounded-md
            hover:bg-blue-500 hover:drop-shadow-md duration-300 ease-in" type="submit">
                Add Horse
            </button>

        </form>
    </div>
      </form>
  );
};


export default Addhorse;