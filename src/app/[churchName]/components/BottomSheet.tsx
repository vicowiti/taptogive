'use client';
 
import { Drawer } from 'vaul';
import { SlOptions } from "react-icons/sl";
import { categories } from '@/data';
import { FaGift } from 'react-icons/fa';
 
export default function BottomSheet() {
  return (
    <Drawer.Root>
      <Drawer.Trigger><SlOptions size={24}/></Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 rounded h-[50%] fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-5 pt-10 bg-gray-100">
            <article className="grid grid-cols-3 gap-5">
              {categories.map(item => <div key={item.id} className="p-4 shadow flex border rounded-lg bg-gradient-to-br from-green-200 to-indigo-500 flex-col gap-3 justify-center items-center">
                <FaGift  className="text-green-600 text-2xl"/>
                <p className="font-semibold text-white">{item.name}</p>
              </div>)}
            </article>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}