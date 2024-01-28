import axios from 'axios';
import { FormEventHandler, Dispatch, SetStateAction } from 'react';
import Image from 'next/image';
import LinkResponse from './LinkResponse';

export default function Form(
  { file, setFile, setUrl } : {
    file: File | undefined,
    setFile: Dispatch<SetStateAction<File | undefined>>,
    setUrl: Dispatch<SetStateAction<string>>
  },
) {
  const handdleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    if (!file) {
      console.error('No se ha seleccionado ningún archivo');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    axios.post(`${process.env.NEXT_PUBLIC_API}`, formData)
      .then((res) => {
        console.log(res);
        if (res && res?.data?.url) {
          setUrl(res.data.url);
        }
      })
      .catch((err) => console.error(err))
      .finally(() => console.log('paso algo'));
  };

  return (
    <form
      onSubmit={handdleSubmit}
      className='w-full flex flex-col justify-center items-center'
    >
      <h1 className='uppercase font-extrabold text-6xl text-center mb-10'>
        Sube tu archivo
      </h1>
      {
        file ? (
          <>
            <LinkResponse fileName={file.name}/>
            <button type="submit" className='px-6 py-3 rounded-md bg-black text-white hover:bg-zinc-800 mt-8'>
              Subir
            </button>
          </>
        ) : (
          <label id='drop-area' className='hover:cursor-pointer'>
            <div id="img-view" className='flex flex-col justify-center items-center p-4 gap-4'>
              <Image
                width={150}
                height={150}
                alt=''
                src='./cloud.svg'
              />
              <p className='font-bold text-zinc-700'>Arrastra y suelta la imagen a subir o haz click para escoger</p>
            </div>
            <input
              type="file"
              style={{ display: 'none' }}
              onChange={(e) => {
                const currentFile = e.target.files;
                if (currentFile) {
                  setFile(currentFile[0]);
                }
              }}
            />
          </label>
        )
      }
    </form>
  );
}
