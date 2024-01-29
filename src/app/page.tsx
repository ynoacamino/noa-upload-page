'use client';

import { useState } from 'react';
import Form from './components/Form';
import ReadyFile from './components/ReadyFile';
import Footer from './components/Footer';

export default function Home() {
  const [file, setFile] = useState<File>();
  const [url, setUrl] = useState('');

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center bg-bgBase dark:bg-black p-5">
      <div className='flex-1 flex w-full justify-center items-center'>
        <div className='w-full max-w-md justify-between bg-bgBase2 p-10 border-solid border-gray-300 border-[1px] rounded-xl flex flex-col items-center min-h-[550px]'>
          {
            url ? (
              <ReadyFile setFile={setFile} url={url} setUrl={setUrl} />
            ) : (
                <Form file={file} setFile={setFile} setUrl={setUrl}/>
            )
          }
        </div>
      </div>
      <Footer />
    </main>
  );
}
