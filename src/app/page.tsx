'use client';

import { useState } from 'react';
import Image from 'next/image';
import Form from './components/Form';

export default function Home() {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState('');

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-bgBase dark:bg-black p-5">
      <div className='w-full max-w-md bg-bgBase2 p-10 border-solid border-gray-300 border-[1px] rounded-xl flex flex-col items-center'>

        {
          url ? (
            <>
              <h1 className='uppercase font-extrabold text-5xl text-center mb-10'>
                Tu archivo esta listo
              </h1>
              <div className='flex gap-4 items-center justify-center'>
                <a href={url} target='_blank' className='text-zinc-800 hover:text-zinc-900 hover:underline'>
                  TU LINK ESTA LISTO
                </a>
                <button
                  type="button"
                  className='hover:bg-bgBase hover:shadow-md border-solid border-[1px] border-transparent hover:border-zinc-200 rounded-md p-2 transition-all'
                  onClick={() => {
                    navigator.clipboard
                      .writeText(url);
                  }}
                >
                  <Image
                    alt=''
                    src={'./copy.svg'}
                    height={30}
                    width={30}
                    className='opacity-70'
                  />
                </button>
              </div>
              <button
                type="button"
                className='px-6 py-3 rounded-md bg-black text-white hover:bg-zinc-800 mt-8'
                onClick={() => {
                  setFile(undefined);
                  setUrl('');
                }}
              >
                Subir otro
              </button>
            </>
          ) : (
            <Form file={file} setFile={setFile} setUrl={setUrl}/>
          )
        }
      </div>
    </main>
  );
}
