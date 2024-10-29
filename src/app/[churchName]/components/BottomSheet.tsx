'use client';
 
import { Drawer } from 'vaul';
import { SlOptions } from "react-icons/sl";
import { sheet } from '@/data';
import { FaGift } from 'react-icons/fa';
 
export default function BottomSheet() {
  return (
    <Drawer.Root>
      <Drawer.Trigger><SlOptions size={20}/></Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 rounded h-[50%] fixed bottom-0 left-0 right-0 outline-none">
          <div className="p-5 pt-10 bg-gray-100">
            <article className="grid grid-cols-3 gap-5">
              {sheet.map(item => <div key={item.id} className="p-4  flex  rounded-lg  flex-col gap-3 justify-center items-center">
                <div className="p-4 rounded-full border bg-gradient-to-br from-green-200 to-indigo-500">
                  <FaGift  className="text-green-600 text-2xl"/>
                </div>
                <p className="font-semibold ">{item.name}</p>
              </div>)}
            </article>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}