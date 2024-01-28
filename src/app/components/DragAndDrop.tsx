import Image from 'next/image';
import {
  Dispatch, SetStateAction, DragEventHandler, ChangeEventHandler,
} from 'react';

export default function DragAndDrop({ setFile } : {
  setFile: Dispatch<SetStateAction<File | undefined>>
}) {
  const handdleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const currentFile = e.target.files;
    if (currentFile) {
      setFile(currentFile[0]);
    }
  };

  const handdleDrop: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
    if (e.dataTransfer.files) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handdleDragOver: DragEventHandler<HTMLLabelElement> = (e) => {
    e.preventDefault();
  };
  return (
    <label
      id='drop-area'
      className='hover:cursor-pointer'
      onDragOver={handdleDragOver}
      onDrop={handdleDrop}
    >
      <div id="img-view" className='flex flex-col justify-center items-center p-4 gap-4'>
        <Image
          width={120}
          height={120}
          alt=''
          src='./cloud.svg'
          className='animate-bounce'
        />
        <p className='font-bold text-zinc-700'>Arrastra y suelta la imagen a subir o haz click para escoger</p>
      </div>
      <input
        type="file"
        style={{ display: 'none' }}
        onChange={handdleChange}
      />
    </label>
  );
}
