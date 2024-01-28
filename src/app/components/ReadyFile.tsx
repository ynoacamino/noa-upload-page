import { Dispatch, SetStateAction } from 'react';
import CopyButton from './CopyButton';

export default function ReadyFile({ url, setFile, setUrl } : {
  url: string,
  setFile: Dispatch<SetStateAction<File | undefined>>,
  setUrl: Dispatch<SetStateAction<string>>
}) {
  return (
    <>
      <h1 className='uppercase font-extrabold text-5xl text-center mb-10'>
        Tu archivo esta listo
      </h1>
      <div className='flex flex-col gap-4 items-center justify-center'>
        <span className='uppercase text-2xl text-zinc-700'>
          !Copia el link!
        </span>
        <CopyButton url={url} />
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
  );
}
