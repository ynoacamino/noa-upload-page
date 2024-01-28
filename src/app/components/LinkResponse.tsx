import Image from 'next/image';

export default function LinkResponse({ fileName } : { fileName: string }) {
  return (
    <div className='flex flex-col text-center items-center justify-center gap-4'>
      <Image
        alt=""
        src="./file.svg"
        width={100}
        height={100}
      />
      <span>
        {fileName}
      </span>
    </div>
  );
}
